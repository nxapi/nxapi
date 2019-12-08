import java from 'js-to-java';

export interface IRoomTypeBO {
  englishName?: string;
  personAllowed?: number;
  code?: string;
  extraBedAllowed?: number;
  isDelete?: number;
  saleRoomTypeName?: string;
  bedTypeDesc?: string;
  bedWidth?: string;
  windowType?: number;
  size?: string;
  saleRoomTypeId?: number;
  windowTypeDesc?: string;
  name?: string;
  id?: number;
  bedType?: number;
}

export class RoomTypeBO {
  constructor(params: IRoomTypeBO) {
    this.englishName = params.englishName;
    this.personAllowed = params.personAllowed;
    this.code = params.code;
    this.extraBedAllowed = params.extraBedAllowed;
    this.isDelete = params.isDelete;
    this.saleRoomTypeName = params.saleRoomTypeName;
    this.bedTypeDesc = params.bedTypeDesc;
    this.bedWidth = params.bedWidth;
    this.windowType = params.windowType;
    this.size = params.size;
    this.saleRoomTypeId = params.saleRoomTypeId;
    this.windowTypeDesc = params.windowTypeDesc;
    this.name = params.name;
    this.id = params.id;
    this.bedType = params.bedType;
  }

  englishName?: string;
  personAllowed?: number;
  code?: string;
  extraBedAllowed?: number;
  isDelete?: number;
  saleRoomTypeName?: string;
  bedTypeDesc?: string;
  bedWidth?: string;
  windowType?: number;
  size?: string;
  saleRoomTypeId?: number;
  windowTypeDesc?: string;
  name?: string;
  id?: number;
  bedType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.roomtype.RoomTypeBO',
      $: {
        englishName: java.String(this.englishName),
        personAllowed: java.Integer(this.personAllowed),
        code: java.String(this.code),
        extraBedAllowed: java.Integer(this.extraBedAllowed),
        isDelete: java.Integer(this.isDelete),
        saleRoomTypeName: java.String(this.saleRoomTypeName),
        bedTypeDesc: java.String(this.bedTypeDesc),
        bedWidth: java.String(this.bedWidth),
        windowType: java.Integer(this.windowType),
        size: java.String(this.size),
        saleRoomTypeId: java.Long(this.saleRoomTypeId),
        windowTypeDesc: java.String(this.windowTypeDesc),
        name: java.String(this.name),
        id: java.Long(this.id),
        bedType: java.Integer(this.bedType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
