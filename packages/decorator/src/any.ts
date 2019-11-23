import 'reflect-metadata';
export default class Any {
  required() {
    return Reflect.metadata(null, null);
  }
  description(desc: string) {
    return Reflect.metadata(null, null);
  }
  error(errMsg: Function) {
    return Reflect.metadata(null, null);
  }
}
