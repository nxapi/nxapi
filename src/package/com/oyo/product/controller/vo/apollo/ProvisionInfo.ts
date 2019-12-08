import { ProvisionEnum } from './../../../enums/ProvisionEnum';
import { AgreementClassifyEnum } from './../../../enums/AgreementClassifyEnum';
import java from 'js-to-java';

export interface IProvisionInfo {
  provisionCode?: ProvisionEnum;
  templateCode?: string;
  agreementClassify?: AgreementClassifyEnum;
  provisionContent?: {[name: string]: Object};
}

export class ProvisionInfo {
  constructor(params: IProvisionInfo) {
    this.provisionCode = params.provisionCode;
    this.templateCode = params.templateCode;
    this.agreementClassify = params.agreementClassify;
    this.provisionContent = params.provisionContent;
  }

  provisionCode?: ProvisionEnum;
  templateCode?: string;
  agreementClassify?: AgreementClassifyEnum;
  provisionContent?: {[name: string]: Object};

  __fields2java(): any {
    let provisionContentMapTransfer = new Map();
    for (let mapKey in this.provisionContent) {
      provisionContentMapTransfer.set(
        java.String(mapKey),
        this.provisionContent[mapKey] &&
          this.provisionContent[mapKey]['__fields2java']
          ? this.provisionContent[mapKey]['__fields2java']()
          : this.provisionContent[mapKey],
      );
    }
    return {
      $class: 'com.oyo.product.controller.vo.apollo.ProvisionInfo',
      $: {
        provisionCode: java['enum'](
          'com.oyo.product.enums.ProvisionEnum',
          ProvisionEnum[this.provisionCode],
        ),
        templateCode: java.String(this.templateCode),
        agreementClassify: java['enum'](
          'com.oyo.product.enums.AgreementClassifyEnum',
          AgreementClassifyEnum[this.agreementClassify],
        ),
        provisionContent: java.Map(provisionContentMapTransfer),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
