import { RevenueRoomNightsDetailDTO } from './RevenueRoomNightsDetailDTO';
import java from 'js-to-java';

export interface IRevenueRoomNightsDTO {
  revenueRoomNightsDetailList?: Array<RevenueRoomNightsDetailDTO>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;
}

export class RevenueRoomNightsDTO {
  constructor(params: IRevenueRoomNightsDTO) {
    this.revenueRoomNightsDetailList = params.revenueRoomNightsDetailList;
    this.totalPages = params.totalPages;
    this.pageSize = params.pageSize;
    this.totalCount = params.totalCount;
    this.pageNum = params.pageNum;
  }

  revenueRoomNightsDetailList?: Array<RevenueRoomNightsDetailDTO>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.RevenueRoomNightsDTO',
      $: {
        revenueRoomNightsDetailList: this.revenueRoomNightsDetailList
          ? java.List(
              (this.revenueRoomNightsDetailList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        totalPages: java.Integer(this.totalPages),
        pageSize: java.Integer(this.pageSize),
        totalCount: java.Long(this.totalCount),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
