import java from 'js-to-java';

export interface IHmiContentDTO {
  roomCount?: number;
  cidRate?: {value: string};
  actualPmsUsageRate?: {value: string};
  completedOccRate?: {value: string};
  completedCusBadCommentRate?: {value: string};
  updateTime?: Date;
  hotelId?: number;
  completedPmsUsageRate?: {value: string};
  commissionPaybackRate?: {value: string};
  targetOccRate?: {value: string};
  targetCusBadCommentRate?: {value: string};
  businessDate?: string;
  occRate?: {value: string};
  isDeleted?: number;
  createTime?: Date;
  targetPmsUsageRate?: {value: string};
  actualCusBadCommentRate?: {value: string};
  id?: number;
  otaAccCancelRate?: {value: string};
}

export class HmiContentDTO {
  constructor(params: IHmiContentDTO) {
    this.roomCount = params.roomCount;
    this.cidRate = params.cidRate;
    this.actualPmsUsageRate = params.actualPmsUsageRate;
    this.completedOccRate = params.completedOccRate;
    this.completedCusBadCommentRate = params.completedCusBadCommentRate;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.completedPmsUsageRate = params.completedPmsUsageRate;
    this.commissionPaybackRate = params.commissionPaybackRate;
    this.targetOccRate = params.targetOccRate;
    this.targetCusBadCommentRate = params.targetCusBadCommentRate;
    this.businessDate = params.businessDate;
    this.occRate = params.occRate;
    this.isDeleted = params.isDeleted;
    this.createTime = params.createTime;
    this.targetPmsUsageRate = params.targetPmsUsageRate;
    this.actualCusBadCommentRate = params.actualCusBadCommentRate;
    this.id = params.id;
    this.otaAccCancelRate = params.otaAccCancelRate;
  }

  roomCount?: number;
  cidRate?: {value: string};
  actualPmsUsageRate?: {value: string};
  completedOccRate?: {value: string};
  completedCusBadCommentRate?: {value: string};
  updateTime?: Date;
  hotelId?: number;
  completedPmsUsageRate?: {value: string};
  commissionPaybackRate?: {value: string};
  targetOccRate?: {value: string};
  targetCusBadCommentRate?: {value: string};
  businessDate?: string;
  occRate?: {value: string};
  isDeleted?: number;
  createTime?: Date;
  targetPmsUsageRate?: {value: string};
  actualCusBadCommentRate?: {value: string};
  id?: number;
  otaAccCancelRate?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.HmiContentDTO',
      $: {
        roomCount: java.Integer(this.roomCount),
        cidRate: this.cidRate ? java.BigDecimal(this.cidRate.value) : null,
        actualPmsUsageRate: this.actualPmsUsageRate
          ? java.BigDecimal(this.actualPmsUsageRate.value)
          : null,
        completedOccRate: this.completedOccRate
          ? java.BigDecimal(this.completedOccRate.value)
          : null,
        completedCusBadCommentRate: this.completedCusBadCommentRate
          ? java.BigDecimal(this.completedCusBadCommentRate.value)
          : null,
        updateTime: this.updateTime,
        hotelId: java.Long(this.hotelId),
        completedPmsUsageRate: this.completedPmsUsageRate
          ? java.BigDecimal(this.completedPmsUsageRate.value)
          : null,
        commissionPaybackRate: this.commissionPaybackRate
          ? java.BigDecimal(this.commissionPaybackRate.value)
          : null,
        targetOccRate: this.targetOccRate
          ? java.BigDecimal(this.targetOccRate.value)
          : null,
        targetCusBadCommentRate: this.targetCusBadCommentRate
          ? java.BigDecimal(this.targetCusBadCommentRate.value)
          : null,
        businessDate: java.String(this.businessDate),
        occRate: this.occRate ? java.BigDecimal(this.occRate.value) : null,
        isDeleted: java.Integer(this.isDeleted),
        createTime: this.createTime,
        targetPmsUsageRate: this.targetPmsUsageRate
          ? java.BigDecimal(this.targetPmsUsageRate.value)
          : null,
        actualCusBadCommentRate: this.actualCusBadCommentRate
          ? java.BigDecimal(this.actualCusBadCommentRate.value)
          : null,
        id: java.Integer(this.id),
        otaAccCancelRate: this.otaAccCancelRate
          ? java.BigDecimal(this.otaAccCancelRate.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
