export interface User {
  email: string;
  password: string;
  fullName: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserRepositoryDataInterface extends User {
  id: string;
  createdAt: string;
  updatedAt: string;
}