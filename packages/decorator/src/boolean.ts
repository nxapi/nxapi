import BaseType from './base-type';

export default class Boolean extends BaseType<boolean> {
  truthy(val: string) {
    return Reflect.metadata(null, null);
  }
  falsy(val: string) {
    return Reflect.metadata(null, null);
  }
}
