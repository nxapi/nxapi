import { compiler, IController } from '../';
import path from 'path';
import fs from 'fs';

const controllerPath = path.join('src', 'package');
const controllerDsls: IController[] = compiler('./src/package/service.ts');
// JSON.stringify(controllerDsls);
console.log(controllerDsls);
let cache: any[] = [];
const content = JSON.stringify(controllerDsls, (key, value) => {
  if (typeof value === 'object' && value !== null) {
    if (cache.indexOf(value) !== -1) {
      // Circular reference found, discard key
      return;
    } // Store value in our collection
    cache.push(value);
  }
  return value;
});
cache = null; // Enable garbage collection
const targetPath = path.resolve(process.cwd(), 'dsl.json');
fs.writeFileSync(path.resolve(targetPath), content, 'utf8');
