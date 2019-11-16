import d from '../../../../decorator/src/index';
import HelloReq from './hello-req';

export default class TestReq {
  @d.object.required()
  hello: HelloReq;

  @d.number.max(1)
  @d.number.description('ddd')
  @d.number.example(1)
  tt: number;
  mmm: string;
}
