import TestTemp from './test-temp';

export default class BaseResponse<T> {
  // code: string;
  // msg: string;
  rrr: TestTemp<TestTemp<T>[]>;
  df: TestTemp<T>[];
  data: T;
}
