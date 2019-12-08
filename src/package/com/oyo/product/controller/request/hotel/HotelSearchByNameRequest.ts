import java from 'js-to-java';

export interface IHotelSearchByNameRequest {
  hotelIds?: Array<number>;
  hotelName?: string;
}

export class HotelSearchByNameRequest {
  constructor(params: IHotelSearchByNameRequest) {
    this.hotelIds = params.hotelIds;
    this.hotelName = params.hotelName;
  }

  hotelIds?: Array<number>;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.HotelSearchByNameRequest',
      $: {
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
