import 'reflect-metadata';
export default class Any {
  required() {
    return Reflect.metadata(null, null);
  }
  description(desc: string) {
    return Reflect.metadata(null, null);
  }

  example(val: any) {
    return Reflect.metadata(null, null);
  }
}
