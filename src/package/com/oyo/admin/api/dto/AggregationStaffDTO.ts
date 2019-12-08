import java from 'js-to-java';

export interface IAggregationStaffDTO {
  superName?: string;
  staffNo?: string;
  corporationId?: number;
  city?: string;
  staffEmail?: string;
  departmentId?: number;
  available?: number;
  userId?: number;
  positionName?: string;
  valid?: number;
  superNo?: string;
  positionId?: number;
  superPositionNo?: number;
  name?: string;
  staffPhone?: number;
  id?: number;
  superPosition?: string;
}

export class AggregationStaffDTO {
  constructor(params: IAggregationStaffDTO) {
    this.superName = params.superName;
    this.staffNo = params.staffNo;
    this.corporationId = params.corporationId;
    this.city = params.city;
    this.staffEmail = params.staffEmail;
    this.departmentId = params.departmentId;
    this.available = params.available;
    this.userId = params.userId;
    this.positionName = params.positionName;
    this.valid = params.valid;
    this.superNo = params.superNo;
    this.positionId = params.positionId;
    this.superPositionNo = params.superPositionNo;
    this.name = params.name;
    this.staffPhone = params.staffPhone;
    this.id = params.id;
    this.superPosition = params.superPosition;
  }

  superName?: string;
  staffNo?: string;
  corporationId?: number;
  city?: string;
  staffEmail?: string;
  departmentId?: number;
  available?: number;
  userId?: number;
  positionName?: string;
  valid?: number;
  superNo?: string;
  positionId?: number;
  superPositionNo?: number;
  name?: string;
  staffPhone?: number;
  id?: number;
  superPosition?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.dto.AggregationStaffDTO',
      $: {
        superName: java.String(this.superName),
        staffNo: java.String(this.staffNo),
        corporationId: java.Long(this.corporationId),
        city: java.String(this.city),
        staffEmail: java.String(this.staffEmail),
        departmentId: java.Long(this.departmentId),
        available: java.Integer(this.available),
        userId: java.Long(this.userId),
        positionName: java.String(this.positionName),
        valid: java.Integer(this.valid),
        superNo: java.String(this.superNo),
        positionId: java.Long(this.positionId),
        superPositionNo: java.Long(this.superPositionNo),
        name: java.String(this.name),
        staffPhone: java.Long(this.staffPhone),
        id: java.Long(this.id),
        superPosition: java.String(this.superPosition),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
