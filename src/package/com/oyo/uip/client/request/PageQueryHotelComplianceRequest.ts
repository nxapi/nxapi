import java from 'js-to-java';

export interface IPageQueryHotelComplianceRequest {
  serialVersionUID?: number;
  month?: Date;
  hotelIds?: Array<number>;
  pageNo?: number;
  pageSize?: number;
}

export class PageQueryHotelComplianceRequest {
  constructor(params: IPageQueryHotelComplianceRequest) {
    this.serialVersionUID = params.serialVersionUID;
    this.month = params.month;
    this.hotelIds = params.hotelIds;
    this.pageNo = params.pageNo;
    this.pageSize = params.pageSize;
  }

  serialVersionUID?: number;
  month?: Date;
  hotelIds?: Array<number>;
  pageNo?: number;
  pageSize?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.request.PageQueryHotelComplianceRequest',
      $: {
        serialVersionUID: java.Long(this.serialVersionUID),
        month: this.month,
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        pageNo: java.Integer(this.pageNo),
        pageSize: java.Integer(this.pageSize),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
