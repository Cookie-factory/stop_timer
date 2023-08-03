// 서버 에러 응답 타입
export interface ErrorResponse {
  message: string;
  statusCode: number;
  path: string;
}

export interface ErrorResponseTransform extends ErrorResponse {
  success: 'FAIL';
}

export interface SuccessResponse<T> {
  message: {
    errors: any | null;
    exception: string;
    links: any[];
    message: string;
    results: T;
  };
}
