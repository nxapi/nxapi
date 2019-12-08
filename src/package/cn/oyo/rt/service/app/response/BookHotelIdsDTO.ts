import java from 'js-to-java';

export interface IBookHotelIdsDTO {
  hotelIds?: Array<number>;
  memberId?: string;
}

export class BookHotelIdsDTO {
  constructor(params: IBookHotelIdsDTO) {
    this.hotelIds = params.hotelIds;
    this.memberId = params.memberId;
  }

  hotelIds?: Array<number>;
  memberId?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.app.response.BookHotelIdsDTO',
      $: {
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        memberId: java.String(this.memberId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
