export interface ICustomError {
  statusCode: number;
  message: string;
}

export interface IVerifyTokenResult {
  valid: boolean;
  accessToken: string | null;
}
