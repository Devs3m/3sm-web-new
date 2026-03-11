/**
 * RBAC constants – align with backend permission catalog and default roles.
 * Multi-tenant: roles/assignments are tenant-scoped; permission catalog is global.
 */

/** Permission key for RBAC management. Only Super Admin role gets this. */
export const RBAC_MANAGE_KEY = 'RBAC.MANAGE';

/** Default role codes seeded per tenant (is_system=true). */
export const DEFAULT_ROLE_CODES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  ADMINISTRATOR: 'ADMINISTRATOR',
  MANAGER: 'MANAGER',
  USER: 'USER',
} as const;

/** Display names for default roles. */
export const DEFAULT_ROLE_NAMES: Record<string, string> = {
  [DEFAULT_ROLE_CODES.SUPER_ADMIN]: 'Super Admin',
  [DEFAULT_ROLE_CODES.ADMIN]: 'Administrator',
  [DEFAULT_ROLE_CODES.ADMINISTRATOR]: 'Administrator',
  [DEFAULT_ROLE_CODES.MANAGER]: 'Manager',
  [DEFAULT_ROLE_CODES.USER]: 'User',
};

/** Role codes that are considered "Super Admin" for UI/guard checks. */
export const SUPER_ADMIN_ROLE_CODES = [
  DEFAULT_ROLE_CODES.SUPER_ADMIN,
  'SUPERADMIN',
  'SUPER_ADMIN',
  'super admin',
  'superadmin',
];
