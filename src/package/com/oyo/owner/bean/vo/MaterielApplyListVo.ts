import java from 'js-to-java';

export interface IMaterielApplyListVo {
  updateDate?: Date;
  orderNo?: string;
  statusName?: string;
  id?: number;
  applyDate?: Date;
  title?: string;
  status?: number;
}

export class MaterielApplyListVo {
  constructor(params: IMaterielApplyListVo) {
    this.updateDate = params.updateDate;
    this.orderNo = params.orderNo;
    this.statusName = params.statusName;
    this.id = params.id;
    this.applyDate = params.applyDate;
    this.title = params.title;
    this.status = params.status;
  }

  updateDate?: Date;
  orderNo?: string;
  statusName?: string;
  id?: number;
  applyDate?: Date;
  title?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.MaterielApplyListVo',
      $: {
        updateDate: this.updateDate,
        orderNo: java.String(this.orderNo),
        statusName: java.String(this.statusName),
        id: java.Long(this.id),
        applyDate: this.applyDate,
        title: java.String(this.title),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
