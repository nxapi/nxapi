export default class BaseResponse<T> {
  code: string;
  msg: string;
  data: T;
}
