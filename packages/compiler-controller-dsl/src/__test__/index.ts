import { compiler, IController } from '../';
import path from 'path';

const controllerPath = path.join('src', 'package');
const controllerDsls: IController[] = compiler('./src/package/service.ts');
console.log(controllerDsls);
