import { IRoute } from './route';
import hashcode from './hash';
import { IReqDto, IField } from '../../../packages/compiler-controller-dsl/src';
import JoiKeys from './joi-keys';

export const convertJoi = (route: IRoute) => {
  const joi = {};
  joi['path'] = route.path;
  joi['code'] = hashcode(route.httpMethod + route.path);
  joi['request'] = dealReqDto(route.req);
  joi['response'] = dealReqDto(route.dto);
  // route.req.
  console.log(joi);
  return joi;
};

const dealReqDto = (reqDto: IReqDto) => {
  let joiStr = '';
  if (reqDto.isArray) {
    joiStr += `Joi.array().items(###array###)`;
    if (isBaseType(reqDto.type)) {
      joiStr = joiStr.replace('###array###', `Joi.${reqDto.type}()`);
      return joiStr;
    }
  } else if (isBaseType(reqDto.type)) {
    joiStr += `Joi.${reqDto.type}()`;
    return joiStr;
  }
  //下面逻辑为自定义对象处理逻辑
  if (!reqDto.fields) return '{}';
  let objJoiStr = 'Joi.object({\n';
  reqDto.fields.forEach((field: IField) => {
    const joiType = getJoiType(field.type);
    if (field.isArray) {
      if (joiType === 'object') {
        const childJoiStr = dealReqDto(field.typeDeclare);
        objJoiStr += `  ${field.name}: Joi.array().items(${childJoiStr})`;
      } else {
        objJoiStr += `  ${field.name}: Joi.array().items(Joi.${joiType}())`;
      }
    } else {
      if (joiType === 'object') {
        const childJoiStr = dealReqDto(field.typeDeclare);
        objJoiStr += `  ${field.name}: ${childJoiStr}`;
      } else {
        objJoiStr += `  ${field.name}: Joi.${joiType}()`;
      }
    }

    for (const key in field) {
      if (key === 'name' || key === 'type') continue;
      if (!JoiKeys.in(key)) continue;
      objJoiStr += `.${key}`;
      objJoiStr += dealJoiParams(key, field[key]);
    }
    objJoiStr += ',\n';
  });
  objJoiStr += '})';
  if (reqDto.isArray) joiStr = joiStr.replace('###array###', objJoiStr);
  else joiStr = objJoiStr;

  return joiStr;
};

const dealJoiParams = (funName: string, val: any) => {
  let params;
  if (typeof val === 'string') params = `('${val}')`;
  else params = `(${val})`;
  let retVal = '';
  if (funName === 'required') retVal += `()`;
  else retVal += params;
  return retVal;
};

const getJoiType = (typeName: string) => {
  const types = ['number', 'string', 'boolean', 'object', 'any', 'array'];
  if (types.includes(typeName)) return typeName;
  return 'object';
};

const isBaseType = (typeName: string) => {
  const types = ['number', 'string', 'boolean', 'object', 'Object', 'any'];
  return types.includes(typeName);
};
