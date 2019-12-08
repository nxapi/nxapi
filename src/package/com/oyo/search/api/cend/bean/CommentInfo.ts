import java from 'js-to-java';

export interface ICommentInfo {
  roomTypeDesc?: string;
  arriveDate?: string;
  hotelId?: number;
  source?: number;
  userName?: string;
  userId?: number;
  hotelName?: string;
  bookingId?: number;
  hasPicture?: number;
  number?: number;
  setTop?: number;
  totalRate?: number;
  createTime?: string;
  commentType?: number;
  comment?: string;
  isFiltered?: number;
  id?: number;
  departureDate?: string;
  operatorId?: number;
  status?: number;
}

export class CommentInfo {
  constructor(params: ICommentInfo) {
    this.roomTypeDesc = params.roomTypeDesc;
    this.arriveDate = params.arriveDate;
    this.hotelId = params.hotelId;
    this.source = params.source;
    this.userName = params.userName;
    this.userId = params.userId;
    this.hotelName = params.hotelName;
    this.bookingId = params.bookingId;
    this.hasPicture = params.hasPicture;
    this.number = params.number;
    this.setTop = params.setTop;
    this.totalRate = params.totalRate;
    this.createTime = params.createTime;
    this.commentType = params.commentType;
    this.comment = params.comment;
    this.isFiltered = params.isFiltered;
    this.id = params.id;
    this.departureDate = params.departureDate;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  roomTypeDesc?: string;
  arriveDate?: string;
  hotelId?: number;
  source?: number;
  userName?: string;
  userId?: number;
  hotelName?: string;
  bookingId?: number;
  hasPicture?: number;
  number?: number;
  setTop?: number;
  totalRate?: number;
  createTime?: string;
  commentType?: number;
  comment?: string;
  isFiltered?: number;
  id?: number;
  departureDate?: string;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.CommentInfo',
      $: {
        roomTypeDesc: java.String(this.roomTypeDesc),
        arriveDate: java.String(this.arriveDate),
        hotelId: java.Integer(this.hotelId),
        source: java.Integer(this.source),
        userName: java.String(this.userName),
        userId: java.Long(this.userId),
        hotelName: java.String(this.hotelName),
        bookingId: java.Integer(this.bookingId),
        hasPicture: java.Integer(this.hasPicture),
        number: java.Integer(this.number),
        setTop: java.Integer(this.setTop),
        totalRate: java.Integer(this.totalRate),
        createTime: java.String(this.createTime),
        commentType: java.Integer(this.commentType),
        comment: java.String(this.comment),
        isFiltered: java.Integer(this.isFiltered),
        id: java.Integer(this.id),
        departureDate: java.String(this.departureDate),
        operatorId: java.Integer(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
