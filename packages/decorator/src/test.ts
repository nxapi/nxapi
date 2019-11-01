import d from './index';

class ReqData1 {
  dddd: string;
}

class ReqData {
  tt: number;

  @d.object.required()
  reqData1: ReqData1;
}

@d.class.path('dd')
@d.class.controller()
class Test {
  @d.number.max(1)
  @d.number.description('ddd')
  private tt: number = 1;
  @d.object.description('ddd')
  reqData: ReqData;

  @d.function.path('ddd')
  public ggg(req: ReqData): ReqData1 {
    return new ReqData1();
  }
}

class Test2 {}

console.log(new Test());
console.log(new Test2());

console.log(new Test2());
