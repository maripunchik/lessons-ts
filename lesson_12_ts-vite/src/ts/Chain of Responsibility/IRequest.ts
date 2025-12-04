import type { UserRole } from "./types/UserRole";

export default interface IRequest {
  token?: string;
  role?: UserRole;
  userId: string;
}
