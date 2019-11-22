import Any from './any';

export default class CObject extends Any<object> {
  min(val: number) {
    return Reflect.metadata(null, null);
  }
  max(val: number) {
    return Reflect.metadata(null, null);
  }
  length(val: number) {
    return Reflect.metadata(null, null);
  }
  unknown() {
    return Reflect.metadata(null, null);
  }
}
