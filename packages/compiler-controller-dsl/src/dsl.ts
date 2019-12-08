export interface IService {
  fileFullPath?: string;
  dubboInterface?: string;
  serviceName?: string;
  serviceAliasName?: string;
  path?: string;
  classMethods?: IClassMethod[];
}

export interface IClassMethod {
  classMethodName?: string;
  req?: IReqDto;
  dto?: IReqDto;
}

export interface IReqDto {
  fileFullPath?: string;
  type?: string;
  isArray?: boolean;
  fields?: IField[];
}

export interface IField {
  name?: string; //字段名称
  type?: string;
  javaType?: string;
  isArray?: boolean;
  typeDeclare?: IReqDto;
}
