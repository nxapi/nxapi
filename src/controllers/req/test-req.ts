import d from '../../../packages/decorator/src/index';
import HelloReq from './hello-req';

export default class TestReq {
  @d.array.description('ddda')
  @d.array.required()
  arr: number[];
  @d.object.required()
  hello: HelloReq;

  @d.number.max(1)
  @d.number.description('ddd')
  @d.number.example(1)
  tt: number;
  mmm: string;
}
