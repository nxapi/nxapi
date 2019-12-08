import { RoomCardNoReportDetailVo } from './RoomCardNoReportDetailVo';
import java from 'js-to-java';

export interface ICardNoResult {
  result?: Array<RoomCardNoReportDetailVo>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;
}

export class CardNoResult {
  constructor(params: ICardNoResult) {
    this.result = params.result;
    this.totalPages = params.totalPages;
    this.pageSize = params.pageSize;
    this.totalCount = params.totalCount;
    this.pageNum = params.pageNum;
  }

  result?: Array<RoomCardNoReportDetailVo>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.CardNoResult',
      $: {
        result: this.result
          ? java.List(
              (this.result || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        totalPages: java.Long(this.totalPages),
        pageSize: java.Integer(this.pageSize),
        totalCount: java.Long(this.totalCount),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
