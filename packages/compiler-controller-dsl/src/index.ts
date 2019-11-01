import j from 'jscodeshift';
import fs from 'fs';

const source = `
@d.class.path('dd')
class test {
  @d.number.max(1)
  private tt: number = 1;
}
`;

const jcs = j.withParser('ts')(source);
console.log(jcs);
