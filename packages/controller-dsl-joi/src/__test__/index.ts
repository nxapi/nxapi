import dslToJoi from '..';
import path from 'path';
import { compiler } from '../../../compiler-controller-dsl/src';
const controllerPath = path.join('src', 'controllers');
const controllerDsls = compiler(controllerPath);

dslToJoi(controllerDsls, 'src/__tmp__');

// for (let x = 0.05; x <= 1.01; x += 0.05) {
//   const val = Math.pow(1 + x, 1) + Math.pow(1 + x, 2) + Math.pow(1 + x, 3) + Math.pow(1 + x, 4) + Math.pow(1 + x, 5);
//   console.log(x.toFixed(2), val.toFixed(4));
// }
const joi = require('../../../../src/__tmp__/joi');
console.log(joi);
