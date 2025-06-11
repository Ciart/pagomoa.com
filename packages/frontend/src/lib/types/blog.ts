export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Author {
  data: {
    id: number;
    attributes: {
      username: string;
      email: string;
    }
  }
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  category: Category;
  author: Author;
} 
