import { BedInfoDto } from './BedInfoDto';
import java from 'js-to-java';

export interface IRoomInfoDto {
  roomTypeCode?: string;
  personAllowed?: number;
  extraBedAllowed?: number;
  roomTypeName?: string;
  extendAttr?: string;
  floor?: string;
  roomTypeId?: string;
  space?: string;
  windowType?: number;
  washroom?: number;
  bedInfoList?: Array<BedInfoDto>;
}

export class RoomInfoDto {
  constructor(params: IRoomInfoDto) {
    this.roomTypeCode = params.roomTypeCode;
    this.personAllowed = params.personAllowed;
    this.extraBedAllowed = params.extraBedAllowed;
    this.roomTypeName = params.roomTypeName;
    this.extendAttr = params.extendAttr;
    this.floor = params.floor;
    this.roomTypeId = params.roomTypeId;
    this.space = params.space;
    this.windowType = params.windowType;
    this.washroom = params.washroom;
    this.bedInfoList = params.bedInfoList;
  }

  roomTypeCode?: string;
  personAllowed?: number;
  extraBedAllowed?: number;
  roomTypeName?: string;
  extendAttr?: string;
  floor?: string;
  roomTypeId?: string;
  space?: string;
  windowType?: number;
  washroom?: number;
  bedInfoList?: Array<BedInfoDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.RoomInfoDto',
      $: {
        roomTypeCode: java.String(this.roomTypeCode),
        personAllowed: java.Integer(this.personAllowed),
        extraBedAllowed: java.Integer(this.extraBedAllowed),
        roomTypeName: java.String(this.roomTypeName),
        extendAttr: java.String(this.extendAttr),
        floor: java.String(this.floor),
        roomTypeId: java.String(this.roomTypeId),
        space: java.String(this.space),
        windowType: java.Integer(this.windowType),
        washroom: java.Integer(this.washroom),
        bedInfoList: this.bedInfoList
          ? java.List(
              (this.bedInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
