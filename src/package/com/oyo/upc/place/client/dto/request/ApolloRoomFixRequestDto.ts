import java from 'js-to-java';

export interface IApolloRoomFixRequestDto {
  apolloHotelIdList?: Array<number>;
  operateType?: string;
}

export class ApolloRoomFixRequestDto {
  constructor(params: IApolloRoomFixRequestDto) {
    this.apolloHotelIdList = params.apolloHotelIdList;
    this.operateType = params.operateType;
  }

  apolloHotelIdList?: Array<number>;
  operateType?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ApolloRoomFixRequestDto',
      $: {
        apolloHotelIdList: this.apolloHotelIdList
          ? java.List(
              (this.apolloHotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        operateType: java.String(this.operateType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
