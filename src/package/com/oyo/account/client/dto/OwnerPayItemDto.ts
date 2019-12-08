import java from 'js-to-java';

export interface IOwnerPayItemDto {
  money?: {value: string};
  itemDescription?: string;
  settleTranNum?: string;
}

export class OwnerPayItemDto {
  constructor(params: IOwnerPayItemDto) {
    this.money = params.money;
    this.itemDescription = params.itemDescription;
    this.settleTranNum = params.settleTranNum;
  }

  money?: {value: string};
  itemDescription?: string;
  settleTranNum?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerPayItemDto',
      $: {
        money: this.money ? java.BigDecimal(this.money.value) : null,
        itemDescription: java.String(this.itemDescription),
        settleTranNum: java.String(this.settleTranNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
