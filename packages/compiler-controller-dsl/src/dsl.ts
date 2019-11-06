interface IStringString {
  method: string;
  val: string;
}
interface IStringNumber {
  method: string;
  val: number;
}
export interface IController {
  fileFullPath?: string;
  className?: string;
  path?: IStringString;
  classMethods?: IClassMethod[];
}

export interface IClassMethod {
  path?: IStringString;
  desc?: IStringString;
  method?: string; //get|post...
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
  desc?: IStringString;
  example?: IStringString;
  name?: string; //字段名称
  type?: string;
  typeDeclare?: IReqDto;
  required?: IStringString;
  pattern?: IStringString;
}
