export class ErrorApiModel {
  error?: ErrorModel;
  message?: string;
  name?: string;
  ok?: boolean;
  status?: number;
  statusText?: string;
  url?: string;
}

export class ErrorModel {
  timestamp?: string;
  status?: number;
  error?: string;
  path?: string;
}