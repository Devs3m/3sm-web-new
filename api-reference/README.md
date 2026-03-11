# Sales Summary Transaction API

## Overview

Transaction API to insert into `possales.salessummary` and `possales.salesdetail` tables in a single atomic operation.

## Setup

1. Install `pg` (PostgreSQL): `npm install pg`
2. Add the route to your Express app:

```javascript
const { saveSalesSummaryWithDetails } = require('./api-reference/salessummary-transaction');
app.post('/salessummary/save', saveSalesSummaryWithDetails);
```

## Request body mapping

Map from Angular sales form to API:

| salessummary field | Angular form field | Notes |
|--------------------|-------------------|-------|
| invoiceno | invoiceno | Use numeric if stored as int8 |
| invdate | saledate | YYYY-MM-DD |
| customerid | customerid | |
| customername | customername | |
| tgrossamount | subtotal (before GST) | Sum of items before tax |
| tdisaper | - | Total discount % |
| tdisamount | - | Total discount amount |
| tgstamount | totalgst | |
| tsgstamount | totalgst/2 | If CGST/SGST split |
| tcgstamount | totalgst/2 | If CGST/SGST split |
| grandtotal | grandtotal | |
| paymenttype | paymentmethod | |
| paymentstatus | paymentstatus | boolean |
| accountid | - | From session/context |
| instanceid | - | From session/context |
| createdby | createdby | |
| updatedby | updatedby | |
| isactive | isactive | |

| salesdetail field | Angular item field |
|-------------------|-------------------|
| invoicenoid | invoiceno (same as header) |
| productid | - (from product lookup) |
| productname | description |
| salehsn | hsnSac |
| saleqty | quantity |
| salemrp | rate |
| saledisper | discountPct |
| salegstper | gstPercent |
| saleamount | amount |
| salegrossamount | quantity * rate |
| saltotaldisc | discount amount |
| salesubtotal | amount after discount |
| saletotalcgst | CGST portion |
| saletotalsgst | SGST portion |
| saletotalgst | GST total |
| salegrandtotal | line total |
