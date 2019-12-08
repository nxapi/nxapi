import { GuaranteeIncome } from './GuaranteeIncome';
import { ProvisionInfo } from './ProvisionInfo';
import java from 'js-to-java';

export interface IAgreementInfoEntity {
  placeMode?: string;
  joinedOyoName?: string;
  modifier?: number;
  companyName?: string;
  projectType?: string;
  yearAmg?: string;
  signWay?: string;
  firstMg?: string;
  securities?: string;
  productLine?: string;
  reverseIdCardPicUrl?: string;
  hotelCity?: string;
  idCardType?: string;
  monthOfValidity?: number;
  electionProtocolName?: string;
  receivingContractPhone?: string;
  partyAfrontIdCardPicUrl?: string;
  hygieneLicense?: string;
  bankBranchOfDepositName?: string;
  id?: string;
  periodOfValidity?: number;
  revenuePattern?: string;
  businessAddress?: string;
  mdmAuditTime?: Date;
  swift?: string;
  roomCount?: string;
  bankAccount?: string;
  totalTransCost?: string;
  signTime?: Date;
  roomOyoTransCost?: string;
  hotelKeyCity?: string;
  signRoomCount?: string;
  projectSubtypes?: string;
  franchiseLicensel?: string;
  accountType?: string;
  sellableBlackRoomCount?: number;
  businessLicenseNo?: string;
  partyAidCardNo?: string;
  hotelDistrict?: string;
  prepaymentRadio?: string;
  partyCname?: string;
  periodOfValidity_B?: string;
  roomHotelTransCost?: string;
  oneTimePerformanceBondl?: string;
  excessCommissionRatio?: string;
  sourceType?: string;
  crsId?: string;
  frontIdCardPicUrl?: string;
  lineNumber?: string;
  commissionEndDate?: string;
  partyDname?: string;
  bankCardUrl?: string;
  effectiveTypeName?: string;
  franchiseLicense?: string;
  idCardNo?: string;
  receivingParty?: string;
  remark?: string;
  buildDate?: string;
  cooperationModel?: string;
  guaranteeIncomes?: Array<GuaranteeIncome>;
  legalPersonName?: string;
  manualVerificationUrl?: string;
  commissionBeginDate?: string;
  bankOfAddress?: string;
  businessEndDate?: string;
  baseServiceRate?: string;
  businessBeginDate?: string;
  email?: string;
  placeCode?: string;
  fireInspectionPermit?: string;
  contractPhone?: string;
  address?: string;
  totalOyoTransCost?: string;
  companyType?: string;
  businessLicensePicUrl?: string;
  hotelId?: number;
  hotelName?: string;
  totalHotelTransCost?: string;
  partyCMobilePhone?: string;
  realAddress?: string;
  auditStatus?: string;
  commissionDateTypeName?: string;
  endTime?: Date;
  provisionInfos?: Array<ProvisionInfo>;
  otherLicense?: string;
  bankOfDepositName?: string;
  oneTimePerformanceBond?: string;
}

