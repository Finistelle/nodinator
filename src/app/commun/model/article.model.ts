export class Article {
  id: number;
  title: String;
  content: String;
  slug: String;
  status: status;
}
export declare type status = 'PUBLISH' | 'DRAFT' ;
