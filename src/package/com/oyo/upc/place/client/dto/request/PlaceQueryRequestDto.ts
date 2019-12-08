import { PlaceCountryRegionRequestDto } from './PlaceCountryRegionRequestDto';
import java from 'js-to-java';

export interface IPlaceQueryRequestDto {
  address?: string;
  createTimeEnd?: Date;
  pageSize?: number;
  placeCountryRegion?: PlaceCountryRegionRequestDto;
  createTimeStart?: Date;
  priority?: number;
  pageNum?: number;
  oyoId?: string;
  uniqueCode?: string;
  name?: string;
  startTime?: Date;
  endTime?: Date;
  status?: number;
}

export class PlaceQueryRequestDto {
  constructor(params: IPlaceQueryRequestDto) {
    this.address = params.address;
    this.createTimeEnd = params.createTimeEnd;
    this.pageSize = params.pageSize;
    this.placeCountryRegion = params.placeCountryRegion;
    this.createTimeStart = params.createTimeStart;
    this.priority = params.priority;
    this.pageNum = params.pageNum;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.name = params.name;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.status = params.status;
  }

  address?: string;
  createTimeEnd?: Date;
  pageSize?: number;
  placeCountryRegion?: PlaceCountryRegionRequestDto;
  createTimeStart?: Date;
  priority?: number;
  pageNum?: number;
  oyoId?: string;
  uniqueCode?: string;
  name?: string;
  startTime?: Date;
  endTime?: Date;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceQueryRequestDto',
      $: {
        address: java.String(this.address),
        createTimeEnd: this.createTimeEnd,
        pageSize: java.Integer(this.pageSize),
        placeCountryRegion: this.placeCountryRegion
          ? this.placeCountryRegion.__fields2java()
          : null,
        createTimeStart: this.createTimeStart,
        priority: java.Integer(this.priority),
        pageNum: java.Integer(this.pageNum),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        name: java.String(this.name),
        startTime: this.startTime,
        endTime: this.endTime,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
