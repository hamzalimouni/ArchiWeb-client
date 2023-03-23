export interface IProject {
  _id?: string,
  ownerId: string,
  title: string,
  desc: string,
  img: string,
  startAt: string,
  endAt: string,
  createdAt?: string,
  updatedAt?: string,
}

export interface ISinglProject {
  data: IProject
}

export interface IDataProject {
  data: IProject[]
}
