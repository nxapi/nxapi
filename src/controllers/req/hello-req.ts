import d from '../../../packages/decorator/src/index';

export default class HelloReq {
  @d.number.max(1)
  @d.number.desc('ddd')
  @d.number.example(1)
  tt: number;
  mmm: string;
}
