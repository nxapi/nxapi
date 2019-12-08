import java from 'js-to-java';

export interface IDeptDetailDto {
  deptName?: string;
  deptLevel?: number;
  departmentId?: number;
  deptCode?: string;
}

export class DeptDetailDto {
  constructor(params: IDeptDetailDto) {
    this.deptName = params.deptName;
    this.deptLevel = params.deptLevel;
    this.departmentId = params.departmentId;
    this.deptCode = params.deptCode;
  }

  deptName?: string;
  deptLevel?: number;
  departmentId?: number;
  deptCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.DeptDetailDto',
      $: {
        deptName: java.String(this.deptName),
        deptLevel: java.Integer(this.deptLevel),
        departmentId: java.Long(this.departmentId),
        deptCode: java.String(this.deptCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
