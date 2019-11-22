import 'reflect-metadata';
export default class Any<T> {
  required() {
    return Reflect.metadata(null, null);
  }
  description(desc: string) {
    return Reflect.metadata(null, null);
  }
  default(val: T) {
    return Reflect.metadata(null, null);
  }
  error(errMsg: Function) {
    return Reflect.metadata(null, null);
  }
}
