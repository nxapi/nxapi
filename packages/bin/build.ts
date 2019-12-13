import path from 'path';
import fs from 'fs';
import { compilerServiceToDsl } from '../';

export default (source: string, target: string) => {
  const controllerDsls = compilerServiceToDsl(source);
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
  const targetPath = path.resolve(process.cwd(), target, 'dsl.json');
  fs.writeFileSync(path.resolve(targetPath), content, 'utf8');
};
