export default class Function {
  path(path: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {};
  }
}
