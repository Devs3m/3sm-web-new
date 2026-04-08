/** Local dev: Angular → Nest on this machine (Nest listens with HTTP on port 3002) */
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3002',
  apiHost: 'https://connectsite.in/',
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token'
};