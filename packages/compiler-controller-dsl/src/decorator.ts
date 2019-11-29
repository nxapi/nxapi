import { DecoratorKind } from 'ast-types/gen/kinds';
import Ast from './ast';

export default class Decorator {
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
      const action = a.propertys[0];
      const dsl = { [action]: this.getValue(a.args) };
      if (a.propertys.length === 4) {
        //d.array.string.max(1)
        if (!dslObj.extraInfo) dslObj.extraInfo = {};
        Object.assign(dslObj.extraInfo, dsl);
      } else if (a.propertys.length === 3) {
        //d.string.max(1)
        Object.assign(dslObj, dsl);
      }
    });
    return dslObj;
  }

  private static getValue(args: any[]) {
    if (args.length === 1) return Ast.astNodeToSource(args[0]);
    else if (args.length > 1) {
      const vals: any[] = [];
      args.forEach(a => vals.push(Ast.astNodeToSource(a)));
      return vals;
    }
    return true;
  }
  // private static dealValue(v: any) {
  //   return Ast.astNodeToSource(v);
  //   // if (v.type === 'RegExpLiteral') return Ast.astNodeToSource(v);
  //   // else if (v.type === 'ArrowFunctionExpression' || v.type === 'ObjectExpression') return Ast.astNodeToSource(v);
  //   // else return v.value;
  // }
}
