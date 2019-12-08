import { FilterMapDTO } from './FilterMapDTO';
import java from 'js-to-java';

export interface IGetHotelInventoryRequestV2 {
  endDate?: Date;
  hotelIdList?: Array<number>;
  filterMapList?: Array<FilterMapDTO>;
  startDate?: Date;
}

export class GetHotelInventoryRequestV2 {
  constructor(params: IGetHotelInventoryRequestV2) {
    this.endDate = params.endDate;
    this.hotelIdList = params.hotelIdList;
    this.filterMapList = params.filterMapList;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  hotelIdList?: Array<number>;
  filterMapList?: Array<FilterMapDTO>;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.GetHotelInventoryRequestV2',
      $: {
        endDate: this.endDate,
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        filterMapList: this.filterMapList
          ? java.List(
              (this.filterMapList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
