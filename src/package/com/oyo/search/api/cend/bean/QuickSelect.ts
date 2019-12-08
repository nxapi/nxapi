import java from 'js-to-java';

export interface IQuickSelect {
  name?: string;
  type?: string;
}

export class QuickSelect {
  constructor(params: IQuickSelect) {
    this.name = params.name;
    this.type = params.type;
  }

  name?: string;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.QuickSelect',
      $: {name: java.String(this.name), type: java.String(this.type)},
    };
  }
}

//generate by interpret-cli dubbo2.js
