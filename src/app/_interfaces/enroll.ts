export interface IEnroll {
  _id?: string,
  projectId: string,
  studentId: string,
  result: string,
  createdAt?: string,
  updatedAt?: string,
}

export interface ISinglEnroll {
  data: IEnroll
}

export interface IDataEnroll {
  data: IEnroll[]
}
