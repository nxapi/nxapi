import { RecommendHotelsRequest } from './request/RecommendHotelsRequest';
import { Response } from './../../common/bean/Response';
import { RecommendHotelsResp } from './response/RecommendHotelsResp';
import { NearbyHotelRequest } from './request/NearbyHotelRequest';
import { NearbyHotelResp } from './response/NearbyHotelResp';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IRecommendHotelsRemoteService {
  recommendHotels(
    RecommendHotelsRequest0: RecommendHotelsRequest,
  ): TDubboCallResult<Response<RecommendHotelsResp>>;
  nearbyHotel(
    NearbyHotelRequest0: NearbyHotelRequest,
  ): TDubboCallResult<Response<NearbyHotelResp>>;
}

export const RecommendHotelsRemoteServiceWrapper = {
  recommendHotels: argumentMap,
  nearbyHotel: argumentMap,
};

export function RecommendHotelsRemoteService(
  dubbo: Dubbo,
): IRecommendHotelsRemoteService {
  return dubbo.proxyService<IRecommendHotelsRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.RecommendHotelsRemoteService',
    methods: RecommendHotelsRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
