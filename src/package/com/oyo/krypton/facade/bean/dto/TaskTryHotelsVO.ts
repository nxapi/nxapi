import java from 'js-to-java';

export interface ITaskTryHotelsVO {
  isDeleted?: boolean;
  cityName?: string;
  workTaskId?: string;
  createTime?: Date;
  name?: string;
  updateTime?: Date;
  id?: string;
  hotelId?: number;
  hotelCrsId?: string;
}

export class TaskTryHotelsVO {
  constructor(params: ITaskTryHotelsVO) {
    this.isDeleted = params.isDeleted;
    this.cityName = params.cityName;
    this.workTaskId = params.workTaskId;
    this.createTime = params.createTime;
    this.name = params.name;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.hotelId = params.hotelId;
    this.hotelCrsId = params.hotelCrsId;
  }

  isDeleted?: boolean;
  cityName?: string;
  workTaskId?: string;
  createTime?: Date;
  name?: string;
  updateTime?: Date;
  id?: string;
  hotelId?: number;
  hotelCrsId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.TaskTryHotelsVO',
      $: {
        isDeleted: java.Boolean(this.isDeleted),
        cityName: java.String(this.cityName),
        workTaskId: java.String(this.workTaskId),
        createTime: this.createTime,
        name: java.String(this.name),
        updateTime: this.updateTime,
        id: java.String(this.id),
        hotelId: java.Long(this.hotelId),
        hotelCrsId: java.String(this.hotelCrsId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
