import dslToKoa from '..';
import path from 'path';
import { compiler } from '../../../compiler-controller-dsl/src';
const controllerPath = path.join('src', 'controllers');
const controllerDsls = compiler(controllerPath);

dslToKoa(controllerDsls, 'src/__tmp__');
