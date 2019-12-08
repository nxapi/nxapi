import java from 'js-to-java';

export interface IGetListRateByOneDayRequest {
  roomTypeIdList?: Array<number>;
  rateDate?: Date;
  hotelId?: number;
}

export class GetListRateByOneDayRequest {
  constructor(params: IGetListRateByOneDayRequest) {
    this.roomTypeIdList = params.roomTypeIdList;
    this.rateDate = params.rateDate;
    this.hotelId = params.hotelId;
  }

  roomTypeIdList?: Array<number>;
  rateDate?: Date;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.GetListRateByOneDayRequest',
      $: {
        roomTypeIdList: this.roomTypeIdList
          ? java.List(
              (this.roomTypeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        rateDate: this.rateDate,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
