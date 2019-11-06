import Ast from './ast';
import fs from 'fs';
import path from 'path';

// const scanRoot = path.resolve(process.cwd() + '/packages');

let fullPaths: string[] = [];
const extractPaths = (dirPath: string) => {
  const pa = fs.readdirSync(dirPath);

  pa.forEach((ele: string, index: number) => {
    const tmpPath = dirPath + '/' + ele;
    const info = fs.statSync(tmpPath);
    if (info.isDirectory()) {
      extractPaths(tmpPath);
    } else {
      if (!tmpPath.endsWith('.ts')) return;
      if (!isController(tmpPath)) return;
      fullPaths.push(tmpPath);
    }
  });
};

const isController = (fullPath: string) => {
  const ast = new Ast(fullPath);
  return ast.isController();
};

export default (rootPath: string) => {
  fullPaths = [];
  const scanPath = path.resolve(process.cwd(), rootPath);
  extractPaths(scanPath);
  const relativePaths: string[] = [];
  fullPaths.forEach(p => relativePaths.push(p.replace(process.cwd(), '.')));
  return relativePaths;
};

// extractPaths(scanRoot);
// console.log(fullPaths);
