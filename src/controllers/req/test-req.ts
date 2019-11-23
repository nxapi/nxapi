import d from '../../../packages/decorator/src/index';
import HelloReq from './hello-req';

export default class TestReq {
  // @d.array.description('ddda')
  // @d.array.required()
  // arr: HelloReq[];
  // @d.object.required()
  // hello: HelloReq;

  // @d.number.max(1)
  // @d.number.description('ddd')
  // tt: number;

  @d.string.email({ dd: 88 })
  @d.string.regex(/^[abc]+$/)
  @d.string.allow('aa', 'bb')
  @d.string.error(() => 'dddd')
  mmm: string;
  @d.boolean.example(true)
  b: boolean;
}
