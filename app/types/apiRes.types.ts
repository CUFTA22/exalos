export interface ApiResponse<Data> {
  error: boolean;
  message: string;
  data?: Data;
}
