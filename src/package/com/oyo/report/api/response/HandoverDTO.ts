import { ReserveFundDTO } from './ReserveFundDTO';
import { ReceivablesDTO } from './ReceivablesDTO';
import { ProceedsDTO } from './ProceedsDTO';
import java from 'js-to-java';

export interface IHandoverDTO {
  createTime?: Date;
  fromTime?: Date;
  reserveFund?: ReserveFundDTO;
  updateTime?: Date;
  remark?: string;
  consumption?: ReceivablesDTO;
  receipt?: ProceedsDTO;
  hotelId?: number;
  id?: number;
  operatorName?: string;
  operatorId?: number;
  toTime?: Date;
}

export class HandoverDTO {
  constructor(params: IHandoverDTO) {
    this.createTime = params.createTime;
    this.fromTime = params.fromTime;
    this.reserveFund = params.reserveFund;
    this.updateTime = params.updateTime;
    this.remark = params.remark;
    this.consumption = params.consumption;
    this.receipt = params.receipt;
    this.hotelId = params.hotelId;
    this.id = params.id;
    this.operatorName = params.operatorName;
    this.operatorId = params.operatorId;
    this.toTime = params.toTime;
  }

  createTime?: Date;
  fromTime?: Date;
  reserveFund?: ReserveFundDTO;
  updateTime?: Date;
  remark?: string;
  consumption?: ReceivablesDTO;
  receipt?: ProceedsDTO;
  hotelId?: number;
  id?: number;
  operatorName?: string;
  operatorId?: number;
  toTime?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.HandoverDTO',
      $: {
        createTime: this.createTime,
        fromTime: this.fromTime,
        reserveFund: this.reserveFund ? this.reserveFund.__fields2java() : null,
        updateTime: this.updateTime,
        remark: java.String(this.remark),
        consumption: this.consumption ? this.consumption.__fields2java() : null,
        receipt: this.receipt ? this.receipt.__fields2java() : null,
        hotelId: java.Long(this.hotelId),
        id: java.Integer(this.id),
        operatorName: java.String(this.operatorName),
        operatorId: java.Long(this.operatorId),
        toTime: this.toTime,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
