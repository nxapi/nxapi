import { ItemOptionValueDto } from './ItemOptionValueDto';
import java from 'js-to-java';

export interface ITaskInfoItemVo {
  infoItemType?: number;
  workTaskId?: string;
  taskItemId?: string;
  updateTime?: Date;
  hotelId?: string;
  sort?: number;
  isShow?: boolean;
  infoComment?: string;
  coverUrl?: string;
  optionType?: string;
  itemFrontId?: string;
  accountId?: number;
  photoUrl?: string;
  isDeleted?: boolean;
  videoUrl?: string;
  createTime?: Date;
  infoItem?: string;
  options?: Array<ItemOptionValueDto>;
  infoContent?: string;
  id?: string;
  status?: number;
}

export class TaskInfoItemVo {
  constructor(params: ITaskInfoItemVo) {
    this.infoItemType = params.infoItemType;
    this.workTaskId = params.workTaskId;
    this.taskItemId = params.taskItemId;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.sort = params.sort;
    this.isShow = params.isShow;
    this.infoComment = params.infoComment;
    this.coverUrl = params.coverUrl;
    this.optionType = params.optionType;
    this.itemFrontId = params.itemFrontId;
    this.accountId = params.accountId;
    this.photoUrl = params.photoUrl;
    this.isDeleted = params.isDeleted;
    this.videoUrl = params.videoUrl;
    this.createTime = params.createTime;
    this.infoItem = params.infoItem;
    this.options = params.options;
    this.infoContent = params.infoContent;
    this.id = params.id;
    this.status = params.status;
  }

  infoItemType?: number;
  workTaskId?: string;
  taskItemId?: string;
  updateTime?: Date;
  hotelId?: string;
  sort?: number;
  isShow?: boolean;
  infoComment?: string;
  coverUrl?: string;
  optionType?: string;
  itemFrontId?: string;
  accountId?: number;
  photoUrl?: string;
  isDeleted?: boolean;
  videoUrl?: string;
  createTime?: Date;
  infoItem?: string;
  options?: Array<ItemOptionValueDto>;
  infoContent?: string;
  id?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.TaskInfoItemVo',
      $: {
        infoItemType: java.Integer(this.infoItemType),
        workTaskId: java.String(this.workTaskId),
        taskItemId: java.String(this.taskItemId),
        updateTime: this.updateTime,
        hotelId: java.String(this.hotelId),
        sort: java.Integer(this.sort),
        isShow: java.Boolean(this.isShow),
        infoComment: java.String(this.infoComment),
        coverUrl: java.String(this.coverUrl),
        optionType: java.String(this.optionType),
        itemFrontId: java.String(this.itemFrontId),
        accountId: java.Integer(this.accountId),
        photoUrl: java.String(this.photoUrl),
        isDeleted: java.Boolean(this.isDeleted),
        videoUrl: java.String(this.videoUrl),
        createTime: this.createTime,
        infoItem: java.String(this.infoItem),
        options: this.options
          ? java.List(
              (this.options || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        infoContent: java.String(this.infoContent),
        id: java.String(this.id),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
