export interface Post {
  id?: string;
  title: string;
  info: string;
  metadata: Array<MetaData>;
  userid: string;
  createdAt: string;
  category: Category;
  subcategory: Array<Category>;
}

export interface Article {
  id?: string;
  title: string;
  info: string;
  metadata: Array<MetaData>;
  userid: any;
  createdAt: string;
  category: Category;
}

export interface Category {
  level: string,
  label: string,
  value: string,
  createdAt?: Date
}

export interface MetaData {
  type: string;
  link: string;
}