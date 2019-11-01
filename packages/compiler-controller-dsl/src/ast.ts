import j from 'jscodeshift';
import fs from 'fs';
import { Collection } from 'jscodeshift/src/Collection';

export default class Ast {
  private jcs: Collection<any>;
  constructor(fullPath: string, parser: string = 'ts') {
    const source = fs.readFileSync(fullPath, 'utf8');
    this.jcs = j.withParser(parser)(source);
  }
}
