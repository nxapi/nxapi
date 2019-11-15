export interface IController {
  fileFullPath?: string;
  className?: string;
  path?: string;
  classMethods?: IClassMethod[];
}

export interface IClassMethod {
  // path?: IStringString;
  classMethodName?: string;
  desc?: string;
  // method?: string; //get|post...
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
  desc?: string;
  example?: string;
  name?: string; //字段名称
  type?: string;
  isArray?: boolean;
  // arrayTemplateType?: string;
  typeDeclare?: IReqDto;
  required?: boolean;
  pattern?: string;
}
