import { compiler, IController, IReqDto, IField } from './compiler-controller-dsl/src';
import decorator from './decorator/src';
import hashcode from './utils/hash-code';
import { httpMethods as httpMethods2 } from './utils';
import Ast2 from './compiler-controller-dsl/src/ast';

export declare type DSLController = IController;
export declare type DSLReqDto = IReqDto;
export declare type DSLField = IField;
export const compilerCtrlToDsl = compiler;

export const d = decorator;
export const hashCode = hashcode;
export const httpMethods = httpMethods2;
export const Ast = Ast2;
