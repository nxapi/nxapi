import { RevenueReportDTO } from './RevenueReportDTO';
import java from 'js-to-java';

export interface INewBizRevenueReportDTO {
  totalRoomNights?: number;
  totalAvgRoomPrice?: {value: string};
  revenueReportList?: Array<RevenueReportDTO>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;
  occCount?: {value: string};
}

export class NewBizRevenueReportDTO {
  constructor(params: INewBizRevenueReportDTO) {
    this.totalRoomNights = params.totalRoomNights;
    this.totalAvgRoomPrice = params.totalAvgRoomPrice;
    this.revenueReportList = params.revenueReportList;
    this.totalPages = params.totalPages;
    this.pageSize = params.pageSize;
    this.totalCount = params.totalCount;
    this.pageNum = params.pageNum;
    this.occCount = params.occCount;
  }

  totalRoomNights?: number;
  totalAvgRoomPrice?: {value: string};
  revenueReportList?: Array<RevenueReportDTO>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;
  occCount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.NewBizRevenueReportDTO',
      $: {
        totalRoomNights: java.Integer(this.totalRoomNights),
        totalAvgRoomPrice: this.totalAvgRoomPrice
          ? java.BigDecimal(this.totalAvgRoomPrice.value)
          : null,
        revenueReportList: this.revenueReportList
          ? java.List(
              (this.revenueReportList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        totalPages: java.Integer(this.totalPages),
        pageSize: java.Integer(this.pageSize),
        totalCount: java.Long(this.totalCount),
        pageNum: java.Integer(this.pageNum),
        occCount: this.occCount ? java.BigDecimal(this.occCount.value) : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
