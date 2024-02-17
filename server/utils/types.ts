export enum RoleEnum {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

export type RoleType = typeof RoleEnum[keyof typeof RoleEnum];

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: RoleType;
}

export type TokenStatusCodes = 200 | 201;