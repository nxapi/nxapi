import java from 'js-to-java';

export interface IFlashHotelBillDto {
  batchNo?: string;
  hotelId?: number;
  hotelIdList?: Array<number>;
}

export class FlashHotelBillDto {
  constructor(params: IFlashHotelBillDto) {
    this.batchNo = params.batchNo;
    this.hotelId = params.hotelId;
    this.hotelIdList = params.hotelIdList;
  }

  batchNo?: string;
  hotelId?: number;
  hotelIdList?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.FlashHotelBillDto',
      $: {
        batchNo: java.String(this.batchNo),
        hotelId: java.Long(this.hotelId),
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
