export class Article {
  id: number;
  title: String;
  content: String;
  slug: String;
  status: typeStatus;
}
export declare type typeStatus = 'PUBLISH' | 'DRAFT' ;
