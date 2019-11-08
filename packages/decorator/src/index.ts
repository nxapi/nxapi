import CClass from './class';
import CFunction from './function';
import CNumber from './number';
import CArray from './array';
import CObject from './object';
import CString from './string';
import CBool from './bool';

const cls = new CClass();
const fun = new CFunction();
const num = new CNumber();
const arr = new CArray();
const obj = new CObject();
const str = new CString();
const b = new CBool();

const d = { class: cls, number: num, function: fun, array: arr, object: obj, string: str, bool: b };

export default d;
