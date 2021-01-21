
export interface Response<T> {
  data: T;
  pageInfo: PageInfo;
  locale: string;
}
export interface PageInfo {
  totalElements: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  currentPageSize: number;
}

export interface Page<T> {
  content: T;
  pageInfo: PageInfo;
}
