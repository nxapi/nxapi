import { TaskInfoItemVo } from './TaskInfoItemVo';
import { TaskTryHotelsVO } from './TaskTryHotelsVO';
import { ApprovalFlowDto } from './approval/ApprovalFlowDto';
import { TaskTriggerVO } from './TaskTriggerVO';
import java from 'js-to-java';

export interface IFrontWorkTaskDetailVo {
  approveStatus?: number;
  infoItems?: Array<TaskInfoItemVo>;
  hotelList?: Array<TaskTryHotelsVO>;
  taskContentType?: string;
  taskHotelType?: number;
  canModify?: string;
  hasApprove?: boolean;
  remindContent?: string;
  taskType?: number;
  ownerName?: string;
  reasonId?: string;
  approvalList?: Array<ApprovalFlowDto>;
  id?: string;
  canFeedBack?: string;
  extUrl?: string;
  reasonContent?: string;
  trigger?: TaskTriggerVO;
  hotelStatus?: string;
  infoLatitude?: number;
  hotelName?: string;
  taskStartTime?: Date;
  taskDesc?: string;
  isCheck?: number;
  hotelPersonTaskInstanceId?: string;
  reasonDes?: string;
  taskCreateTime?: Date;
  taskPeriod?: number;
  taskName?: string;
  completeInStore?: number;
  needApproval?: number;
  taskEndTime?: Date;
  status?: number;
}

export class FrontWorkTaskDetailVo {
  constructor(params: IFrontWorkTaskDetailVo) {
    this.approveStatus = params.approveStatus;
    this.infoItems = params.infoItems;
    this.hotelList = params.hotelList;
    this.taskContentType = params.taskContentType;
    this.taskHotelType = params.taskHotelType;
    this.canModify = params.canModify;
    this.hasApprove = params.hasApprove;
    this.remindContent = params.remindContent;
    this.taskType = params.taskType;
    this.ownerName = params.ownerName;
    this.reasonId = params.reasonId;
    this.approvalList = params.approvalList;
    this.id = params.id;
    this.canFeedBack = params.canFeedBack;
    this.extUrl = params.extUrl;
    this.reasonContent = params.reasonContent;
    this.trigger = params.trigger;
    this.hotelStatus = params.hotelStatus;
    this.infoLatitude = params.infoLatitude;
    this.hotelName = params.hotelName;
    this.taskStartTime = params.taskStartTime;
    this.taskDesc = params.taskDesc;
    this.isCheck = params.isCheck;
    this.hotelPersonTaskInstanceId = params.hotelPersonTaskInstanceId;
    this.reasonDes = params.reasonDes;
    this.taskCreateTime = params.taskCreateTime;
    this.taskPeriod = params.taskPeriod;
    this.taskName = params.taskName;
    this.completeInStore = params.completeInStore;
    this.needApproval = params.needApproval;
    this.taskEndTime = params.taskEndTime;
    this.status = params.status;
  }

  approveStatus?: number;
  infoItems?: Array<TaskInfoItemVo>;
  hotelList?: Array<TaskTryHotelsVO>;
  taskContentType?: string;
  taskHotelType?: number;
  canModify?: string;
  hasApprove?: boolean;
  remindContent?: string;
  taskType?: number;
  ownerName?: string;
  reasonId?: string;
  approvalList?: Array<ApprovalFlowDto>;
  id?: string;
  canFeedBack?: string;
  extUrl?: string;
  reasonContent?: string;
  trigger?: TaskTriggerVO;
  hotelStatus?: string;
  infoLatitude?: number;
  hotelName?: string;
  taskStartTime?: Date;
  taskDesc?: string;
  isCheck?: number;
  hotelPersonTaskInstanceId?: string;
  reasonDes?: string;
  taskCreateTime?: Date;
  taskPeriod?: number;
  taskName?: string;
  completeInStore?: number;
  needApproval?: number;
  taskEndTime?: Date;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.FrontWorkTaskDetailVo',
      $: {
        approveStatus: java.Integer(this.approveStatus),
        infoItems: this.infoItems
          ? java.List(
              (this.infoItems || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelList: this.hotelList
          ? java.List(
              (this.hotelList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        taskContentType: java.String(this.taskContentType),
        taskHotelType: java.Integer(this.taskHotelType),
        canModify: java.String(this.canModify),
        hasApprove: java.Boolean(this.hasApprove),
        remindContent: java.String(this.remindContent),
        taskType: java.Integer(this.taskType),
        ownerName: java.String(this.ownerName),
        reasonId: java.String(this.reasonId),
        approvalList: this.approvalList
          ? java.List(
              (this.approvalList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        id: java.String(this.id),
        canFeedBack: java.String(this.canFeedBack),
        extUrl: java.String(this.extUrl),
        reasonContent: java.String(this.reasonContent),
        trigger: this.trigger ? this.trigger.__fields2java() : null,
        hotelStatus: java.String(this.hotelStatus),
        infoLatitude: java.Integer(this.infoLatitude),
        hotelName: java.String(this.hotelName),
        taskStartTime: this.taskStartTime,
        taskDesc: java.String(this.taskDesc),
        isCheck: java.Integer(this.isCheck),
        hotelPersonTaskInstanceId: java.String(this.hotelPersonTaskInstanceId),
        reasonDes: java.String(this.reasonDes),
        taskCreateTime: this.taskCreateTime,
        taskPeriod: java.Integer(this.taskPeriod),
        taskName: java.String(this.taskName),
        completeInStore: java.Integer(this.completeInStore),
        needApproval: java.Integer(this.needApproval),
        taskEndTime: this.taskEndTime,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
