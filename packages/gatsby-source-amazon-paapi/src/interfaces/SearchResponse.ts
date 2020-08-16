export interface SearchResponse {
  SearchResult: {
    Items: Record<string, unknown>[];
    SearchURL: string;
    TotalResultCount: number;
  };
}
