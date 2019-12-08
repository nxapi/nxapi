import { BaseResponse } from './../../../common/response/BaseResponse';
import { ZoneBO } from './../../bean/bo/common/ZoneBO';
import { MetadataConfigurationBO } from './../../bean/bo/metadata/MetadataConfigurationBO';
import { HubBO } from './../../bean/bo/common/HubBO';
import { CityBO } from './../../bean/bo/common/CityBO';
import { ClusterBO } from './../../bean/bo/common/ClusterBO';
import { AreaParentPathBO } from './../../bean/bo/common/AreaParentPathBO';
import { StateBO } from './../../bean/bo/common/StateBO';
import { BatchAreaParentPathRequest } from './../../controller/request/common/BatchAreaParentPathRequest';
import { AreaSearchHotelRequest } from './../../controller/request/hotel/AreaSearchHotelRequest';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { HotelVO } from './../../controller/vo/hotel/HotelVO';
import { StateVO } from './../../controller/vo/state/StateVO';
import { argumentMap, JavaList, JavaString, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ICommonServiceClient {
  zonesByIds(List0: JavaList): TDubboCallResult<BaseResponse<Array<ZoneBO>>>;
  metadata(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<Array<MetadataConfigurationBO>>>;
  zoneHubs(Integer0: JavaInteger): TDubboCallResult<BaseResponse<Array<HubBO>>>;
  citiesByIds(List0: JavaList): TDubboCallResult<BaseResponse<Array<CityBO>>>;
  cityClusters(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<ClusterBO>>>;
  metadata(
    List0: JavaList,
  ): TDubboCallResult<
    BaseResponse<{[name: string]: Array<MetadataConfigurationBO>}>
  >;
  areaParentPath(
    Integer0: JavaInteger,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<AreaParentPathBO>>;
  salesArea(): TDubboCallResult<BaseResponse<Array<ZoneBO>>>;
  stateList(): TDubboCallResult<BaseResponse<Array<StateBO>>>;
  cityList(): TDubboCallResult<BaseResponse<Array<CityBO>>>;
  zones(): TDubboCallResult<BaseResponse<Array<ZoneBO>>>;
  batchAreaParentPath(
    BatchAreaParentPathRequest0: BatchAreaParentPathRequest,
  ): TDubboCallResult<BaseResponse<Array<AreaParentPathBO>>>;
  hubsByIds(List0: JavaList): TDubboCallResult<BaseResponse<Array<HubBO>>>;
  hubCities(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<CityBO>>>;
  areaSearchHotel(
    AreaSearchHotelRequest0: AreaSearchHotelRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelVO>>>;
  stateCityList(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<CityBO>>>;
  threeLinkage(): TDubboCallResult<BaseResponse<Array<StateVO>>>;
  clustersByIds(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<ClusterBO>>>;
}

export const CommonServiceClientWrapper = {
  zonesByIds: argumentMap,
  metadata: argumentMap,
  zoneHubs: argumentMap,
  citiesByIds: argumentMap,
  cityClusters: argumentMap,
  areaParentPath: argumentMap,
  salesArea: argumentMap,
  stateList: argumentMap,
  cityList: argumentMap,
  zones: argumentMap,
  batchAreaParentPath: argumentMap,
  hubsByIds: argumentMap,
  hubCities: argumentMap,
  areaSearchHotel: argumentMap,
  stateCityList: argumentMap,
  threeLinkage: argumentMap,
  clustersByIds: argumentMap,
};

export function CommonServiceClient(dubbo: Dubbo): ICommonServiceClient {
  return dubbo.proxyService<ICommonServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.CommonServiceClient',
    methods: CommonServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
