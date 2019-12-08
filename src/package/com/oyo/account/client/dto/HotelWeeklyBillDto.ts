import java from 'js-to-java';

export interface IHotelWeeklyBillDto {
  platformWithdrawal?: {value: string};
  batchNoList?: Array<string>;
  otaName?: string;
  transactionNo?: string;
  preiodTo?: string;
  source?: number;
  tNos?: string;
  idList?: Array<string>;
  completeDate?: string;
  businessBatchNo?: string;
  oyoId?: string;
  uniqueCode?: string;
  dealRepeatable?: string;
  otaCode?: string;
  id?: string;
  completeDateE?: string;
  sumBatch?: string;
  businessTypeStr?: string;
  batchNo?: string;
  period?: string;
  completeDateS?: string;
  beginRow?: number;
  ids?: string;
  region?: string;
  tNoList?: Array<string>;
  status?: number;
  applicationDate?: string;
  billPeriod?: string;
  isPush?: number;
  statusStr?: string;
  city?: string;
  systemBatchNo?: string;
  zenoName?: string;
  sourceStr?: string;
  oyoRate?: string;
  orderPrice?: number;
  otaCommission?: string;
  applicationDateE?: string;
  oyoCommission?: string;
  periodFrom?: string;
  endRow?: number;
  updateTime?: Date;
  hotelId?: string;
  hotelName?: string;
  basisServiceFee?: {value: string};
  createBy?: string;
  applicationDateS?: string;
  accountPayable?: number;
  createTime?: string;
  settlementPrice?: string;
  businessType?: number;
}

export class HotelWeeklyBillDto {
  constructor(params: IHotelWeeklyBillDto) {
    this.platformWithdrawal = params.platformWithdrawal;
    this.batchNoList = params.batchNoList;
    this.otaName = params.otaName;
    this.transactionNo = params.transactionNo;
    this.preiodTo = params.preiodTo;
    this.source = params.source;
    this.tNos = params.tNos;
    this.idList = params.idList;
    this.completeDate = params.completeDate;
    this.businessBatchNo = params.businessBatchNo;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.dealRepeatable = params.dealRepeatable;
    this.otaCode = params.otaCode;
    this.id = params.id;
    this.completeDateE = params.completeDateE;
    this.sumBatch = params.sumBatch;
    this.businessTypeStr = params.businessTypeStr;
    this.batchNo = params.batchNo;
    this.period = params.period;
    this.completeDateS = params.completeDateS;
    this.beginRow = params.beginRow;
    this.ids = params.ids;
    this.region = params.region;
    this.tNoList = params.tNoList;
    this.status = params.status;
    this.applicationDate = params.applicationDate;
    this.billPeriod = params.billPeriod;
    this.isPush = params.isPush;
    this.statusStr = params.statusStr;
    this.city = params.city;
    this.systemBatchNo = params.systemBatchNo;
    this.zenoName = params.zenoName;
    this.sourceStr = params.sourceStr;
    this.oyoRate = params.oyoRate;
    this.orderPrice = params.orderPrice;
    this.otaCommission = params.otaCommission;
    this.applicationDateE = params.applicationDateE;
    this.oyoCommission = params.oyoCommission;
    this.periodFrom = params.periodFrom;
    this.endRow = params.endRow;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.basisServiceFee = params.basisServiceFee;
    this.createBy = params.createBy;
    this.applicationDateS = params.applicationDateS;
    this.accountPayable = params.accountPayable;
    this.createTime = params.createTime;
    this.settlementPrice = params.settlementPrice;
    this.businessType = params.businessType;
  }

  platformWithdrawal?: {value: string};
  batchNoList?: Array<string>;
  otaName?: string;
  transactionNo?: string;
  preiodTo?: string;
  source?: number;
  tNos?: string;
  idList?: Array<string>;
  completeDate?: string;
  businessBatchNo?: string;
  oyoId?: string;
  uniqueCode?: string;
  dealRepeatable?: string;
  otaCode?: string;
  id?: string;
  completeDateE?: string;
  sumBatch?: string;
  businessTypeStr?: string;
  batchNo?: string;
  period?: string;
  completeDateS?: string;
  beginRow?: number;
  ids?: string;
  region?: string;
  tNoList?: Array<string>;
  status?: number;
  applicationDate?: string;
  billPeriod?: string;
  isPush?: number;
  statusStr?: string;
  city?: string;
  systemBatchNo?: string;
  zenoName?: string;
  sourceStr?: string;
  oyoRate?: string;
  orderPrice?: number;
  otaCommission?: string;
  applicationDateE?: string;
  oyoCommission?: string;
  periodFrom?: string;
  endRow?: number;
  updateTime?: Date;
  hotelId?: string;
  hotelName?: string;
  basisServiceFee?: {value: string};
  createBy?: string;
  applicationDateS?: string;
  accountPayable?: number;
  createTime?: string;
  settlementPrice?: string;
  businessType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelWeeklyBillDto',
      $: {
        platformWithdrawal: this.platformWithdrawal
          ? java.BigDecimal(this.platformWithdrawal.value)
          : null,
        batchNoList: this.batchNoList
          ? java.List(
              (this.batchNoList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        otaName: java.String(this.otaName),
        transactionNo: java.String(this.transactionNo),
        preiodTo: java.String(this.preiodTo),
        source: java.Integer(this.source),
        tNos: java.String(this.tNos),
        idList: this.idList
          ? java.List(
              (this.idList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        completeDate: java.String(this.completeDate),
        businessBatchNo: java.String(this.businessBatchNo),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        dealRepeatable: java.String(this.dealRepeatable),
        otaCode: java.String(this.otaCode),
        id: java.String(this.id),
        completeDateE: java.String(this.completeDateE),
        sumBatch: java.String(this.sumBatch),
        businessTypeStr: java.String(this.businessTypeStr),
        batchNo: java.String(this.batchNo),
        period: java.String(this.period),
        completeDateS: java.String(this.completeDateS),
        beginRow: java.Integer(this.beginRow),
        ids: java.String(this.ids),
        region: java.String(this.region),
        tNoList: this.tNoList
          ? java.List(
              (this.tNoList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        status: java.Integer(this.status),
        applicationDate: java.String(this.applicationDate),
        billPeriod: java.String(this.billPeriod),
        isPush: java.Integer(this.isPush),
        statusStr: java.String(this.statusStr),
        city: java.String(this.city),
        systemBatchNo: java.String(this.systemBatchNo),
        zenoName: java.String(this.zenoName),
        sourceStr: java.String(this.sourceStr),
        oyoRate: java.String(this.oyoRate),
        orderPrice: java.Float(this.orderPrice),
        otaCommission: java.String(this.otaCommission),
        applicationDateE: java.String(this.applicationDateE),
        oyoCommission: java.String(this.oyoCommission),
        periodFrom: java.String(this.periodFrom),
        endRow: java.Integer(this.endRow),
        updateTime: this.updateTime,
        hotelId: java.String(this.hotelId),
        hotelName: java.String(this.hotelName),
        basisServiceFee: this.basisServiceFee
          ? java.BigDecimal(this.basisServiceFee.value)
          : null,
        createBy: java.String(this.createBy),
        applicationDateS: java.String(this.applicationDateS),
        accountPayable: java.Double(this.accountPayable),
        createTime: java.String(this.createTime),
        settlementPrice: java.String(this.settlementPrice),
        businessType: java.Integer(this.businessType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
