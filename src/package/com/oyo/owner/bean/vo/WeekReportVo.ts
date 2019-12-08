import java from 'js-to-java';

export interface IWeekReportVo {
  reason?: string;
  endDate?: Date;
  weekComplianceTag?: string;
  uptonowOyoMemberInvestment?: number;
  uptonowMeituanRank?: number;
  weekBadCommentTag?: string;
  uptonowOyoOrders?: number;
  uptonowXiechengRank?: number;
  uptonowMeituanScore?: {value: string};
  weekMeituanVisitors?: number;
  weekXiechengScore?: {value: string};
  id?: number;
  weekTotalRevenue?: {value: string};
  uptonowOtaChannelFee?: number;
  weekMmTotalAmount?: {value: string};
  weekOccupancyRate?: number;
  uptonowXiechengScore?: {value: string};
  uptonowXiechengVisitors?: number;
  weekXiechengVisitors?: number;
  hotelId?: number;
  uptonowMeituanVisitors?: number;
  weekComplianceStatus?: number;
  uptonowMmTotalAmount?: {value: string};
  hotelName?: string;
  weekXiechengRank?: number;
  uptonowOtaPraiseNum?: number;
  weekMeituanScore?: {value: string};
  weekBadCommentCount?: number;
  weekMeituanRank?: number;
  crsId?: string;
  weekOyoOrders?: number;
  startDate?: Date;
  status?: number;
}

export class WeekReportVo {
  constructor(params: IWeekReportVo) {
    this.reason = params.reason;
    this.endDate = params.endDate;
    this.weekComplianceTag = params.weekComplianceTag;
    this.uptonowOyoMemberInvestment = params.uptonowOyoMemberInvestment;
    this.uptonowMeituanRank = params.uptonowMeituanRank;
    this.weekBadCommentTag = params.weekBadCommentTag;
    this.uptonowOyoOrders = params.uptonowOyoOrders;
    this.uptonowXiechengRank = params.uptonowXiechengRank;
    this.uptonowMeituanScore = params.uptonowMeituanScore;
    this.weekMeituanVisitors = params.weekMeituanVisitors;
    this.weekXiechengScore = params.weekXiechengScore;
    this.id = params.id;
    this.weekTotalRevenue = params.weekTotalRevenue;
    this.uptonowOtaChannelFee = params.uptonowOtaChannelFee;
    this.weekMmTotalAmount = params.weekMmTotalAmount;
    this.weekOccupancyRate = params.weekOccupancyRate;
    this.uptonowXiechengScore = params.uptonowXiechengScore;
    this.uptonowXiechengVisitors = params.uptonowXiechengVisitors;
    this.weekXiechengVisitors = params.weekXiechengVisitors;
    this.hotelId = params.hotelId;
    this.uptonowMeituanVisitors = params.uptonowMeituanVisitors;
    this.weekComplianceStatus = params.weekComplianceStatus;
    this.uptonowMmTotalAmount = params.uptonowMmTotalAmount;
    this.hotelName = params.hotelName;
    this.weekXiechengRank = params.weekXiechengRank;
    this.uptonowOtaPraiseNum = params.uptonowOtaPraiseNum;
    this.weekMeituanScore = params.weekMeituanScore;
    this.weekBadCommentCount = params.weekBadCommentCount;
    this.weekMeituanRank = params.weekMeituanRank;
    this.crsId = params.crsId;
    this.weekOyoOrders = params.weekOyoOrders;
    this.startDate = params.startDate;
    this.status = params.status;
  }

  reason?: string;
  endDate?: Date;
  weekComplianceTag?: string;
  uptonowOyoMemberInvestment?: number;
  uptonowMeituanRank?: number;
  weekBadCommentTag?: string;
  uptonowOyoOrders?: number;
  uptonowXiechengRank?: number;
  uptonowMeituanScore?: {value: string};
  weekMeituanVisitors?: number;
  weekXiechengScore?: {value: string};
  id?: number;
  weekTotalRevenue?: {value: string};
  uptonowOtaChannelFee?: number;
  weekMmTotalAmount?: {value: string};
  weekOccupancyRate?: number;
  uptonowXiechengScore?: {value: string};
  uptonowXiechengVisitors?: number;
  weekXiechengVisitors?: number;
  hotelId?: number;
  uptonowMeituanVisitors?: number;
  weekComplianceStatus?: number;
  uptonowMmTotalAmount?: {value: string};
  hotelName?: string;
  weekXiechengRank?: number;
  uptonowOtaPraiseNum?: number;
  weekMeituanScore?: {value: string};
  weekBadCommentCount?: number;
  weekMeituanRank?: number;
  crsId?: string;
  weekOyoOrders?: number;
  startDate?: Date;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.WeekReportVo',
      $: {
        reason: java.String(this.reason),
        endDate: this.endDate,
        weekComplianceTag: java.String(this.weekComplianceTag),
        uptonowOyoMemberInvestment: java.Integer(
          this.uptonowOyoMemberInvestment,
        ),
        uptonowMeituanRank: java.Integer(this.uptonowMeituanRank),
        weekBadCommentTag: java.String(this.weekBadCommentTag),
        uptonowOyoOrders: java.Integer(this.uptonowOyoOrders),
        uptonowXiechengRank: java.Integer(this.uptonowXiechengRank),
        uptonowMeituanScore: this.uptonowMeituanScore
          ? java.BigDecimal(this.uptonowMeituanScore.value)
          : null,
        weekMeituanVisitors: java.Integer(this.weekMeituanVisitors),
        weekXiechengScore: this.weekXiechengScore
          ? java.BigDecimal(this.weekXiechengScore.value)
          : null,
        id: java.Long(this.id),
        weekTotalRevenue: this.weekTotalRevenue
          ? java.BigDecimal(this.weekTotalRevenue.value)
          : null,
        uptonowOtaChannelFee: java.Integer(this.uptonowOtaChannelFee),
        weekMmTotalAmount: this.weekMmTotalAmount
          ? java.BigDecimal(this.weekMmTotalAmount.value)
          : null,
        weekOccupancyRate: java.Integer(this.weekOccupancyRate),
        uptonowXiechengScore: this.uptonowXiechengScore
          ? java.BigDecimal(this.uptonowXiechengScore.value)
          : null,
        uptonowXiechengVisitors: java.Integer(this.uptonowXiechengVisitors),
        weekXiechengVisitors: java.Integer(this.weekXiechengVisitors),
        hotelId: java.Long(this.hotelId),
        uptonowMeituanVisitors: java.Integer(this.uptonowMeituanVisitors),
        weekComplianceStatus: java.Integer(this.weekComplianceStatus),
        uptonowMmTotalAmount: this.uptonowMmTotalAmount
          ? java.BigDecimal(this.uptonowMmTotalAmount.value)
          : null,
        hotelName: java.String(this.hotelName),
        weekXiechengRank: java.Integer(this.weekXiechengRank),
        uptonowOtaPraiseNum: java.Integer(this.uptonowOtaPraiseNum),
        weekMeituanScore: this.weekMeituanScore
          ? java.BigDecimal(this.weekMeituanScore.value)
          : null,
        weekBadCommentCount: java.Integer(this.weekBadCommentCount),
        weekMeituanRank: java.Integer(this.weekMeituanRank),
        crsId: java.String(this.crsId),
        weekOyoOrders: java.Integer(this.weekOyoOrders),
        startDate: this.startDate,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
