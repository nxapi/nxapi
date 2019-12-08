import { OtherOperateDetailDTO } from './OtherOperateDetailDTO';
import { OtaAccountCheckDetailDTO } from './OtaAccountCheckDetailDTO';
import { Customer3CExpDetailDTO } from './Customer3CExpDetailDTO';
import java from 'js-to-java';

export interface IComplianceDTO {
  otherOperateDetailList?: Array<OtherOperateDetailDTO>;
  otaAccountCheckList?: Array<OtaAccountCheckDetailDTO>;
  hotelId?: number;
  hotelName?: string;
  customer3CExpList?: Array<Customer3CExpDetailDTO>;
}

export class ComplianceDTO {
  constructor(params: IComplianceDTO) {
    this.otherOperateDetailList = params.otherOperateDetailList;
    this.otaAccountCheckList = params.otaAccountCheckList;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.customer3CExpList = params.customer3CExpList;
  }

  otherOperateDetailList?: Array<OtherOperateDetailDTO>;
  otaAccountCheckList?: Array<OtaAccountCheckDetailDTO>;
  hotelId?: number;
  hotelName?: string;
  customer3CExpList?: Array<Customer3CExpDetailDTO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ComplianceDTO',
      $: {
        otherOperateDetailList: this.otherOperateDetailList
          ? java.List(
              (this.otherOperateDetailList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        otaAccountCheckList: this.otaAccountCheckList
          ? java.List(
              (this.otaAccountCheckList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        customer3CExpList: this.customer3CExpList
          ? java.List(
              (this.customer3CExpList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
