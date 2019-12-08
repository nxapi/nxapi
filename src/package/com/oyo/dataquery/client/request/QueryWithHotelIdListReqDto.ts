import java from 'js-to-java';

export interface IQueryWithHotelIdListReqDto {
  fromDate?: string;
  toDate?: string;
  hotelIdList?: Array<string>;
}

export class QueryWithHotelIdListReqDto {
  constructor(params: IQueryWithHotelIdListReqDto) {
    this.fromDate = params.fromDate;
    this.toDate = params.toDate;
    this.hotelIdList = params.hotelIdList;
  }

  fromDate?: string;
  toDate?: string;
  hotelIdList?: Array<string>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.QueryWithHotelIdListReqDto',
      $: {
        fromDate: java.String(this.fromDate),
        toDate: java.String(this.toDate),
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
