import { ExtBookingPostingDTO } from './ExtBookingPostingDTO';
import java from 'js-to-java';

export interface IExtBookingPostingPageDTO {
  extBookingPostingList?: Array<ExtBookingPostingDTO>;
  totalAmount?: {value: string};
  total?: number;
  pages?: number;
  pageSize?: number;
  pageNum?: number;
}

export class ExtBookingPostingPageDTO {
  constructor(params: IExtBookingPostingPageDTO) {
    this.extBookingPostingList = params.extBookingPostingList;
    this.totalAmount = params.totalAmount;
    this.total = params.total;
    this.pages = params.pages;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
  }

  extBookingPostingList?: Array<ExtBookingPostingDTO>;
  totalAmount?: {value: string};
  total?: number;
  pages?: number;
  pageSize?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ExtBookingPostingPageDTO',
      $: {
        extBookingPostingList: this.extBookingPostingList
          ? java.List(
              (this.extBookingPostingList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        totalAmount: this.totalAmount
          ? java.BigDecimal(this.totalAmount.value)
          : null,
        total: java.Long(this.total),
        pages: java.Integer(this.pages),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
