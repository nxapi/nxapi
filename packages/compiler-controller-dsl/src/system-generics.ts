import Page from '@nxapi/nxapi-search-code/dist/page';

export class SystemGenerics {
  static map: any;
  static init() {
    const page = new Page('./packages/compiler-controller-dsl/src/system-generics.ts', 'ts');
    const c = page.getComponents()[0];
    this.map = c.getClassMap();
  }

  static getMap() {
    return this.map;
  }
}
export class Map<K, V> {
  key: K;
  value: V;
}

export class Array<T> {
  value: T;
}
