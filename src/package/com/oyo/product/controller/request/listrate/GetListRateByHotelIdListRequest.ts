import java from 'js-to-java';

export interface IGetListRateByHotelIdListRequest {
  endDate?: Date;
  hotelIdList?: Array<number>;
  startDate?: Date;
}

export class GetListRateByHotelIdListRequest {
  constructor(params: IGetListRateByHotelIdListRequest) {
    this.endDate = params.endDate;
    this.hotelIdList = params.hotelIdList;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  hotelIdList?: Array<number>;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.GetListRateByHotelIdListRequest',
      $: {
        endDate: this.endDate,
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