export class AgreementInfoEntity {
  constructor(params: IAgreementInfoEntity) {
    this.placeMode = params.placeMode;
    this.joinedOyoName = params.joinedOyoName;
    this.modifier = params.modifier;
    this.companyName = params.companyName;
    this.projectType = params.projectType;
    this.yearAmg = params.yearAmg;
    this.signWay = params.signWay;
    this.firstMg = params.firstMg;
    this.securities = params.securities;
    this.productLine = params.productLine;
    this.reverseIdCardPicUrl = params.reverseIdCardPicUrl;
    this.hotelCity = params.hotelCity;
    this.idCardType = params.idCardType;
    this.monthOfValidity = params.monthOfValidity;
    this.electionProtocolName = params.electionProtocolName;
    this.receivingContractPhone = params.receivingContractPhone;
    this.partyAfrontIdCardPicUrl = params.partyAfrontIdCardPicUrl;
    this.hygieneLicense = params.hygieneLicense;
    this.bankBranchOfDepositName = params.bankBranchOfDepositName;
    this.id = params.id;
    this.periodOfValidity = params.periodOfValidity;
    this.revenuePattern = params.revenuePattern;
    this.businessAddress = params.businessAddress;
    this.mdmAuditTime = params.mdmAuditTime;
    this.swift = params.swift;
    this.roomCount = params.roomCount;
    this.bankAccount = params.bankAccount;
    this.totalTransCost = params.totalTransCost;
    this.signTime = params.signTime;
    this.roomOyoTransCost = params.roomOyoTransCost;
    this.hotelKeyCity = params.hotelKeyCity;
    this.signRoomCount = params.signRoomCount;
    this.projectSubtypes = params.projectSubtypes;
    this.franchiseLicensel = params.franchiseLicensel;
    this.accountType = params.accountType;
    this.sellableBlackRoomCount = params.sellableBlackRoomCount;
    this.businessLicenseNo = params.businessLicenseNo;
    this.partyAidCardNo = params.partyAidCardNo;
    this.hotelDistrict = params.hotelDistrict;
    this.prepaymentRadio = params.prepaymentRadio;
    this.partyCname = params.partyCname;
    this.periodOfValidity_B = params.periodOfValidity_B;
    this.roomHotelTransCost = params.roomHotelTransCost;
    this.oneTimePerformanceBondl = params.oneTimePerformanceBondl;
    this.excessCommissionRatio = params.excessCommissionRatio;
    this.sourceType = params.sourceType;
    this.crsId = params.crsId;
    this.frontIdCardPicUrl = params.frontIdCardPicUrl;
    this.lineNumber = params.lineNumber;
    this.commissionEndDate = params.commissionEndDate;
    this.partyDname = params.partyDname;
    this.bankCardUrl = params.bankCardUrl;
    this.effectiveTypeName = params.effectiveTypeName;
    this.franchiseLicense = params.franchiseLicense;
    this.idCardNo = params.idCardNo;
    this.receivingParty = params.receivingParty;
    this.remark = params.remark;
    this.buildDate = params.buildDate;
    this.cooperationModel = params.cooperationModel;
    this.guaranteeIncomes = params.guaranteeIncomes;
    this.legalPersonName = params.legalPersonName;
    this.manualVerificationUrl = params.manualVerificationUrl;
    this.commissionBeginDate = params.commissionBeginDate;
    this.bankOfAddress = params.bankOfAddress;
    this.businessEndDate = params.businessEndDate;
    this.baseServiceRate = params.baseServiceRate;
    this.businessBeginDate = params.businessBeginDate;
    this.email = params.email;
    this.placeCode = params.placeCode;
    this.fireInspectionPermit = params.fireInspectionPermit;
    this.contractPhone = params.contractPhone;
    this.address = params.address;
    this.totalOyoTransCost = params.totalOyoTransCost;
    this.companyType = params.companyType;
    this.businessLicensePicUrl = params.businessLicensePicUrl;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.totalHotelTransCost = params.totalHotelTransCost;
    this.partyCMobilePhone = params.partyCMobilePhone;
    this.realAddress = params.realAddress;
    this.auditStatus = params.auditStatus;
    this.commissionDateTypeName = params.commissionDateTypeName;
    this.endTime = params.endTime;
    this.provisionInfos = params.provisionInfos;
    this.otherLicense = params.otherLicense;
    this.bankOfDepositName = params.bankOfDepositName;
    this.oneTimePerformanceBond = params.oneTimePerformanceBond;
  }

