import { PrepaidBatchQueryDTO } from './../PrepaidBatchQueryDTO';
import java from 'js-to-java';

export interface IAgreementSyncQueryDto {
  agreementDateEnd?: Date;
  crsId?: Array<string>;
  prepaidBatchQueryDTOList?: Array<PrepaidBatchQueryDTO>;
  pageSize?: number;
  pageNum?: number;
  agreementDateStart?: Date;
}

export class AgreementSyncQueryDto {
  constructor(params: IAgreementSyncQueryDto) {
    this.agreementDateEnd = params.agreementDateEnd;
    this.crsId = params.crsId;
    this.prepaidBatchQueryDTOList = params.prepaidBatchQueryDTOList;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
    this.agreementDateStart = params.agreementDateStart;
  }

  agreementDateEnd?: Date;
  crsId?: Array<string>;
  prepaidBatchQueryDTOList?: Array<PrepaidBatchQueryDTO>;
  pageSize?: number;
  pageNum?: number;
  agreementDateStart?: Date;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.request.AgreementSyncQueryDto',
      $: {
        agreementDateEnd: this.agreementDateEnd,
        crsId: this.crsId
          ? java.List(
              (this.crsId || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        prepaidBatchQueryDTOList: this.prepaidBatchQueryDTOList
          ? java.List(
              (this.prepaidBatchQueryDTOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
        agreementDateStart: this.agreementDateStart,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
