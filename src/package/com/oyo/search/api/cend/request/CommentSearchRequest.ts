import java from 'js-to-java';

export interface ICommentSearchRequest {
  hits?: number;
  totalRate?: number[];
  requestId?: string;
  start?: number;
  commentType?: number;
  startTime?: string;
  hotelId?: string;
  endTime?: string;
  keyword?: string;
  operatorId?: number;
}

export class CommentSearchRequest {
  constructor(params: ICommentSearchRequest) {
    this.hits = params.hits;
    this.totalRate = params.totalRate;
    this.requestId = params.requestId;
    this.start = params.start;
    this.commentType = params.commentType;
    this.startTime = params.startTime;
    this.hotelId = params.hotelId;
    this.endTime = params.endTime;
    this.keyword = params.keyword;
    this.operatorId = params.operatorId;
  }

  hits?: number;
  totalRate?: number[];
  requestId?: string;
  start?: number;
  commentType?: number;
  startTime?: string;
  hotelId?: string;
  endTime?: string;
  keyword?: string;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.CommentSearchRequest',
      $: {
        hits: java.Integer(this.hits),
        totalRate: java.array(
          'java.lang.Integer',
          (this.totalRate || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        requestId: java.String(this.requestId),
        start: java.Integer(this.start),
        commentType: java.Integer(this.commentType),
        startTime: java.String(this.startTime),
        hotelId: java.String(this.hotelId),
        endTime: java.String(this.endTime),
        keyword: java.String(this.keyword),
        operatorId: java.Integer(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
