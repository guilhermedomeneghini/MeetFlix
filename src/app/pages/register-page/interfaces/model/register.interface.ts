export interface RegisterUser {
  id: number;
  nome: string;
  email: string;
  senha: string;
  createdAt: Date;
  updatedAt: Date;
}

export type RegisterPayload = Omit<
  RegisterUser,
  'id' | 'createdAt' | 'updatedAt'
>;
