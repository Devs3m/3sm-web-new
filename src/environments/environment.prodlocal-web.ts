/**
 * prodlocal-web: Angular local (port 4200) + API server api-prod.connectsite.in
 * Use with proxy so browser calls /api/* and dev server forwards to api-prod.connectsite.in.
 */
export const environment = {
  production: false,
  apiUrl: '/api',
  provisionOnlineBaseUrl: 'https://api-prod.connectsite.in',
  apiHost: 'https://connectsite.in/',
  vcardApiUrl: 'https://connectsite.in/' as string,
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token',
  portalApiKey: '',
  whatsappNumber: '',
  upiId: '9884422526@okbizaxis',
  upiName: 'Sri Sankara Trading',
  upiPhone: '+91 98844 22526'
};
