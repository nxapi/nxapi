import d from '../../../../decorator/src/index';

export default class HelloReq {
  @d.number.max(1)
  @d.number.description('ddd')
  @d.number.example(1)
  tt: number;
  mmm: string;
}
