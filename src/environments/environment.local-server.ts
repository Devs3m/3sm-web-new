/** Local dev server connected to remote/production API */
export const environment = {
  production: false,
  apiUrl: 'https://localhost:3002',
  apiHost: 'https://connectsite.in/',
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token'
};