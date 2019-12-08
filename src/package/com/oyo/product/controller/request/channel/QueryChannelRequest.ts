import java from 'js-to-java';

export interface IQueryChannelRequest {
  hotelId?: number;
  rateCodeIdList?: Array<number>;
}

export class QueryChannelRequest {
  constructor(params: IQueryChannelRequest) {
    this.hotelId = params.hotelId;
    this.rateCodeIdList = params.rateCodeIdList;
  }

  hotelId?: number;
  rateCodeIdList?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.channel.QueryChannelRequest',
      $: {
        hotelId: java.Long(this.hotelId),
        rateCodeIdList: this.rateCodeIdList
          ? java.List(
              (this.rateCodeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
