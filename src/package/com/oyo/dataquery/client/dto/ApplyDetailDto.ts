import { ApplyItemAmountDto } from './ApplyItemAmountDto';
import java from 'js-to-java';

export interface IApplyDetailDto {
  districtCode?: string;
  districtName?: string;
  cityName?: string;
  contactName?: string;
  provinceCode?: string;
  cityCode?: string;
  hotelAddress?: string;
  itemList?: Array<ApplyItemAmountDto>;
  hotelId?: number;
  provinceName?: string;
  hotelName?: string;
  contactTell?: string;
}

export class ApplyDetailDto {
  constructor(params: IApplyDetailDto) {
    this.districtCode = params.districtCode;
    this.districtName = params.districtName;
    this.cityName = params.cityName;
    this.contactName = params.contactName;
    this.provinceCode = params.provinceCode;
    this.cityCode = params.cityCode;
    this.hotelAddress = params.hotelAddress;
    this.itemList = params.itemList;
    this.hotelId = params.hotelId;
    this.provinceName = params.provinceName;
    this.hotelName = params.hotelName;
    this.contactTell = params.contactTell;
  }

  districtCode?: string;
  districtName?: string;
  cityName?: string;
  contactName?: string;
  provinceCode?: string;
  cityCode?: string;
  hotelAddress?: string;
  itemList?: Array<ApplyItemAmountDto>;
  hotelId?: number;
  provinceName?: string;
  hotelName?: string;
  contactTell?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.ApplyDetailDto',
      $: {
        districtCode: java.String(this.districtCode),
        districtName: java.String(this.districtName),
        cityName: java.String(this.cityName),
        contactName: java.String(this.contactName),
        provinceCode: java.String(this.provinceCode),
        cityCode: java.String(this.cityCode),
        hotelAddress: java.String(this.hotelAddress),
        itemList: this.itemList
          ? java.List(
              (this.itemList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        provinceName: java.String(this.provinceName),
        hotelName: java.String(this.hotelName),
        contactTell: java.String(this.contactTell),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
