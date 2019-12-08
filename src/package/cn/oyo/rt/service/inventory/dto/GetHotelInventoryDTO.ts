import { HotelInventoryDTO } from './HotelInventoryDTO';
import java from 'js-to-java';

export interface IGetHotelInventoryDTO {
  hotelInventoryList?: Array<HotelInventoryDTO>;
}

export class GetHotelInventoryDTO {
  constructor(params: IGetHotelInventoryDTO) {
    this.hotelInventoryList = params.hotelInventoryList;
  }

  hotelInventoryList?: Array<HotelInventoryDTO>;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.GetHotelInventoryDTO',
      $: {
        hotelInventoryList: this.hotelInventoryList
          ? java.List(
              (this.hotelInventoryList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
