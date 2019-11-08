import { DecoratorKind } from 'ast-types/gen/kinds';

export default class Decorator {
  // private static getFirstArg(key: string, args: any[]) {
  //   return { [key]: args[0].value || args[0] };
  // }
  // private static getMultiArg(key: string, args: any[]) {
  //   const vals: any[] = [];
  //   args.forEach(a => vals.push(a.value));
  //   return { [key]: vals };
  // }
  // private static anyType = {
  //   description: (args: any[]) => Decorator.getFirstArg('desc', args),
  //   required: (args: any[]) => Decorator.getFirstArg('required', [true]),
  //   example: (args: any[]) => Decorator.getFirstArg('example', args),
  // };
  // private static convertArgToDsl = {
  //   class: {
  //     path: (args: any[]) => Decorator.getFirstArg('path', args),
  //   },
  //   function: {
  //     get: (args: any[]) => Decorator.getFirstArg('path', args),
  //     post: (args: any[]) => Decorator.getFirstArg('path', args),
  //     delete: (args: any[]) => Decorator.getFirstArg('path', args),
  //     put: (args: any[]) => Decorator.getFirstArg('path', args),
  //     description: (args: any[]) => Decorator.getFirstArg('desc', args),
  //   },
  //   array: {
  //     ...Decorator.anyType,
  //   },
  //   bool: { ...Decorator.anyType },
  //   number: {
  //     max: (args: any[]) => Decorator.getFirstArg('max', args),
  //     ...Decorator.anyType,
  //   },
  //   object: { ...Decorator.anyType },
  //   string: { ...Decorator.anyType },
  // };

  public static convertToDsl(ds: DecoratorKind[]) {
    if (!ds) return null;
    const decoratorArr: any = [];
    ds.forEach((d: any) => {
      const item: any = {};
      item.args = d.expression.arguments;
      item.propertys = [];
      if (d.expression.callee.type === 'MemberExpression') {
        let memExpression = d.expression.callee;
        while (memExpression) {
          if (memExpression.property) item.propertys.push(memExpression.property.name);
          else item.propertys.push(memExpression.name);
          memExpression = memExpression.object;
        }
      } else {
        item.propertys.push(d.expression.callee.name);
      }
      decoratorArr.push(item);
    });
    const dslObj: any = {};

    decoratorArr.forEach((a: any) => {
      //要求装饰器必须是三个字段组成
      if (a.propertys.length !== 3) return;
      const key1 = a.propertys[1];
      const key2 = a.propertys[0];
      const dsl = { [key2]: this.getValue(a.args) };
      // const dsl = this.convertArgToDsl[key1][key2](a.args);
      // for (const key in dsl) {
      //   dsl[key] = { val: dsl[key], method: `${key1}.${key2}` };
      // }
      Object.assign(dslObj, dsl);
    });
    return dslObj;
  }

  private static getValue(args: any[]) {
    if (args.length === 1) return args[0].value;
    else if (args.length > 1) {
      const vals: any[] = [];
      args.forEach(a => vals.push(a.value));
      return vals;
    }
    return true;
  }
}
