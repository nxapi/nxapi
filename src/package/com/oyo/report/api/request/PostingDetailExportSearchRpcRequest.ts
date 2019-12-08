import java from 'js-to-java';

export interface IPostingDetailExportSearchRpcRequest {
  handoverId?: number;
  codeRange?: Array<number>;
  payTypeRange?: Array<number>;
  costType?: number;
  pageSize?: number;
  startTime?: Date;
  hotelId?: number;
  endTime?: Date;
  pageNum?: number;
}

export class PostingDetailExportSearchRpcRequest {
  constructor(params: IPostingDetailExportSearchRpcRequest) {
    this.handoverId = params.handoverId;
    this.codeRange = params.codeRange;
    this.payTypeRange = params.payTypeRange;
    this.costType = params.costType;
    this.pageSize = params.pageSize;
    this.startTime = params.startTime;
    this.hotelId = params.hotelId;
    this.endTime = params.endTime;
    this.pageNum = params.pageNum;
  }

  handoverId?: number;
  codeRange?: Array<number>;
  payTypeRange?: Array<number>;
  costType?: number;
  pageSize?: number;
  startTime?: Date;
  hotelId?: number;
  endTime?: Date;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.PostingDetailExportSearchRpcRequest',
      $: {
        handoverId: java.Integer(this.handoverId),
        codeRange: this.codeRange
          ? java.List(
              (this.codeRange || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        payTypeRange: this.payTypeRange
          ? java.List(
              (this.payTypeRange || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        costType: java.Integer(this.costType),
        pageSize: java.Integer(this.pageSize),
        startTime: this.startTime,
        hotelId: java.Long(this.hotelId),
        endTime: this.endTime,
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
