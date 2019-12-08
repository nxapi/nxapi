import { GetListRateByHotelIdRequest } from './../../controller/request/listrate/GetListRateByHotelIdRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { RemoteListRateVO } from './../../remote/rate/vo/RemoteListRateVO';
import { GetListRateByOneDayRequest } from './../../controller/request/listrate/GetListRateByOneDayRequest';
import { GetPresetRateRequest } from './../../controller/request/listrate/GetPresetRateRequest';
import { ListRateShowVO } from './../../controller/vo/listrate/ListRateShowVO';
import { GetChannelListRateByMonthRequest } from './../../controller/request/listrate/GetChannelListRateByMonthRequest';
import { ListRateVO } from './../../controller/vo/listrate/ListRateVO';
import { GetChannelListRateByOneDayRequest } from './../../controller/request/listrate/GetChannelListRateByOneDayRequest';
import { CheckListRateRequest } from './../../controller/request/listrate/CheckListRateRequest';
import { UpdateRateRequest } from './../../controller/request/listrate/UpdateRateRequest';
import { PresetRateRequest } from './../../controller/request/listrate/PresetRateRequest';
import { UpdateListRateByWeekRequest } from './../../controller/request/listrate/UpdateListRateByWeekRequest';
import { UpdateListRateByDateRequest } from './../../controller/request/listrate/UpdateListRateByDateRequest';
import { GetListRateByHotelIdListRequest } from './../../controller/request/listrate/GetListRateByHotelIdListRequest';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IListRateServiceClient {
  getListRateByHotelId(
    GetListRateByHotelIdRequest0: GetListRateByHotelIdRequest,
  ): TDubboCallResult<BaseResponse<Array<RemoteListRateVO>>>;
  getListRateByOneDay(
    GetListRateByOneDayRequest0: GetListRateByOneDayRequest,
  ): TDubboCallResult<BaseResponse<Array<RemoteListRateVO>>>;
  getPresetRate(
    GetPresetRateRequest0: GetPresetRateRequest,
  ): TDubboCallResult<BaseResponse<ListRateShowVO>>;
  getChannelListRateByMonth(
    GetChannelListRateByMonthRequest0: GetChannelListRateByMonthRequest,
  ): TDubboCallResult<BaseResponse<Array<ListRateVO>>>;
  getChannelListRateByOneDay(
    GetChannelListRateByOneDayRequest0: GetChannelListRateByOneDayRequest,
  ): TDubboCallResult<BaseResponse<Array<RemoteListRateVO>>>;
  checkListRate(
    CheckListRateRequest0: CheckListRateRequest,
  ): TDubboCallResult<BaseResponse<boolean>>;
  updateListRate(
    UpdateRateRequest0: UpdateRateRequest,
  ): TDubboCallResult<BaseResponse>;
  presetRate(
    PresetRateRequest0: PresetRateRequest,
  ): TDubboCallResult<BaseResponse>;
  updateListRateByWeek(
    UpdateListRateByWeekRequest0: UpdateListRateByWeekRequest,
  ): TDubboCallResult<BaseResponse>;
  getListRateByMonth(
    Long0: JavaLong,
    Date1: Date,
  ): TDubboCallResult<BaseResponse<Array<ListRateVO>>>;
  updateListRateByDate(
    UpdateListRateByDateRequest0: UpdateListRateByDateRequest,
  ): TDubboCallResult<BaseResponse>;
  getListRateByHotelIdList(
    GetListRateByHotelIdListRequest0: GetListRateByHotelIdListRequest,
  ): TDubboCallResult<BaseResponse<Array<RemoteListRateVO>>>;
}

export const ListRateServiceClientWrapper = {
  getListRateByHotelId: argumentMap,
  getListRateByOneDay: argumentMap,
  getPresetRate: argumentMap,
  getChannelListRateByMonth: argumentMap,
  getChannelListRateByOneDay: argumentMap,
  checkListRate: argumentMap,
  updateListRate: argumentMap,
  presetRate: argumentMap,
  updateListRateByWeek: argumentMap,
  getListRateByMonth: argumentMap,
  updateListRateByDate: argumentMap,
  getListRateByHotelIdList: argumentMap,
};

export function ListRateServiceClient(dubbo: Dubbo): IListRateServiceClient {
  return dubbo.proxyService<IListRateServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.ListRateServiceClient',
    methods: ListRateServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
