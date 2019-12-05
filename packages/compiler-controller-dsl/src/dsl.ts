export interface IController {
  fileFullPath?: string;
  className?: string;
  path?: string;
  classMethods?: IClassMethod[];
}

export interface IClassMethod {
  classMethodName?: string;
  description?: string;
  get?: string;
  post?: string;
  put?: string;
  delete?: string;
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
  description?: string;
  example?: string;
  name?: string; //字段名称
  type?: string;
  isArray?: boolean;
  typeDeclare?: IReqDto;
  extraInfo?: IField;
  required?: boolean;
  pattern?: string;
}
