/**
 * Interface for the 'Auth' data
 */
export interface AuthEntity {
  id: string | number  | null; // Primary ID
  username: string ;
  password: string | null;
  towenJwt: string | null;
}
