import java from 'js-to-java';

export interface ISaleBlackRoomChangeRoomTypeRequestDto {
  hotelIdList?: Array<number>;
}

export class SaleBlackRoomChangeRoomTypeRequestDto {
  constructor(params: ISaleBlackRoomChangeRoomTypeRequestDto) {
    this.hotelIdList = params.hotelIdList;
  }

  hotelIdList?: Array<number>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.SaleBlackRoomChangeRoomTypeRequestDto',
      $: {
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
