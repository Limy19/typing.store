export type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};
export type State = {
  user: User | undefined;
  error: string | undefined;
};

export type Registration = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};

export type Authentication = {
  password: string;
  email: string;
};
