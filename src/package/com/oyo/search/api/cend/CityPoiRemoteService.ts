import { CityPoiRequest } from './request/CityPoiRequest';
import { Response } from './../../common/bean/Response';
import { CityPoiResp } from './response/CityPoiResp';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ICityPoiRemoteService {
  cityPoi(
    CityPoiRequest0: CityPoiRequest,
  ): TDubboCallResult<Response<CityPoiResp>>;
}

export const CityPoiRemoteServiceWrapper = {cityPoi: argumentMap};

export function CityPoiRemoteService(dubbo: Dubbo): ICityPoiRemoteService {
  return dubbo.proxyService<ICityPoiRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.CityPoiRemoteService',
    methods: CityPoiRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
