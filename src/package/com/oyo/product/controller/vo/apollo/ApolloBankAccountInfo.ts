import java from 'js-to-java';

export interface IApolloBankAccountInfo {
  bankAccount?: string;
  bankInterbankNumber?: string;
  contactTelephone?: string;
  branchOpeningBank?: string;
  accountType?: string;
  receivingParty?: string;
  hotelId?: number;
  bankAddress?: string;
  openingBank?: string;
}

export class ApolloBankAccountInfo {
  constructor(params: IApolloBankAccountInfo) {
    this.bankAccount = params.bankAccount;
    this.bankInterbankNumber = params.bankInterbankNumber;
    this.contactTelephone = params.contactTelephone;
    this.branchOpeningBank = params.branchOpeningBank;
    this.accountType = params.accountType;
    this.receivingParty = params.receivingParty;
    this.hotelId = params.hotelId;
    this.bankAddress = params.bankAddress;
    this.openingBank = params.openingBank;
  }

  bankAccount?: string;
  bankInterbankNumber?: string;
  contactTelephone?: string;
  branchOpeningBank?: string;
  accountType?: string;
  receivingParty?: string;
  hotelId?: number;
  bankAddress?: string;
  openingBank?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.apollo.ApolloBankAccountInfo',
      $: {
        bankAccount: java.String(this.bankAccount),
        bankInterbankNumber: java.String(this.bankInterbankNumber),
        contactTelephone: java.String(this.contactTelephone),
        branchOpeningBank: java.String(this.branchOpeningBank),
        accountType: java.String(this.accountType),
        receivingParty: java.String(this.receivingParty),
        hotelId: java.Long(this.hotelId),
        bankAddress: java.String(this.bankAddress),
        openingBank: java.String(this.openingBank),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