  placeMode?: string;
  joinedOyoName?: string;
  modifier?: number;
  companyName?: string;
  projectType?: string;
  yearAmg?: string;
  signWay?: string;
  firstMg?: string;
  securities?: string;
  productLine?: string;
  reverseIdCardPicUrl?: string;
  hotelCity?: string;
  idCardType?: string;
  monthOfValidity?: number;
  electionProtocolName?: string;
  receivingContractPhone?: string;
  partyAfrontIdCardPicUrl?: string;
  hygieneLicense?: string;
  bankBranchOfDepositName?: string;
  id?: string;
  periodOfValidity?: number;
  revenuePattern?: string;
  businessAddress?: string;
  mdmAuditTime?: Date;
  swift?: string;
  roomCount?: string;
  bankAccount?: string;
  totalTransCost?: string;
  signTime?: Date;
  roomOyoTransCost?: string;
  hotelKeyCity?: string;
  signRoomCount?: string;
  projectSubtypes?: string;
  franchiseLicensel?: string;
  accountType?: string;
  sellableBlackRoomCount?: number;
  businessLicenseNo?: string;
  partyAidCardNo?: string;
  hotelDistrict?: string;
  prepaymentRadio?: string;
  partyCname?: string;
  periodOfValidity_B?: string;
  roomHotelTransCost?: string;
  oneTimePerformanceBondl?: string;
  excessCommissionRatio?: string;
  sourceType?: string;
  crsId?: string;
  frontIdCardPicUrl?: string;
  lineNumber?: string;
  commissionEndDate?: string;
  partyDname?: string;
  bankCardUrl?: string;
  effectiveTypeName?: string;
  franchiseLicense?: string;
  idCardNo?: string;
  receivingParty?: string;
  remark?: string;
  buildDate?: string;
  cooperationModel?: string;
  guaranteeIncomes?: Array<GuaranteeIncome>;
  legalPersonName?: string;
  manualVerificationUrl?: string;
  commissionBeginDate?: string;
  bankOfAddress?: string;
  businessEndDate?: string;
  baseServiceRate?: string;
  businessBeginDate?: string;
  email?: string;
  placeCode?: string;
  fireInspectionPermit?: string;
  contractPhone?: string;
  address?: string;
  totalOyoTransCost?: string;
  companyType?: string;
  businessLicensePicUrl?: string;
  hotelId?: number;
  hotelName?: string;
  totalHotelTransCost?: string;
  partyCMobilePhone?: string;
  realAddress?: string;
  auditStatus?: string;
  commissionDateTypeName?: string;
  endTime?: Date;
  provisionInfos?: Array<ProvisionInfo>;
  otherLicense?: string;
  bankOfDepositName?: string;
  oneTimePerformanceBond?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.apollo.AgreementInfoEntity',
      $: {
        placeMode: java.String(this.placeMode),
        joinedOyoName: java.String(this.joinedOyoName),
        modifier: java.Long(this.modifier),
        companyName: java.String(this.companyName),
        projectType: java.String(this.projectType),
        yearAmg: java.String(this.yearAmg),
        signWay: java.String(this.signWay),
        firstMg: java.String(this.firstMg),
        securities: java.String(this.securities),
        productLine: java.String(this.productLine),
        reverseIdCardPicUrl: java.String(this.reverseIdCardPicUrl),
        hotelCity: java.String(this.hotelCity),
        idCardType: java.String(this.idCardType),
        monthOfValidity: java.Integer(this.monthOfValidity),
        electionProtocolName: java.String(this.electionProtocolName),
        receivingContractPhone: java.String(this.receivingContractPhone),
        partyAfrontIdCardPicUrl: java.String(this.partyAfrontIdCardPicUrl),
        hygieneLicense: java.String(this.hygieneLicense),
        bankBranchOfDepositName: java.String(this.bankBranchOfDepositName),
        id: java.String(this.id),
        periodOfValidity: java.Integer(this.periodOfValidity),
        revenuePattern: java.String(this.revenuePattern),
        businessAddress: java.String(this.businessAddress),
        mdmAuditTime: this.mdmAuditTime,
        swift: java.String(this.swift),
        roomCount: java.String(this.roomCount),
        bankAccount: java.String(this.bankAccount),
        totalTransCost: java.String(this.totalTransCost),
        signTime: this.signTime,
        roomOyoTransCost: java.String(this.roomOyoTransCost),
        hotelKeyCity: java.String(this.hotelKeyCity),
        signRoomCount: java.String(this.signRoomCount),
        projectSubtypes: java.String(this.projectSubtypes),
        franchiseLicensel: java.String(this.franchiseLicensel),
        accountType: java.String(this.accountType),
        sellableBlackRoomCount: java.Integer(this.sellableBlackRoomCount),
        businessLicenseNo: java.String(this.businessLicenseNo),
        partyAidCardNo: java.String(this.partyAidCardNo),
        hotelDistrict: java.String(this.hotelDistrict),
        prepaymentRadio: java.String(this.prepaymentRadio),
        partyCname: java.String(this.partyCname),
        periodOfValidity_B: java.String(this.periodOfValidity_B),
        roomHotelTransCost: java.String(this.roomHotelTransCost),
        oneTimePerformanceBondl: java.String(this.oneTimePerformanceBondl),
        excessCommissionRatio: java.String(this.excessCommissionRatio),
        sourceType: java.String(this.sourceType),
        crsId: java.String(this.crsId),
        frontIdCardPicUrl: java.String(this.frontIdCardPicUrl),
        lineNumber: java.String(this.lineNumber),
        commissionEndDate: java.String(this.commissionEndDate),
        partyDname: java.String(this.partyDname),
        bankCardUrl: java.String(this.bankCardUrl),
        effectiveTypeName: java.String(this.effectiveTypeName),
        franchiseLicense: java.String(this.franchiseLicense),
        idCardNo: java.String(this.idCardNo),
        receivingParty: java.String(this.receivingParty),
        remark: java.String(this.remark),
        buildDate: java.String(this.buildDate),
        cooperationModel: java.String(this.cooperationModel),
        guaranteeIncomes: this.guaranteeIncomes
          ? java.List(
              (this.guaranteeIncomes || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        legalPersonName: java.String(this.legalPersonName),
        manualVerificationUrl: java.String(this.manualVerificationUrl),
        commissionBeginDate: java.String(this.commissionBeginDate),
        bankOfAddress: java.String(this.bankOfAddress),
        businessEndDate: java.String(this.businessEndDate),
        baseServiceRate: java.String(this.baseServiceRate),
        businessBeginDate: java.String(this.businessBeginDate),
        email: java.String(this.email),
        placeCode: java.String(this.placeCode),
        fireInspectionPermit: java.String(this.fireInspectionPermit),
        contractPhone: java.String(this.contractPhone),
        address: java.String(this.address),
        totalOyoTransCost: java.String(this.totalOyoTransCost),
        companyType: java.String(this.companyType),
        businessLicensePicUrl: java.String(this.businessLicensePicUrl),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        totalHotelTransCost: java.String(this.totalHotelTransCost),
        partyCMobilePhone: java.String(this.partyCMobilePhone),
        realAddress: java.String(this.realAddress),
        auditStatus: java.String(this.auditStatus),
        commissionDateTypeName: java.String(this.commissionDateTypeName),
        endTime: this.endTime,
        provisionInfos: this.provisionInfos
          ? java.List(
              (this.provisionInfos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        otherLicense: java.String(this.otherLicense),
        bankOfDepositName: java.String(this.bankOfDepositName),
        oneTimePerformanceBond: java.String(this.oneTimePerformanceBond),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
