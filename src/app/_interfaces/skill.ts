export interface ISkill {
  _id?: string,
  title: string,
  desc: string,
  level: string,
  createdAt?: string,
  updatedAt?: string,
}

export interface ISinglSkill {
  data: ISkill
}

export interface IDataSkill {
  data: ISkill[]
}
