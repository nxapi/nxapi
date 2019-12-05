import Any from './any';
import CNumber from './number';
import CString from './string';
import CBoolean from './boolean';

export default class Array extends Any {
  number: CNumber = new CNumber();
  string: CString = new CString();
  boolean: CBoolean = new CBoolean();
  max(val: number) {
    return Reflect.metadata(null, null);
  }
  min(val: number) {
    return Reflect.metadata(null, null);
  }
  length(val: number) {
    return Reflect.metadata(null, null);
  }
  unique(val: string) {
    return Reflect.metadata(null, null);
  }
}
