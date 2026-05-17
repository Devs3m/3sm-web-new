/**
 * Devapiprod: Web local + API server.
 * Use with ng serve proxy so browser calls /api/* and dev server forwards to api.connectsite.in.
 */
export const environment = {
  production: false,
  apiUrl: '/api',
  provisionOnlineBaseUrl: 'https://api.connectsite.in' as string,
  apiHost: 'https://connectsite.in/',
  vcardApiUrl: 'https://connectsite.in/' as string,
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token',
  portalApiKey: '',
  whatsappNumber: '',
  upiId: '9884422526@okbizaxis',
  upiName: 'Sri Sankara Trading',
  upiPhone: '+91 98844 22526'
};
