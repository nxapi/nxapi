import java from 'js-to-java';

export interface IHotelNumberNightsRequest {
  hotelIds?: Array<number>;
  checkout?: string;
}

export class HotelNumberNightsRequest {
  constructor(params: IHotelNumberNightsRequest) {
    this.hotelIds = params.hotelIds;
    this.checkout = params.checkout;
  }

  hotelIds?: Array<number>;
  checkout?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.app.request.HotelNumberNightsRequest',
      $: {
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        checkout: java.String(this.checkout),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
