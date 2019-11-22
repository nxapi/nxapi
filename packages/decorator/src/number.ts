import BaseType from './base-type';

export default class Number extends BaseType<number> {
  unsafe() {
    return Reflect.metadata(null, null);
  }
  min(val: number) {
    return Reflect.metadata(null, null);
  }
  max(val: number) {
    return Reflect.metadata(null, null);
  }
  greater(val: number) {
    return Reflect.metadata(null, null);
  }
  less(val: number) {
    return Reflect.metadata(null, null);
  }
  integer(val: number) {
    return Reflect.metadata(null, null);
  }
  precision(val: number) {
    return Reflect.metadata(null, null);
  }
  multiple(val: number) {
    return Reflect.metadata(null, null);
  }
  positive() {
    return Reflect.metadata(null, null);
  }
  negative() {
    return Reflect.metadata(null, null);
  }
}
