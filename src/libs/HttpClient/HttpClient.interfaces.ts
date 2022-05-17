type ResponseType = "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";

type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "purge"
  | "PURGE"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

interface IHttpClientConfig {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  decompress?: boolean;
}

interface IHttpClientResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: IHttpClientConfig;
  request?: any;
}

export interface IHttpClient {
  get<T = any, R = IHttpClientResponse<T>>(url: string, config?: IHttpClientConfig): Promise<R>;
  post<T = any, R = IHttpClientResponse<T>>(url: string, data?: any, config?: IHttpClientConfig): Promise<R>;
  put<T = any, R = IHttpClientResponse<T>>(url: string, data?: any, config?: IHttpClientConfig): Promise<R>;
  patch<T = any, R = IHttpClientResponse<T>>(url: string, data?: any, config?: IHttpClientConfig): Promise<R>;
  delete<T = any, R = IHttpClientResponse<T>>(url: string, config?: IHttpClientConfig): Promise<R>;
}
