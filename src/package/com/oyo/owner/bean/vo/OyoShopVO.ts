import java from 'js-to-java';

export interface IOyoShopVO {
  createBy?: number;
  oyoId?: string;
  isDeleted?: boolean;
  validCode?: string;
  updateBy?: number;
  createTime?: Date;
  loginFlag?: number;
  updateTime?: Date;
  id?: string;
  hotelId?: number;
}

export class OyoShopVO {
  constructor(params: IOyoShopVO) {
    this.createBy = params.createBy;
    this.oyoId = params.oyoId;
    this.isDeleted = params.isDeleted;
    this.validCode = params.validCode;
    this.updateBy = params.updateBy;
    this.createTime = params.createTime;
    this.loginFlag = params.loginFlag;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.hotelId = params.hotelId;
  }

  createBy?: number;
  oyoId?: string;
  isDeleted?: boolean;
  validCode?: string;
  updateBy?: number;
  createTime?: Date;
  loginFlag?: number;
  updateTime?: Date;
  id?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.OyoShopVO',
      $: {
        createBy: java.Long(this.createBy),
        oyoId: java.String(this.oyoId),
        isDeleted: java.Boolean(this.isDeleted),
        validCode: java.String(this.validCode),
        updateBy: java.Long(this.updateBy),
        createTime: this.createTime,
        loginFlag: java.Integer(this.loginFlag),
        updateTime: this.updateTime,
        id: java.String(this.id),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
