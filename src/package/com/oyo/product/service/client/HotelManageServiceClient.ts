import { BaseResponse } from './../../../common/response/BaseResponse';
import { ChannelUpdateLogRequest } from './../../controller/request/channel/ChannelUpdateLogRequest';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { HotelChannelUpdateLogVO } from './../../controller/vo/channel/HotelChannelUpdateLogVO';
import { HotelRoomTypeStatusRequest } from './../../controller/request/roomtype/HotelRoomTypeStatusRequest';
import { ResponseCode } from './../../../common/enums/ResponseCode';
import { BatchBindChannelRateLogRequest } from './../../controller/request/hotel/BatchBindChannelRateLogRequest';
import { PageLogResponse } from './../../controller/request/hotel/PageLogResponse';
import { BatchBindChannelRateLogVO } from './../../controller/vo/hotel/BatchBindChannelRateLogVO';
import { HttpServletResponse } from './../../../../../javax/servlet/http/HttpServletResponse';
import { DataDocumentBo } from './../../bean/bo/document/DataDocumentBo';
import { HotelRoomTypeStatusVO } from './../../controller/vo/roomtype/HotelRoomTypeStatusVO';
import { HotelChannelStatusVO } from './../../controller/vo/roomtype/HotelChannelStatusVO';
import { BatchBindChannelRateDetailVO } from './../../controller/vo/hotel/BatchBindChannelRateDetailVO';
import { UpdateHotelStatusLogRequest } from './../../controller/request/hotel/UpdateHotelStatusLogRequest';
import { UpdateHotelStatusLogVO } from './../../controller/vo/hotel/UpdateHotelStatusLogVO';
import { BatchQueryRequest } from './../../controller/request/document/BatchQueryRequest';
import { DataDocumentRecordBo } from './../../bean/bo/document/DataDocumentRecordBo';
import { argumentMap, JavaLong, JavaString, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelManageServiceClient {
  getHotelRoomTypeUpdateLogs(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  batchBindChannelAndRateCode(
    MultipartFile0: any,
    String1: JavaString,
    Long2: JavaLong,
    Long3: JavaLong,
  ): TDubboCallResult<BaseResponse>;
  getHotelChannelUpdateLogs(
    ChannelUpdateLogRequest0: ChannelUpdateLogRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<HotelChannelUpdateLogVO>>>;
  updateHotelRoomTypeStatus(
    HotelRoomTypeStatusRequest0: HotelRoomTypeStatusRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  getBatchImportLogs(
    BatchBindChannelRateLogRequest0: BatchBindChannelRateLogRequest,
  ): TDubboCallResult<BaseResponse<PageLogResponse<BatchBindChannelRateLogVO>>>;
  documentHandle(
    MultipartFile0: any,
    String1: JavaString,
    String2: JavaString,
    Long3: JavaLong,
  ): TDubboCallResult<BaseResponse>;
  documentDo(String0: JavaString): TDubboCallResult<BaseResponse>;
  documentDownload(
    String0: JavaString,
    Long1: JavaLong,
    HttpServletResponse2: HttpServletResponse,
  ): TDubboCallResult<void>;
  documentQuery(
    BatchBindChannelRateLogRequest0: BatchBindChannelRateLogRequest,
  ): TDubboCallResult<BaseResponse<PageLogResponse<DataDocumentBo>>>;
  getHotelRoomTypeStatus(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelRoomTypeStatusVO>>;
  getBatchHotelRoomTypeStatus(
    List0: JavaList,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelChannelStatusVO>>>;
  getBatchImportLogs(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<Array<BatchBindChannelRateDetailVO>>>;
  getHotelStatusChangedLogs(
    UpdateHotelStatusLogRequest0: UpdateHotelStatusLogRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<UpdateHotelStatusLogVO>>>;
  documentDetail(
    BatchQueryRequest0: BatchQueryRequest,
  ): TDubboCallResult<BaseResponse<PageLogResponse<DataDocumentRecordBo>>>;
}

export const HotelManageServiceClientWrapper = {
  getHotelRoomTypeUpdateLogs: argumentMap,
  batchBindChannelAndRateCode: argumentMap,
  getHotelChannelUpdateLogs: argumentMap,
  updateHotelRoomTypeStatus: argumentMap,
  getBatchImportLogs: argumentMap,
  documentHandle: argumentMap,
  documentDo: argumentMap,
  documentDownload: argumentMap,
  documentQuery: argumentMap,
  getHotelRoomTypeStatus: argumentMap,
  getBatchHotelRoomTypeStatus: argumentMap,
  getHotelStatusChangedLogs: argumentMap,
  documentDetail: argumentMap,
};

export function HotelManageServiceClient(
  dubbo: Dubbo,
): IHotelManageServiceClient {
  return dubbo.proxyService<IHotelManageServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.HotelManageServiceClient',
    methods: HotelManageServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
