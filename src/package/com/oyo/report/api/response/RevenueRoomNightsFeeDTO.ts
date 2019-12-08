import { RevenueRoomNightsFeeDetailDTO } from './RevenueRoomNightsFeeDetailDTO';
import java from 'js-to-java';

export interface IRevenueRoomNightsFeeDTO {
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  revenueRoomNightsFeeList?: Array<RevenueRoomNightsFeeDetailDTO>;
  pageNum?: number;
}

export class RevenueRoomNightsFeeDTO {
  constructor(params: IRevenueRoomNightsFeeDTO) {
    this.totalPages = params.totalPages;
    this.pageSize = params.pageSize;
    this.totalCount = params.totalCount;
    this.revenueRoomNightsFeeList = params.revenueRoomNightsFeeList;
    this.pageNum = params.pageNum;
  }

  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  revenueRoomNightsFeeList?: Array<RevenueRoomNightsFeeDetailDTO>;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.RevenueRoomNightsFeeDTO',
      $: {
        totalPages: java.Integer(this.totalPages),
        pageSize: java.Integer(this.pageSize),
        totalCount: java.Long(this.totalCount),
        revenueRoomNightsFeeList: this.revenueRoomNightsFeeList
          ? java.List(
              (this.revenueRoomNightsFeeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
