import TestTemp from "./test-temp";

export default class BaseResponse<T> {
  // code: string;
  // msg: string;
  rrr: TestTemp<T[]>;
  data: T;
}
