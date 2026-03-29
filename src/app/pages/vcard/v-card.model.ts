/** V Card product/profile data from VCardMaster API */
export interface ProfileData {
  logo?: string;
  photo?: string;
  name?: string;
  designation?: string;
  aboutme?: string;
  mobileNo1?: string;
  emailId?: string;
  whatsAppLink?: string;
  twitterLink?: string;
  faceBookLink?: string;
  vcardLink?: string;
  linkedinLink?: string;
  instagramLink?: string;
  pinrestLink?: string;
  vCardMasterId?: string | number;
  vCardProductMasterData?: Array<{ name?: string; imageUrl?: string }>;
  addressSt1?: string;
  addressSt2?: string;
  addressCity?: string;
  addressState?: string;
  addressCountry?: string;
  latitude?: number;
  longitude?: number;
  video1?: string;
  video2?: string;
}

