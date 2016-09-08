export interface KSpace {
  _id: string;
  learners: string[];
  lecturer:string;
  requestId:string;
  requestTitle: string;
  offerId:string;
  createdAt: Date;
  tags: any[];
}
