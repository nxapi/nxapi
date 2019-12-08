import { HotelImageCategoryEnum } from './../../enums/HotelImageCategoryEnum';
import { BizTagEnum } from './../../enums/BizTagEnum';
import java from 'js-to-java';

export interface IHotelQueryRequest {
  queryAction?: string;
  merchantCode?: string;
  bizType?: number;
  phone?: string;
  hotelTypes?: Array<number>;
  pageSize?: number;
  categoryEnumList?: Array<HotelImageCategoryEnum>;
  landline?: string;
  bizTag?: BizTagEnum;
  pageNum?: number;
  status?: number;
}

export class HotelQueryRequest {
  constructor(params: IHotelQueryRequest) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.bizType = params.bizType;
    this.phone = params.phone;
    this.hotelTypes = params.hotelTypes;
    this.pageSize = params.pageSize;
    this.categoryEnumList = params.categoryEnumList;
    this.landline = params.landline;
    this.bizTag = params.bizTag;
    this.pageNum = params.pageNum;
    this.status = params.status;
  }

  queryAction?: string;
  merchantCode?: string;
  bizType?: number;
  phone?: string;
  hotelTypes?: Array<number>;
  pageSize?: number;
  categoryEnumList?: Array<HotelImageCategoryEnum>;
  landline?: string;
  bizTag?: BizTagEnum;
  pageNum?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.service.request.HotelQueryRequest',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        bizType: java.Integer(this.bizType),
        phone: java.String(this.phone),
        hotelTypes: this.hotelTypes
          ? java.List(
              (this.hotelTypes || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        pageSize: java.Integer(this.pageSize),
        categoryEnumList: this.categoryEnumList
          ? java.List(
              (this.categoryEnumList || []).map((paramItem: any) => {
                return java['enum'](
                  'com.oyo.product.enums.HotelImageCategoryEnum',
                  HotelImageCategoryEnum[paramItem],
                );
              }),
            )
          : null,
        landline: java.String(this.landline),
        bizTag: java['enum'](
          'com.oyo.product.enums.BizTagEnum',
          BizTagEnum[this.bizTag],
        ),
        pageNum: java.Integer(this.pageNum),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
