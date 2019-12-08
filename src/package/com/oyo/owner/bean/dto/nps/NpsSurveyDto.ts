import { HotelDetailDto } from './../hotel/HotelDetailDto';
import java from 'js-to-java';

export interface INpsSurveyDto {
  accountId?: number;
  systemFeelingRate?: string;
  transformFeedback?: string;
  staffFeelingRate?: string;
  revenueFeelingRate?: string;
  phone?: string;
  ownerFeelingRate?: string;
  materialFeedback?: string;
  transformFeelingRate?: string;
  hotelInfoList?: Array<HotelDetailDto>;
  ownerFeedbackProblem?: string;
}

export class NpsSurveyDto {
  constructor(params: INpsSurveyDto) {
    this.accountId = params.accountId;
    this.systemFeelingRate = params.systemFeelingRate;
    this.transformFeedback = params.transformFeedback;
    this.staffFeelingRate = params.staffFeelingRate;
    this.revenueFeelingRate = params.revenueFeelingRate;
    this.phone = params.phone;
    this.ownerFeelingRate = params.ownerFeelingRate;
    this.materialFeedback = params.materialFeedback;
    this.transformFeelingRate = params.transformFeelingRate;
    this.hotelInfoList = params.hotelInfoList;
    this.ownerFeedbackProblem = params.ownerFeedbackProblem;
  }

  accountId?: number;
  systemFeelingRate?: string;
  transformFeedback?: string;
  staffFeelingRate?: string;
  revenueFeelingRate?: string;
  phone?: string;
  ownerFeelingRate?: string;
  materialFeedback?: string;
  transformFeelingRate?: string;
  hotelInfoList?: Array<HotelDetailDto>;
  ownerFeedbackProblem?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.dto.nps.NpsSurveyDto',
      $: {
        accountId: java.Long(this.accountId),
        systemFeelingRate: java.String(this.systemFeelingRate),
        transformFeedback: java.String(this.transformFeedback),
        staffFeelingRate: java.String(this.staffFeelingRate),
        revenueFeelingRate: java.String(this.revenueFeelingRate),
        phone: java.String(this.phone),
        ownerFeelingRate: java.String(this.ownerFeelingRate),
        materialFeedback: java.String(this.materialFeedback),
        transformFeelingRate: java.String(this.transformFeelingRate),
        hotelInfoList: this.hotelInfoList
          ? java.List(
              (this.hotelInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        ownerFeedbackProblem: java.String(this.ownerFeedbackProblem),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
