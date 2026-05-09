export const environment = {
  production: true,
  apiUrl: 'https://api.connectsite.in',
  /** Default online API for setup-page download URL / curl (same host as apiUrl unless you split). */
  provisionOnlineBaseUrl: 'https://api.connectsite.in',
  apiHost: 'https://connectsite.in/',
  /** Base URL for V Card API (VCardMaster). Falls back to apiHost if not set. */
  vcardApiUrl: 'https://connectsite.in/' as string,
  /** Auth header: 'Bearer' = "Bearer <token>", 'token' = "<token>" only */
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token',
  portalApiKey: '',
  whatsappNumber: '',
  upiId: '9884422526@okbizaxis',
  upiName: 'Sri Sankara Trading',
  upiPhone: '+91 98844 22526'
};
