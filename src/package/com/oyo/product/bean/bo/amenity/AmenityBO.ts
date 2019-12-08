import java from 'js-to-java';

export interface IAmenityBO {
  createBy?: string;
  code?: string;
  isDeleted?: number;
  updateBy?: string;
  name?: string;
  id?: number;
  oldRoomAmenityId?: number;
  type?: string;
  group?: string;
}

export class AmenityBO {
  constructor(params: IAmenityBO) {
    this.createBy = params.createBy;
    this.code = params.code;
    this.isDeleted = params.isDeleted;
    this.updateBy = params.updateBy;
    this.name = params.name;
    this.id = params.id;
    this.oldRoomAmenityId = params.oldRoomAmenityId;
    this.type = params.type;
    this.group = params.group;
  }

  createBy?: string;
  code?: string;
  isDeleted?: number;
  updateBy?: string;
  name?: string;
  id?: number;
  oldRoomAmenityId?: number;
  type?: string;
  group?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.amenity.AmenityBO',
      $: {
        createBy: java.String(this.createBy),
        code: java.String(this.code),
        isDeleted: java.Integer(this.isDeleted),
        updateBy: java.String(this.updateBy),
        name: java.String(this.name),
        id: java.Integer(this.id),
        oldRoomAmenityId: java.Integer(this.oldRoomAmenityId),
        type: java.String(this.type),
        group: java.String(this.group),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
