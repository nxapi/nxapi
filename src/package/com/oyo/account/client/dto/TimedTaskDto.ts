import java from 'js-to-java';

export interface ITimedTaskDto {
  reqMethod?: number;
  statusStr?: string;
  isReExecute?: number;
  taskDateEnd?: string;
  pageSize?: number;
  remark?: string;
  updateTime?: string;
  params?: string;
  pageNum?: number;
  createBy?: string;
  taskDate?: string;
  taskUrl?: string;
  createTime?: string;
  updateBy?: string;
  taskName?: string;
  id?: number;
  status?: number;
  taskDateStart?: string;
}

export class TimedTaskDto {
  constructor(params: ITimedTaskDto) {
    this.reqMethod = params.reqMethod;
    this.statusStr = params.statusStr;
    this.isReExecute = params.isReExecute;
    this.taskDateEnd = params.taskDateEnd;
    this.pageSize = params.pageSize;
    this.remark = params.remark;
    this.updateTime = params.updateTime;
    this.params = params.params;
    this.pageNum = params.pageNum;
    this.createBy = params.createBy;
    this.taskDate = params.taskDate;
    this.taskUrl = params.taskUrl;
    this.createTime = params.createTime;
    this.updateBy = params.updateBy;
    this.taskName = params.taskName;
    this.id = params.id;
    this.status = params.status;
    this.taskDateStart = params.taskDateStart;
  }

  reqMethod?: number;
  statusStr?: string;
  isReExecute?: number;
  taskDateEnd?: string;
  pageSize?: number;
  remark?: string;
  updateTime?: string;
  params?: string;
  pageNum?: number;
  createBy?: string;
  taskDate?: string;
  taskUrl?: string;
  createTime?: string;
  updateBy?: string;
  taskName?: string;
  id?: number;
  status?: number;
  taskDateStart?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.TimedTaskDto',
      $: {
        reqMethod: java.Integer(this.reqMethod),
        statusStr: java.String(this.statusStr),
        isReExecute: java.Integer(this.isReExecute),
        taskDateEnd: java.String(this.taskDateEnd),
        pageSize: java.Integer(this.pageSize),
        remark: java.String(this.remark),
        updateTime: java.String(this.updateTime),
        params: java.String(this.params),
        pageNum: java.Integer(this.pageNum),
        createBy: java.String(this.createBy),
        taskDate: java.String(this.taskDate),
        taskUrl: java.String(this.taskUrl),
        createTime: java.String(this.createTime),
        updateBy: java.String(this.updateBy),
        taskName: java.String(this.taskName),
        id: java.Integer(this.id),
        status: java.Integer(this.status),
        taskDateStart: java.String(this.taskDateStart),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
