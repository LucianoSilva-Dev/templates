import type z from 'zod';
import type {
  getTokenAuthBodyValidation,
  postRegisterAuthBodyValidation,
  tokenResponse,
  userRegisterResponse,
} from './Validations';

export type TokenResponse = z.infer<typeof tokenResponse>;
export type UserRegisterResponse = z.infer<typeof userRegisterResponse>;

export type getTokenAuthBody = z.infer<typeof getTokenAuthBodyValidation>;
export type registerAuthBody = z.infer<typeof postRegisterAuthBodyValidation>;

export interface GetTokenServiceResponse {
  auth: boolean;
  token: string | null;
}

export interface RegisterServiceResponse {
  success: boolean;
  statusCode?: number;
  error?: string;
  message?: string;
}
