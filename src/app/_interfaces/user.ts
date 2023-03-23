export interface IUser {
  _id?: string,
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string,
  role: string,
  createdAt?: string,
  updatedAt?: string
}

export interface ISingleUser {
  data: IUser
}

export interface IDataUser {
  data: IUser[]
}
