// interface IStringString {
//   method: string;
//   val: string;
// }
// interface IStringNumber {
//   method: string;
//   val: number;
// }
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
  className?: string;
  // desc?: IStringString;
  fields?: IField[];
}

export interface IField {
  desc?: string;
  example?: string;
  name?: string; //字段名称
  type?: string;
  arrayTemplateType?: string;
  typeDeclare?: IReqDto;
  required?: boolean;
  pattern?: string;
}
