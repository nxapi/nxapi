import java from 'js-to-java';

export interface IApolloToiletBO {
  size?: string;
  type?: number;
}

export class ApolloToiletBO {
  constructor(params: IApolloToiletBO) {
    this.size = params.size;
    this.type = params.type;
  }

  size?: string;
  type?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.room.ApolloToiletBO',
      $: {size: java.String(this.size), type: java.Integer(this.type)},
    };
  }
}

//generate by interpret-cli dubbo2.js
