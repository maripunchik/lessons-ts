
export type Roles = "admin" | "editor" | "viewer";

export type Action =
| "create"
| "read"
| "update"
| "delete"
| "configSystem"

export type RolePermissions=Record<Roles,string[]>

export const rolePermissions: RolePermissions = {
  admin: ["create", "read", "update", "delete", "configSystem"],
  editor: ["create", "read", "update"],
  viewer: ["read"]
} satisfies Record<Roles, Action[]>