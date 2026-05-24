/**
 * prodlocal-all: Angular local + API http://localhost:3003 (3sm-prod DB)
 * Run backend on port 3003 with 3sm-prod DB connection.
 */
export const environment = {
  production: true,
  apiUrl: 'http://localhost:3003',
  provisionOnlineBaseUrl: '' as string,
  apiHost: 'https://connectsite.in/',
  vcardApiUrl: 'https://connectsite.in/' as string,
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token',
  portalApiKey: '',
  whatsappNumber: '',
  upiId: '9884422526@okbizaxis',
  upiName: 'Sri Sankara Trading',
  upiPhone: '+91 98844 22526'
};
