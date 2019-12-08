import java from 'js-to-java';

export interface IRoomTypeSimpleBO {
  code?: string;
  name?: string;
  id?: number;
}

export class RoomTypeSimpleBO {
  constructor(params: IRoomTypeSimpleBO) {
    this.code = params.code;
    this.name = params.name;
    this.id = params.id;
  }

  code?: string;
  name?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.roomtype.RoomTypeSimpleBO',
      $: {
        code: java.String(this.code),
        name: java.String(this.name),
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
