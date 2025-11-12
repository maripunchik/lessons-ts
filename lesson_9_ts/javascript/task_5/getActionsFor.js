import { rolePermissions } from "./types/types.js";
export default function getActionsFor(role) {
    return rolePermissions[role];
}
