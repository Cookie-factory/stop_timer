export interface GetMainResponse {
  categories: string[];
  lists: {
    market: string;
    index: number[];
    data:
      | {datadate: string; value: number}[]
      | {category: string; min: number; max: number};
    chart_data?: {datadate: string; value: number};
    updated_date: string;
  }[];
}
