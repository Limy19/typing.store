export type State = {
  repair: Repair | undefined;
  error: string | undefined;
};

export type Repair = {
  id: number;
  name: string;
  email: string;
  tel: string;
  description: string;
};
