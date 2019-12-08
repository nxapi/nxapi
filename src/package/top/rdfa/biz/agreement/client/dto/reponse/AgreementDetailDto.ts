import { AgreementSettlementInfoDto } from './AgreementSettlementInfoDto';
import { AgreementPrepaidInfoDto } from './AgreementPrepaidInfoDto';
import java from 'js-to-java';

export interface IAgreementDetailDto {
  companyCode?: string;
  agreementType?: string;
  cooperationMode?: string;
  contractPartner?: string;
  businessModel?: string;
  agreementSettlementInfoDto?: AgreementSettlementInfoDto;
  agreementCode?: string;
  version?: string;
  hotelBrand?: string;
  agreementPrepaidInfoDto?: Array<AgreementPrepaidInfoDto>;
  agreementId?: number;
  applyPersonId?: number;
  effectiveDate?: Date;
}

export class AgreementDetailDto {
  constructor(params: IAgreementDetailDto) {
    this.companyCode = params.companyCode;
    this.agreementType = params.agreementType;
    this.cooperationMode = params.cooperationMode;
    this.contractPartner = params.contractPartner;
    this.businessModel = params.businessModel;
    this.agreementSettlementInfoDto = params.agreementSettlementInfoDto;
    this.agreementCode = params.agreementCode;
    this.version = params.version;
    this.hotelBrand = params.hotelBrand;
    this.agreementPrepaidInfoDto = params.agreementPrepaidInfoDto;
    this.agreementId = params.agreementId;
    this.applyPersonId = params.applyPersonId;
    this.effectiveDate = params.effectiveDate;
  }

  companyCode?: string;
  agreementType?: string;
  cooperationMode?: string;
  contractPartner?: string;
  businessModel?: string;
  agreementSettlementInfoDto?: AgreementSettlementInfoDto;
  agreementCode?: string;
  version?: string;
  hotelBrand?: string;
  agreementPrepaidInfoDto?: Array<AgreementPrepaidInfoDto>;
  agreementId?: number;
  applyPersonId?: number;
  effectiveDate?: Date;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.AgreementDetailDto',
      $: {
        companyCode: java.String(this.companyCode),
        agreementType: java.String(this.agreementType),
        cooperationMode: java.String(this.cooperationMode),
        contractPartner: java.String(this.contractPartner),
        businessModel: java.String(this.businessModel),
        agreementSettlementInfoDto: this.agreementSettlementInfoDto
          ? this.agreementSettlementInfoDto.__fields2java()
          : null,
        agreementCode: java.String(this.agreementCode),
        version: java.String(this.version),
        hotelBrand: java.String(this.hotelBrand),
        agreementPrepaidInfoDto: this.agreementPrepaidInfoDto
          ? java.List(
              (this.agreementPrepaidInfoDto || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        agreementId: java.Long(this.agreementId),
        applyPersonId: java.Long(this.applyPersonId),
        effectiveDate: this.effectiveDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
