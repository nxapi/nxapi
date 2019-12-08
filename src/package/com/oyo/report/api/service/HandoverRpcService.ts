import { BaseResponse } from './../../../common/response/BaseResponse';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { HandoverEntityDTO } from './../response/HandoverEntityDTO';
import { HandoverDTO } from './../response/HandoverDTO';
import { AddHandoverRequest } from './../request/AddHandoverRequest';
import { PostingDetailExportSearchRpcRequest } from './../request/PostingDetailExportSearchRpcRequest';
// import { HandoverPostingWithSumDTO } from './../response/HandoverPostingWithSumDTO';
import { AdjustReserveFundRpcRequest } from './../request/AdjustReserveFundRpcRequest';
import { argumentMap, JavaLong, JavaInteger, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHandoverRpcService {
  findHotelHandoverList(
    Long0: JavaLong,
    Integer1: JavaInteger,
    Integer2: JavaInteger,
    String3: JavaString,
    String4: JavaString,
  ): TDubboCallResult<BaseResponse<PagedResponse<HandoverEntityDTO>>>;
  getHandover(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<HandoverEntityDTO>>;
  getPreHandover(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<HandoverEntityDTO>>;
  findCurHandoverDetailByHotelId(
    Long0: JavaLong,
    Long1: JavaLong,
    String2: JavaString,
  ): TDubboCallResult<BaseResponse<HandoverDTO>>;
  findHandoverDetailById(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<HandoverDTO>>;
  addHandover(
    AddHandoverRequest0: AddHandoverRequest,
  ): TDubboCallResult<BaseResponse>;
  getLastReserveFundAmount(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  getPostingDetail(
    PostingDetailExportSearchRpcRequest0: PostingDetailExportSearchRpcRequest,
  ): TDubboCallResult<BaseResponse<any>>;
  adjustReserveFund(
    AdjustReserveFundRpcRequest0: AdjustReserveFundRpcRequest,
  ): TDubboCallResult<BaseResponse>;
}

export const HandoverRpcServiceWrapper = {
  findHotelHandoverList: argumentMap,
  getHandover: argumentMap,
  getPreHandover: argumentMap,
  findCurHandoverDetailByHotelId: argumentMap,
  findHandoverDetailById: argumentMap,
  addHandover: argumentMap,
  getLastReserveFundAmount: argumentMap,
  getPostingDetail: argumentMap,
  adjustReserveFund: argumentMap,
};

export function HandoverRpcService(dubbo: Dubbo): IHandoverRpcService {
  return dubbo.proxyService<IHandoverRpcService>({
    dubboInterface: 'com.oyo.report.api.service.HandoverRpcService',
    methods: HandoverRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
