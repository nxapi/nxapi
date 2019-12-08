import { MemberListDTO } from './MemberListDTO';
import { CountRateDTO } from './CountRateDTO';
import java from 'js-to-java';

export interface IMemberResultDTO {
  total?: number;
  memberList?: Array<MemberListDTO>;
  rateCount?: Array<CountRateDTO>;
}

export class MemberResultDTO {
  constructor(params: IMemberResultDTO) {
    this.total = params.total;
    this.memberList = params.memberList;
    this.rateCount = params.rateCount;
  }

  total?: number;
  memberList?: Array<MemberListDTO>;
  rateCount?: Array<CountRateDTO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.MemberResultDTO',
      $: {
        total: java.Long(this.total),
        memberList: this.memberList
          ? java.List(
              (this.memberList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        rateCount: this.rateCount
          ? java.List(
              (this.rateCount || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
