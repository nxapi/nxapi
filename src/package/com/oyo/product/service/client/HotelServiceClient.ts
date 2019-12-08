import { HotelSearchByNameRequest } from './../../controller/request/hotel/HotelSearchByNameRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HotelSimpleInfoVO } from './../../controller/vo/hotel/HotelSimpleInfoVO';
import { HotelBO } from './../../bean/bo/hotel/HotelBO';
import { AreaSearchHotelRequest } from './../../controller/request/hotel/AreaSearchHotelRequest';
import { HotelAndChannelByCityIdVO } from './../../controller/vo/hotel/HotelAndChannelByCityIdVO';
import { HotelBaseBO } from './../../bean/bo/hotel/HotelBaseBO';
import { CommissionAndTimeRequest } from './../../controller/request/hotel/CommissionAndTimeRequest';
import { HotelTpiCheckStatusUpdateRequest } from './../../controller/request/hotel/HotelTpiCheckStatusUpdateRequest';
import { ChannelSimpleVO } from './../../controller/vo/channel/ChannelSimpleVO';
import { UpdateHotelStatusRequest } from './../../controller/request/hotel/UpdateHotelStatusRequest';
import { ResponseCode } from './../../../common/enums/ResponseCode';
import { HotelBizVO } from './../../controller/vo/hotel/HotelBizVO';
import { SearchHotelByNameRequest } from './../../controller/request/hotel/SearchHotelByNameRequest';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { HotelRoomInfo } from './../../controller/vo/hotel/HotelRoomInfo';
import { HotelCrsEditVO } from './../../controller/vo/hotel/HotelCrsEditVO';
import { HotelDetailVO } from './../../controller/vo/hotel/HotelDetailVO';
import { HotelReasontructureVO } from './../../controller/vo/hotel/HotelReasontructureVO';
import { HotelBizDateUpdateRequest } from './../../controller/request/hotel/HotelBizDateUpdateRequest';
import { HotelRegionVO } from './../../controller/vo/hotel/HotelRegionVO';
import { HotelDetailRequest } from './../../controller/request/hotel/HotelDetailRequest';
import { HotelByIdListAndNameRequest } from './../../controller/request/hotel/HotelByIdListAndNameRequest';
import { HotelByIdListAndNameVO } from './../../controller/vo/hotel/HotelByIdListAndNameVO';
import { HotelSoldOutOrSuspendBO } from './../../bean/bo/hotel/HotelSoldOutOrSuspendBO';
import { RoomTypeRateCodeRefDetailVO } from './../../controller/vo/hotel/RoomTypeRateCodeRefDetailVO';
import { HotelCrsEditBO } from './../../bean/bo/hotel/HotelCrsEditBO';
import { HotelByTypeAndIdListRequest } from './../../controller/request/hotel/HotelByTypeAndIdListRequest';
import { HotelVO } from './../../controller/vo/hotel/HotelVO';
import { ConditionsSearchFullHotelRequest } from './../../controller/request/hotel/ConditionsSearchFullHotelRequest';
import { HotelInfoRequest } from './../../controller/request/hotel/HotelInfoRequest';
import { HotelInfoVO } from './../../controller/vo/hotel/HotelInfoVO';
import { HotelTagVO } from './../../controller/vo/hotel/HotelTagVO';
import { HotelSoldOutOrSuspendRequest } from './../../controller/request/hotel/HotelSoldOutOrSuspendRequest';
import { TransHotelIdAndUniqueRequest } from './../../controller/request/hotel/TransHotelIdAndUniqueRequest';
import { HotelIdAndUniqueVO } from './../../controller/vo/hotel/HotelIdAndUniqueVO';
import { HotelTypeBrandTypeVO } from './../../controller/vo/hotel/HotelTypeBrandTypeVO';
import { HotelBaseInfoBO } from './../../bean/bo/hotel/HotelBaseInfoBO';
import { HotelRoomTypeChannelRequest } from './../../controller/request/hotel/HotelRoomTypeChannelRequest';
import { RoomTypeRateCodeResVO } from './../../controller/vo/hotel/RoomTypeRateCodeResVO';
import { CurrentPageBean } from './../../common/page/CurrentPageBean';
import { HotelSearchRequest } from './../../controller/request/hotel/HotelSearchRequest';
import { OyoRoomTypeVO } from './../../controller/vo/roomtype/OyoRoomTypeVO';
import { HotelHistoryStatusVO } from './../../controller/vo/hotel/HotelHistoryStatusVO';
import { argumentMap, JavaList, JavaString, JavaLong, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelServiceClient {
  hotelSearchByName(
    HotelSearchByNameRequest0: HotelSearchByNameRequest,
  ): TDubboCallResult<BaseResponse<Array<HotelSimpleInfoVO>>>;
  isChina2(
    List0: JavaList,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<{[name: string]: boolean}>>;
  hotelBaseInfo(Long0: JavaLong): TDubboCallResult<BaseResponse<HotelBO>>;
  getHotelAndChannelByCityId(
    AreaSearchHotelRequest0: AreaSearchHotelRequest,
  ): TDubboCallResult<BaseResponse<Array<HotelAndChannelByCityIdVO>>>;
  findHotelsBaseInfoByIds(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelBaseBO>>>;
  saveCommissionAndTime(
    CommissionAndTimeRequest0: CommissionAndTimeRequest,
  ): TDubboCallResult<BaseResponse>;
  goLiveHotel(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  tpiCheckStatus(
    HotelTpiCheckStatusUpdateRequest0: HotelTpiCheckStatusUpdateRequest,
  ): TDubboCallResult<BaseResponse>;
  liveCity(String0: JavaString): TDubboCallResult<BaseResponse>;
  liveHotelSimpleInfo(): TDubboCallResult<BaseResponse<Array<HotelBO>>>;
  channelList(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<ChannelSimpleVO>>>;
  updateHotelStatusV1(
    UpdateHotelStatusRequest0: UpdateHotelStatusRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  listAllHotels(): TDubboCallResult<BaseResponse<Array<HotelBizVO>>>;
  hotelListByOyoIdList(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelBO>>>;
  searchHotelByName(
    SearchHotelByNameRequest0: SearchHotelByNameRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelRoomInfo>>>;
  crsGetHotelInfo(
    HotelCrsEditVO0: HotelCrsEditVO,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  hotelBaseInfoV1(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelDetailVO>>;
  getReasontructureVO(): TDubboCallResult<
    BaseResponse<Array<HotelReasontructureVO>>
  >;
  updateBizDateAndNightAuditTime(
    HotelBizDateUpdateRequest0: HotelBizDateUpdateRequest,
  ): TDubboCallResult<BaseResponse>;
  getHotelRegion(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelRegionVO>>>;
  hotelDetail(
    HotelDetailRequest0: HotelDetailRequest,
  ): TDubboCallResult<BaseResponse<HotelDetailVO>>;
  getHotelByLikeName(
    HotelByIdListAndNameRequest0: HotelByIdListAndNameRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelByIdListAndNameVO>>>;
  cityIdHotels(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<HotelBO>>>;
  hotelStatusV1(
    Long0: JavaLong,
    Date1: Date,
    Date2: Date,
  ): TDubboCallResult<BaseResponse<HotelSoldOutOrSuspendBO>>;
  roomTypeListWithRateCode(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<RoomTypeRateCodeRefDetailVO>>>;
  crsGetHotelInfo(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelCrsEditBO>>;
  idsHotels(List0: JavaList): TDubboCallResult<BaseResponse<Array<HotelBO>>>;
  getRegion(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelRegionVO>>>;
  getHotelByTypeAndidList(
    HotelByTypeAndIdListRequest0: HotelByTypeAndIdListRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelByIdListAndNameVO>>>;
  channelHotels(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelVO>>>;
  hotelSimpleInfoByHotelId(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelSimpleInfoVO>>;
  conditionsQueryHotel(
    ConditionsSearchFullHotelRequest0: ConditionsSearchFullHotelRequest,
  ): TDubboCallResult<BaseResponse<Array<HotelSimpleInfoVO>>>;
  hotelSimpleInfoByOyoId(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<HotelSimpleInfoVO>>;
  hotelInfoListByOyoIdList(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelBO>>>;
  getHotelAndCityPageInfo(
    HotelInfoRequest0: HotelInfoRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelInfoVO>>>;
  updateHotelStatus(
    UpdateHotelStatusRequest0: UpdateHotelStatusRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  batchUpdateHotelStatus(List0: JavaList): TDubboCallResult<BaseResponse>;
  hotelIsLived(Long0: JavaLong): TDubboCallResult<BaseResponse<boolean>>;
  hotelTag(List0: JavaList): TDubboCallResult<BaseResponse<Array<HotelTagVO>>>;
  hotelAddress(Long0: JavaLong): TDubboCallResult<BaseResponse<string>>;
  idsHotelsWithDetailCity(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelBO>>>;
  countAllHotel(): TDubboCallResult<BaseResponse<number>>;
  hotelStatusV1(
    HotelSoldOutOrSuspendRequest0: HotelSoldOutOrSuspendRequest,
  ): TDubboCallResult<BaseResponse<HotelSoldOutOrSuspendBO>>;
  getHotelStatus(): TDubboCallResult<BaseResponse<{[name: number]: string}>>;
  getHotelbyIdListAndName(
    HotelByIdListAndNameRequest0: HotelByIdListAndNameRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelByIdListAndNameVO>>>;
  transHotelIdAndUnique(
    TransHotelIdAndUniqueRequest0: TransHotelIdAndUniqueRequest,
  ): TDubboCallResult<BaseResponse<Array<HotelIdAndUniqueVO>>>;
  syncHotel(String0: JavaString): TDubboCallResult<BaseResponse<number>>;
  getHotelTypeBrandType(): TDubboCallResult<
    BaseResponse<Array<HotelTypeBrandTypeVO>>
  >;
  getHotelBaseInfo(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelBaseInfoBO>>;
  getHotel(Long0: JavaLong): TDubboCallResult<BaseResponse<HotelVO>>;
  getAllHotelSimpleInfo(): TDubboCallResult<
    BaseResponse<Array<HotelSimpleInfoVO>>
  >;
  hotelRoomTypeChannelRateCode(
    HotelRoomTypeChannelRequest0: HotelRoomTypeChannelRequest,
  ): TDubboCallResult<BaseResponse<RoomTypeRateCodeResVO>>;
  pageGetAllHotel(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
  ): TDubboCallResult<BaseResponse<CurrentPageBean<HotelSimpleInfoVO>>>;
  searchHotel(
    HotelSearchRequest0: HotelSearchRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelVO>>>;
  getAllOyoRoomType(): TDubboCallResult<BaseResponse<Array<OyoRoomTypeVO>>>;
  getHotelType(): TDubboCallResult<BaseResponse<{[name: number]: string}>>;
  getHotelHistoryStatus(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<HotelHistoryStatusVO>>;
}

export const HotelServiceClientWrapper = {
  hotelSearchByName: argumentMap,
  isChina2: argumentMap,
  hotelBaseInfo: argumentMap,
  getHotelAndChannelByCityId: argumentMap,
  findHotelsBaseInfoByIds: argumentMap,
  saveCommissionAndTime: argumentMap,
  goLiveHotel: argumentMap,
  tpiCheckStatus: argumentMap,
  liveCity: argumentMap,
  liveHotelSimpleInfo: argumentMap,
  channelList: argumentMap,
  updateHotelStatusV1: argumentMap,
  listAllHotels: argumentMap,
  hotelListByOyoIdList: argumentMap,
  searchHotelByName: argumentMap,
  crsGetHotelInfo: argumentMap,
  hotelBaseInfoV1: argumentMap,
  getReasontructureVO: argumentMap,
  updateBizDateAndNightAuditTime: argumentMap,
  getHotelRegion: argumentMap,
  hotelDetail: argumentMap,
  getHotelByLikeName: argumentMap,
  cityIdHotels: argumentMap,
  hotelStatusV1: argumentMap,
  roomTypeListWithRateCode: argumentMap,
  idsHotels: argumentMap,
  getRegion: argumentMap,
  getHotelByTypeAndidList: argumentMap,
  channelHotels: argumentMap,
  hotelSimpleInfoByHotelId: argumentMap,
  conditionsQueryHotel: argumentMap,
  hotelSimpleInfoByOyoId: argumentMap,
  hotelInfoListByOyoIdList: argumentMap,
  getHotelAndCityPageInfo: argumentMap,
  updateHotelStatus: argumentMap,
  batchUpdateHotelStatus: argumentMap,
  hotelIsLived: argumentMap,
  hotelTag: argumentMap,
  hotelAddress: argumentMap,
  idsHotelsWithDetailCity: argumentMap,
  countAllHotel: argumentMap,
  getHotelStatus: argumentMap,
  getHotelbyIdListAndName: argumentMap,
  transHotelIdAndUnique: argumentMap,
  syncHotel: argumentMap,
  getHotelTypeBrandType: argumentMap,
  getHotelBaseInfo: argumentMap,
  getHotel: argumentMap,
  getAllHotelSimpleInfo: argumentMap,
  hotelRoomTypeChannelRateCode: argumentMap,
  pageGetAllHotel: argumentMap,
  searchHotel: argumentMap,
  getAllOyoRoomType: argumentMap,
  getHotelType: argumentMap,
  getHotelHistoryStatus: argumentMap,
};

export function HotelServiceClient(dubbo: Dubbo): IHotelServiceClient {
  return dubbo.proxyService<IHotelServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.HotelServiceClient',
    methods: HotelServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
