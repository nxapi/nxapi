import d from '../index';

class Req<T> {
  dddd: T;

  constructor() {}
}
class Page<T> {
  dddd: T;

  constructor() {}
}

class ReqData1 {
  dddd: string;
}

class ReqData {
  tt: number;

  @d.object.required()
  reqData1: ReqData1;
}

@d.controller.path('dd')
class Test {
  @d.number.max(1)
  @d.number.description('ddd')
  private tt: number = 1;
  @d.object.description('ddd')
  reqData: ReqData;

  @d.function.get('ddd')
  public ggg(): Req<Page<number[]>> {
    return 1 as any;
  }
}

class Test2 {}

console.log(new Test().ggg().dddd);
console.log(new Test2());

console.log(new Test2());
