export interface User {
  email: string;
  password: string;
  fullName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserRepositoryDataInterface extends User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}