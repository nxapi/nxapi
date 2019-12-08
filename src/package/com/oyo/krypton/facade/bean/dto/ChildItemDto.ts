import java from 'js-to-java';

export interface IChildItemDto {
  itemFrontId?: string;
  itemName?: string;
}

export class ChildItemDto {
  constructor(params: IChildItemDto) {
    this.itemFrontId = params.itemFrontId;
    this.itemName = params.itemName;
  }

  itemFrontId?: string;
  itemName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.ChildItemDto',
      $: {
        itemFrontId: java.String(this.itemFrontId),
        itemName: java.String(this.itemName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
