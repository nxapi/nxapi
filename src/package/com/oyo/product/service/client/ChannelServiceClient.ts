import { BaseResponse } from './../../../common/response/BaseResponse';
import { ServiceAmountBo } from './../../bean/bo/channel/ServiceAmountBo';
import { QueryChannelRequest } from './../../controller/request/channel/QueryChannelRequest';
import { HotelRateCodeChannelBO } from './../../bean/bo/channel/HotelRateCodeChannelBO';
import { ChannelInfoResponseVO } from './../../controller/vo/channel/ChannelInfoResponseVO';
import { HotelChannelCommissionBO } from './../../bean/bo/channel/HotelChannelCommissionBO';
import { ChannelBO } from './../../bean/bo/channel/ChannelBO';
import { ChannelRateCodeBO } from './../../bean/bo/channel/ChannelRateCodeBO';
import { ChannelNewOldMappingRequest } from './../../controller/request/channel/ChannelNewOldMappingRequest';
import { ChannelNewOldMappingVO } from './../../controller/vo/channel/ChannelNewOldMappingVO';
import { UnbindChannelRequest } from './../../controller/request/channel/UnbindChannelRequest';
import { ResponseCode } from './../../../common/enums/ResponseCode';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { ChannelCommitRequest } from './../../controller/request/channel/ChannelCommitRequest';
import { ChannelCommissionSetRequest } from './../../controller/request/channel/ChannelCommissionSetRequest';
import { argumentMap, JavaLong, JavaList, JavaInteger, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IChannelServiceClient {
  getServiceAmountParams(): TDubboCallResult<BaseResponse<ServiceAmountBo>>;
  hotelList(Long0: JavaLong): TDubboCallResult<BaseResponse<Array<number>>>;
  query(
    QueryChannelRequest0: QueryChannelRequest,
  ): TDubboCallResult<BaseResponse<HotelRateCodeChannelBO>>;
  getAllValidatedChannels(): TDubboCallResult<
    BaseResponse<Array<ChannelInfoResponseVO>>
  >;
  validChannelList(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<number>>>;
  hotelValidChannel(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelChannelCommissionBO>>>;
  channelsInfo(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<ChannelBO>>>;
  channelList(Long0: JavaLong): TDubboCallResult<BaseResponse<Array<number>>>;
  channelRateCodeInfo(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<ChannelRateCodeBO>>;
  channelNewOldMapping(
    ChannelNewOldMappingRequest0: ChannelNewOldMappingRequest,
  ): TDubboCallResult<BaseResponse<ChannelNewOldMappingVO>>;
  unbindingChannel(
    UnbindChannelRequest0: UnbindChannelRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  channelList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
    Integer3: JavaInteger,
  ): TDubboCallResult<BaseResponse<PagedResponse<ChannelBO>>>;
  crsChannelList(): TDubboCallResult<BaseResponse<Array<ChannelBO>>>;
  hotelCommission(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelChannelCommissionBO>>>;
  allChannel(): TDubboCallResult<BaseResponse<Array<ChannelBO>>>;
  getHotelChannelStatus(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelChannelCommissionBO>>;
  commitChannel(
    ChannelCommitRequest0: ChannelCommitRequest,
  ): TDubboCallResult<BaseResponse<number>>;
  setCommission(
    ChannelCommissionSetRequest0: ChannelCommissionSetRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  hotelCommission(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelChannelCommissionBO>>>;
}

export const ChannelServiceClientWrapper = {
  getServiceAmountParams: argumentMap,
  hotelList: argumentMap,
  query: argumentMap,
  getAllValidatedChannels: argumentMap,
  validChannelList: argumentMap,
  hotelValidChannel: argumentMap,
  channelsInfo: argumentMap,
  channelList: argumentMap,
  channelRateCodeInfo: argumentMap,
  channelNewOldMapping: argumentMap,
  unbindingChannel: argumentMap,
  crsChannelList: argumentMap,
  hotelCommission: argumentMap,
  allChannel: argumentMap,
  getHotelChannelStatus: argumentMap,
  commitChannel: argumentMap,
  setCommission: argumentMap,
};

export function ChannelServiceClient(dubbo: Dubbo): IChannelServiceClient {
  return dubbo.proxyService<IChannelServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.ChannelServiceClient',
    methods: ChannelServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
