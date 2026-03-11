# RBAC: Account vs Instance Scope (Frontend)

This doc describes how the **3sm-web** frontend aligns with the backend RBAC API for account-level and instance-level roles. Full backend spec and data-filtering patterns live in the backend repo (`docs/RBAC_ACCOUNT_INSTANCE.md`).

## Role scope (backend)

- **`instanceid` NULL** → **Account-level**: role applies to all instances under the account (e.g. account-level admins see all instances).
- **`instanceid` set** → **Instance-level**: role applies only to that sub-account/instance (instance-level users see only their instance).

## Frontend usage

### Auth and user context

- **AuthService**: `getAccountId()`, `getInstanceId()`, `getUserId()` read from JWT/stored user.
- **Login response**: `user.accountid` and `user.instanceid` (or `accountId` / `instanceId`) are typed in `LoginResponse.user` and used for scope.
- **Data filtering**: In business features (sales, customer, product, etc.), filter by `user.accountid` and, when the user is instance-scoped, by `user.instanceid` (see backend doc for the pattern).

### RBAC API (`RbacService`)

- **`listInstancesByAccount(accountId)`**  
  `GET /rbac/accounts/:accountId/instances` – list instances (sub-accounts) for an account.

- **`listUsersByAccount(accountId, instanceId?)`**  
  `GET /rbac/users/:accountId?instanceId=` – list users; optional `instanceId` to restrict to one instance.

- **`getUserRoles(userId, { accountId?, instanceId? })`**  
  `GET /rbac/users/:userId/roles?accountId=&instanceId=` – roles for a user; optional `instanceId` for scope.

- **`getEffectivePermissions(userId, { accountId?, instanceId? })`**  
  `GET /rbac/users/:userId/effective-permissions?accountId=&instanceId=` – effective permissions; optional `instanceId`.

- **`assignUserRoles(userId, { roleIds, instanceId? })`**  
  Assign roles for a scope: omit or `instanceId: null` = account-level; set `instanceId` = instance-level for that instance.

### User role check (`UserroleService`)

- **`getUserRoleCheck(instanceId?)`**  
  `GET /role/permissions/userrole-check?instanceId=` – optional `instanceId` so the backend can allow RBAC for instance-scoped Super Admins (`hasRbacManage(instanceId)`).  
  The User Role screen passes the current user’s `instanceid` when calling this.

### Assigning roles

- **Account-level**: call `assignUserRoles(userId, { roleIds })` with no `instanceId` (or `instanceId: null`).
- **Instance-level**: call `assignUserRoles(userId, { roleIds, instanceId: instanceId })` for the desired instance.

## Summary

- Use **`RbacService`** for all new RBAC endpoints (instances, users, roles, effective permissions, assign).
- Use **`AuthService.getAccountId()` / `getInstanceId()`** and stored user for scope in UI and when calling RBAC APIs.
- Restrict business data in your services by `user.accountid` and, when the user is instance-scoped, by `user.instanceid`.
