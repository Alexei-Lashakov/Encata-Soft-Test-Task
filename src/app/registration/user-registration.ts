export interface UserRegistr {
  emailOrPhone: string | number;
  name: string;
  passwordGroup: {password: string};
}