/**
 * proddev-all: Angular local (port 4201) + API api-prod.connectsite.in (3sm-prod DB)
 * Proxy forwards /api/* → https://api-prod.connectsite.in/*
 */
export const environment = {
  production: true,
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
