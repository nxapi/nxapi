import java from 'js-to-java';

export interface IOYOServiceProjectsDto {
  detailsPageTitle?: string;
  mainTitle?: string;
  titleSign?: string;
  deputyTitle?: string;
  itemList?: Array<OYOServiceProjectsDto>;
  id?: string;
  paymentSign?: number;
  payableAmount?: {value: string};
}

export class OYOServiceProjectsDto {
  constructor(params: IOYOServiceProjectsDto) {
    this.detailsPageTitle = params.detailsPageTitle;
    this.mainTitle = params.mainTitle;
    this.titleSign = params.titleSign;
    this.deputyTitle = params.deputyTitle;
    this.itemList = params.itemList;
    this.id = params.id;
    this.paymentSign = params.paymentSign;
    this.payableAmount = params.payableAmount;
  }

  detailsPageTitle?: string;
  mainTitle?: string;
  titleSign?: string;
  deputyTitle?: string;
  itemList?: Array<OYOServiceProjectsDto>;
  id?: string;
  paymentSign?: number;
  payableAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OYOServiceProjectsDto',
      $: {
        detailsPageTitle: java.String(this.detailsPageTitle),
        mainTitle: java.String(this.mainTitle),
        titleSign: java.String(this.titleSign),
        deputyTitle: java.String(this.deputyTitle),
        itemList: this.itemList
          ? java.List(
              (this.itemList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        id: java.String(this.id),
        paymentSign: java.Integer(this.paymentSign),
        payableAmount: this.payableAmount
          ? java.BigDecimal(this.payableAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
