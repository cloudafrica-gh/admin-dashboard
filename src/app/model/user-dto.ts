export interface UserDto {
  readonly id?: string;
  username: string;
  email?: string;
  password: string;
  remember?: boolean;
  token?: string;
}
