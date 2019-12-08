import { ChildItemDto } from './ChildItemDto';
import java from 'js-to-java';

export interface IItemOptionValueDto {
  taskItemValueId?: string;
  optionResult?: string;
  childItemFrontIds?: string;
  id?: string;
  sort?: number;
  childItems?: Array<ChildItemDto>;
  itemOptionId?: string;
  option?: string;
}

export class ItemOptionValueDto {
  constructor(params: IItemOptionValueDto) {
    this.taskItemValueId = params.taskItemValueId;
    this.optionResult = params.optionResult;
    this.childItemFrontIds = params.childItemFrontIds;
    this.id = params.id;
    this.sort = params.sort;
    this.childItems = params.childItems;
    this.itemOptionId = params.itemOptionId;
    this.option = params.option;
  }

  taskItemValueId?: string;
  optionResult?: string;
  childItemFrontIds?: string;
  id?: string;
  sort?: number;
  childItems?: Array<ChildItemDto>;
  itemOptionId?: string;
  option?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.ItemOptionValueDto',
      $: {
        taskItemValueId: java.String(this.taskItemValueId),
        optionResult: java.String(this.optionResult),
        childItemFrontIds: java.String(this.childItemFrontIds),
        id: java.String(this.id),
        sort: java.Integer(this.sort),
        childItems: this.childItems
          ? java.List(
              (this.childItems || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        itemOptionId: java.String(this.itemOptionId),
        option: java.String(this.option),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
