import j from 'jscodeshift';
import fs from 'fs';
import { Collection } from 'jscodeshift/src/Collection';

export default class Ast {
  private jcs: Collection<any>;
  constructor(fullPath: string, parser: string = 'ts') {
    const source = fs.readFileSync(fullPath, 'utf8');
    this.jcs = j.withParser(parser)(source);
  }

  isController() {
    let isCtl = false;
    this.jcs
      .find(j.ExportDefaultDeclaration)
      .find(j.ClassDeclaration)
      .forEach(p => {
        if (p.node.superClass && p.node.superClass['name'] === 'BaseController') isCtl = true;
      });
    return isCtl;
  }
}
