import d from '../../../packages/decorator/src/index';
import HelloReq from './hello-req';
class GGG {
  aa: string;
}

export class TestReq {
  // @d.array.description('ddda')
  // @d.array.required()
  // @d.array.string.description('arr string')
  // @d.array.string.example('hghks')
  // @d.array.string.required()
  // arr: string[];
  // // @d.object.required()
  // // hello: HelloReq;

  // // @d.number.max(1)
  // // @d.number.description('ddd')
  // // tt: number;
  // gg: GGG;

  // @d.string.email({ dd: 88 })
  // @d.string.regex(/^[abc]+$/)
  // @d.string.required()
  // @d.string.max(10)
  // @d.string.allow('v1', 'v2')
  // @d.string.error(() => '错误描述')
  // test: string;

  map: Map<string, GGG>;
  // map: { [name: string]: string };
  arr: Array<GGG>;
}

export class TestReq2 {
  @d.array.description('ddda')
  @d.array.required()
  arr: HelloReq[];
}
