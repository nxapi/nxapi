import { compiler, IController } from '../';
import path from 'path';

const controllerPath = path.join('src', 'controllers');
const controllerDsls: IController[] = compiler(controllerPath);
console.log(controllerDsls);
