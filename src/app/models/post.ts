export interface Post {
  id: string;
  title: string;
  info: string;
  metadata: Array<MetaData>;
  userid: string;
  date: string;
  category: string;
  subcategory1?: string;
  subcategory2?: string;
  subcategory3?: string;
  subcategory4?: string;
  subcategory5?: string;
}
export interface MetaData {
  type: string;
  link: string;
}