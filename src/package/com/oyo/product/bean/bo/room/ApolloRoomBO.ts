import { ApolloToiletBO } from './ApolloToiletBO';
import { ApolloBedInfoBO } from './../bed/ApolloBedInfoBO';
import java from 'js-to-java';

export interface IApolloRoomBO {
  roomNo?: string;
  size?: string;
  toiletList?: Array<ApolloToiletBO>;
  floor?: string;
  amenityList?: Array<number>;
  bedInfoList?: Array<ApolloBedInfoBO>;
  status?: number;
}

export class ApolloRoomBO {
  constructor(params: IApolloRoomBO) {
    this.roomNo = params.roomNo;
    this.size = params.size;
    this.toiletList = params.toiletList;
    this.floor = params.floor;
    this.amenityList = params.amenityList;
    this.bedInfoList = params.bedInfoList;
    this.status = params.status;
  }

  roomNo?: string;
  size?: string;
  toiletList?: Array<ApolloToiletBO>;
  floor?: string;
  amenityList?: Array<number>;
  bedInfoList?: Array<ApolloBedInfoBO>;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.room.ApolloRoomBO',
      $: {
        roomNo: java.String(this.roomNo),
        size: java.String(this.size),
        toiletList: this.toiletList
          ? java.List(
              (this.toiletList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        floor: java.String(this.floor),
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        bedInfoList: this.bedInfoList
          ? java.List(
              (this.bedInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
