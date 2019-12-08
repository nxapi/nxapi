import java from 'js-to-java';

export interface ISourceTypeInfoDto {
  sourceTypeList?: Array<string>;
  parentAgreementId?: number;
}

export class SourceTypeInfoDto {
  constructor(params: ISourceTypeInfoDto) {
    this.sourceTypeList = params.sourceTypeList;
    this.parentAgreementId = params.parentAgreementId;
  }

  sourceTypeList?: Array<string>;
  parentAgreementId?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.SourceTypeInfoDto',
      $: {
        sourceTypeList: this.sourceTypeList
          ? java.List(
              (this.sourceTypeList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        parentAgreementId: java.Long(this.parentAgreementId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
