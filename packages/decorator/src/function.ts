export default class Function {
  description(desc: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {};
  }
  get(path: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {};
  }
  post(path: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {};
  }
  put(path: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {};
  }
  delete(path: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {};
  }
}
