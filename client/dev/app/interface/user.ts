/**
 * Created by GiangDH on 5/8/16.
 */
export interface User {
  _id: string;
  fullName: string;
  displayName: string;
  birthday: Date;
  phone: string;
  username: string;
  password: string;
  email: string;
  role: string;
  ownKnowledgeIds:[string];
  onlineTime:[string];
  createdAt: string;
  updatedAt: string;
  level:string;
  linkImg:string;
}
