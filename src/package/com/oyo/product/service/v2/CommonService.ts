import { SearchHotelRequest } from './../request/SearchHotelRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { HotelVO } from './../../controller/vo/hotel/HotelVO';
import { RegionBO } from './../../bean/bo/common/RegionBO';
import { ZoneBO } from './../../bean/bo/common/ZoneBO';
import { argumentMap, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ICommonService {
  searchHotel(
    SearchHotelRequest0: SearchHotelRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelVO>>>;
  areaSearch(): TDubboCallResult<BaseResponse<Array<RegionBO>>>;
  listZoneByCooperationType(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<Array<ZoneBO>>>;
}

export const CommonServiceWrapper = {
  searchHotel: argumentMap,
  areaSearch: argumentMap,
  listZoneByCooperationType: argumentMap,
};

export function CommonService(dubbo: Dubbo): ICommonService {
  return dubbo.proxyService<ICommonService>({
    dubboInterface: 'com.oyo.product.service.v2.CommonService',
    methods: CommonServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
