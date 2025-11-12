import { rolePermissions, Roles } from "./types/types.js";

export default function getActionsFor(role: Roles): string[]{
	return rolePermissions[role]
}