import Any from './any';

export default class BaseType<T> extends Any<T> {
  example(val: T) {
    return Reflect.metadata(null, null);
  }
  allow(...rest: T[]) {
    return Reflect.metadata(null, null);
  }
  valid(...rest: T[]) {
    return Reflect.metadata(null, null);
  }
  invalid(...rest: T[]) {
    return Reflect.metadata(null, null);
  }
}