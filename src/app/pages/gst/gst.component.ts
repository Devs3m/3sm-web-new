import { Component, OnInit } from '@angular/core';
import { GstService } from '../service/gst.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {

  gst!:any[];
  gstForm!:FormGroup;
  isFormOpen = false;
  isEditMode = false;
  dropdownOptions:any[]=[];
  selectedItem: any;
  dropdownItems: any[] =[];  
  data: { id: number; gstName: string; isActive: boolean }[] = [];
  apiData:any[] =[];
  longText: any;
  totalGst:number=0;
  activeGst:number=0;
  deactiveGst:number=0;
  private apiUrl = environment.apiUrl;
  
 
  constructor(
    private gstservice: GstService,
    private fromBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.gstForm=this.fromBuilder.group({
    "gstid":[0],
    "totalgstpercent":[""],
    "igstpercent":[""],
    "cgstpercent":[""],
    "sgstpercent":[""],
    "ugstpercent":[""],
    "chesspercent":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "isactive":["true"],
    "createdby":[1],
    "updatedby":[1],
    "username":["",Validators.required],
    "userid":[1],
    });
    this.gstForm.get('totalgstpercent')?.valueChanges.subscribe((value) => {
      this.onTotalGstPercentChange(value);
    });
    this.getGstDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalGst: number;activeGst: number; deactiveGst: number}>(`${this.apiUrl}/gst/counts`)
        .subscribe(response => {
          this.totalGst = response.totalGst; // Assign API response to totalAccounts
          this.activeGst = response.activeGst; // Assign API response to totalAccounts
          this.deactiveGst = response.deactiveGst; // Assign API response to totalAccounts
          console.log(this.totalGst)
        });
       
    }

  }
  /** When Total GST % is entered: IGST = same; CGST/SGST/UGST = 50% of total each */
  onTotalGstPercentChange(value: unknown): void {
    const num = value === '' || value == null ? NaN : Number(value);
    if (!Number.isFinite(num)) return;
    const half = num / 2;
    this.gstForm.patchValue({
      igstpercent: num,
      cgstpercent: half,
      sgstpercent: half,
      ugstpercent: half
    }, { emitEvent: false });
  }

  onSubmit():void{
    if(this.gstForm.valid){
      console.log('Select Status:',this.gstForm.value.gstisactive);
    }else{
      console.error('Form is Invalid');
    }
    if(this.gstForm.valid){
      console.log('Select GST Status:',this.gstForm.value.gst);
    }else{
      console.error('Form is Invalid');
    }
  }
  /** Build payload matching master.gst schema */
  private buildGstPayload(): Record<string, unknown> {
    const v = this.gstForm.value;
    const userId = this.authService.getUserId?.() ?? this.authService.getUser?.()?.userId ?? this.authService.getUser?.()?.userid ?? 1;
    const toNum = (x: unknown) => (x === '' || x == null) ? 0 : Number(x) || 0;
    const now = new Date().toISOString();
    const chessVal = toNum(this.gstForm.get('chesspercent')?.value ?? v.chesspercent);
    const payload: Record<string, unknown> = {
      totalgstpercent: toNum(v.totalgstpercent),
      igstpercent: toNum(v.igstpercent),
      cgstpercent: toNum(v.cgstpercent),
      sgstpercent: toNum(v.sgstpercent),
      ugstpercent: toNum(v.ugstpercent),
      chesspercent: chessVal,
      chess: chessVal,
      createddate: this.isEditMode ? (v.createddate || now) : now,
      updateddate: now,
      createdby: toNum(v.createdby) || userId,
      updatedby: userId,
      userid: toNum(v.userid) || userId,
      gstisactive: v.isactive === true || v.isactive === 'true' || v.isactive === 'Active' || v.isactive === 1
    };
    if (this.isEditMode) {
      const id = toNum(v.gstid);
      if (id > 0) payload['gstid'] = id;
    }
    return payload;
  }

  createGst(): void {
    const payload = this.buildGstPayload();
    const obs = this.isEditMode && (payload['gstid'] as number) > 0
      ? this.gstservice.updateGst(payload)
      : this.gstservice.addGst(payload);
    obs.subscribe({
      next: (data) => {
        if (data) {
          this.getGstDetails();
          this.restGstForm();
        }
      },
      error: (err) => console.error(this.isEditMode ? 'Error updating GST' : 'Error adding GST', err)
    });
  }
  getGstDetails():void {
    this.gstservice.getGstDetails().subscribe({
      next:(apidata:any) => {
        this.gst=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted GST Details:', this.gst);
        this.gstservice.getGstDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
      });
      }
  getDropDownValue (){
    this.gstservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
   }
   editItem(item: any): void {
    const row = item?.data ?? item;
    const gstid = row?.gstid ?? row?.gstId ?? (row ? row.gstid : null);
    if (!gstid) return;
    this.isEditMode = true;
    this.isFormOpen = true;
    this.gstservice.getDetailsById(gstid).subscribe({
      next: (r) => {
        if (!r) return;
        this.gstForm.patchValue({
          gstid: r.gstid,
          totalgstpercent: r.totalgstpercent ?? '',
          igstpercent: r.igstpercent ?? '',
          cgstpercent: r.cgstpercent ?? '',
          sgstpercent: r.sgstpercent ?? '',
          ugstpercent: r.ugstpercent ?? '',
          chesspercent: r.chesspercent ?? '',
          isactive: r.gstisactive ?? r.isactive ?? true,
          createddate: r.createddate ?? new Date(),
          updateddate: r.updateddate ?? new Date(),
          userid: r.userid ?? 1
        });
      },
      error: (err) => console.error('Error fetching GST details:', err)
    });
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.gstname}?`)) {
      this.gstservice.deleteGst(item.gstid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getGstDetails(); // Refresh grid after delete
      },

      error: (err: any) => console.error('Error deleting account', err),
    });
  }
}
  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('City Data');
  
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "GstData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isEditMode = false;
    this.isFormOpen = true;
  }
  restGstForm(): void {
   this.isFormOpen = false;
   this.isEditMode = false;
   this.gstForm.reset();
   this.gstForm.patchValue({
    gstid: 0,
    totalgstpercent: null,
    igstpercent: '',
    cgstpercent: '',
    sgstpercent: '',
    ugstpercent: '',
    chesspercent: '',
    createdby: '',
    updatedby: '',
    isactive: true,
    createddate: new Date(),
    updateddate: new Date(),
  });
  }
  getDropDownValues(): void {
    this.http.get<any[]>(`${this.apiUrl}/gst/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
}
export class InputPrefixSuffixExample {}
