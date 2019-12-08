import { OrderSourceRequest } from './../request/OrderSourceRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { RevenueRoomNightsDetailDTO } from './../response/RevenueRoomNightsDetailDTO';
import { BizRevenueSearchRpcRequest } from './../request/BizRevenueSearchRpcRequest';
import { NewBizRevenueReportDTO } from './../response/NewBizRevenueReportDTO';
import { OrderSourceReportDTO } from './../response/OrderSourceReportDTO';
import { CouponTransferRateRpcRequest } from './../request/CouponTransferRateRpcRequest';
import { CouponTransRateResultDTO } from './../response/CouponTransRateResultDTO';
import { MonthReportDTO } from './../response/MonthReportDTO';
import { BizRevenueOfYearRpcRequest } from './../request/BizRevenueOfYearRpcRequest';
import { RevenueRoomNightsDTO } from './../response/RevenueRoomNightsDTO';
import { ExtBookingPostingRpcRequest } from './../request/ExtBookingPostingRpcRequest';
import { ExtBookingPostingPageDTO } from './../response/ExtBookingPostingPageDTO';
import { RoomTypeSaleReportDTO } from './../response/RoomTypeSaleReportDTO';
import { CouponReportDTO } from './../response/CouponReportDTO';
import { QueryRevenueRoomNightsFeeDetailRpcRequest } from './../request/QueryRevenueRoomNightsFeeDetailRpcRequest';
import { RevenueRoomNightsFeeDTO } from './../response/RevenueRoomNightsFeeDTO';
import { BizRevenueReportDTO } from './../response/BizRevenueReportDTO';
import { ExtBookingPostingDetailRpcRequest } from './../request/ExtBookingPostingDetailRpcRequest';
import { PageInfoDTO } from './../response/PageInfoDTO';
import { ExtBookingPostingDetailDTO } from './../response/ExtBookingPostingDetailDTO';
import { ReportIncomeDTO } from './../response/ReportIncomeDTO';
import { BizRevenueReportYearDTO } from './../response/BizRevenueReportYearDTO';
import { ExtBookingPostingDTO } from './../response/ExtBookingPostingDTO';
import { MemberRpcRequest } from './../request/MemberRpcRequest';
import { MemberResultDTO } from './../response/MemberResultDTO';
import { BizRevenueReportOfDateDTO } from './../response/BizRevenueReportOfDateDTO';
import { argumentMap, JavaLong, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IReportRpcService {
  queryOrderSourceDetail(
    OrderSourceRequest0: OrderSourceRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<RevenueRoomNightsDetailDTO>>>;
  findNewBizRevenueReportOfDate(
    BizRevenueSearchRpcRequest0: BizRevenueSearchRpcRequest,
  ): TDubboCallResult<BaseResponse<NewBizRevenueReportDTO>>;
  queryOrderSourceReport(
    OrderSourceRequest0: OrderSourceRequest,
  ): TDubboCallResult<BaseResponse<Array<OrderSourceReportDTO>>>;
  queryCouponTransformeRateReport(
    CouponTransferRateRpcRequest0: CouponTransferRateRpcRequest,
  ): TDubboCallResult<BaseResponse<CouponTransRateResultDTO>>;
  queryMonthReport(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<MonthReportDTO>>;
  findNewBizRevenueReportOfYear(
    BizRevenueOfYearRpcRequest0: BizRevenueOfYearRpcRequest,
  ): TDubboCallResult<BaseResponse<NewBizRevenueReportDTO>>;
  queryRevenueRoomNightsDetail(
    BizRevenueSearchRpcRequest0: BizRevenueSearchRpcRequest,
  ): TDubboCallResult<BaseResponse<RevenueRoomNightsDTO>>;
  findExtBookingPosting(
    ExtBookingPostingRpcRequest0: ExtBookingPostingRpcRequest,
  ): TDubboCallResult<BaseResponse<ExtBookingPostingPageDTO>>;
  queryHotelRoomTypeReport(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<Array<RoomTypeSaleReportDTO>>>;
  queryCouponReport(
    CouponTransferRateRpcRequest0: CouponTransferRateRpcRequest,
  ): TDubboCallResult<BaseResponse<Array<CouponReportDTO>>>;
  queryRevenueRoomNightsFeeDetail(
    QueryRevenueRoomNightsFeeDetailRpcRequest0: QueryRevenueRoomNightsFeeDetailRpcRequest,
  ): TDubboCallResult<BaseResponse<RevenueRoomNightsFeeDTO>>;
  getAllOperatorsInHotel(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<string>>>;
  findBizRevenueReportOfDate(
    BizRevenueSearchRpcRequest0: BizRevenueSearchRpcRequest,
  ): TDubboCallResult<BaseResponse<BizRevenueReportDTO>>;
  findExtBookingPostingDetail(
    ExtBookingPostingDetailRpcRequest0: ExtBookingPostingDetailRpcRequest,
  ): TDubboCallResult<BaseResponse<PageInfoDTO<ExtBookingPostingDetailDTO>>>;
  findHotelIncomeReport(
    Long0: JavaLong,
    String1: JavaString,
    String2: JavaString,
  ): TDubboCallResult<BaseResponse<Array<ReportIncomeDTO>>>;
  findBizRevenueReportOfYear(
    BizRevenueOfYearRpcRequest0: BizRevenueOfYearRpcRequest,
  ): TDubboCallResult<BaseResponse<BizRevenueReportYearDTO>>;
  exportExtBookingPosting(
    ExtBookingPostingRpcRequest0: ExtBookingPostingRpcRequest,
  ): TDubboCallResult<BaseResponse<Array<ExtBookingPostingDTO>>>;
  queryMemberRate(
    MemberRpcRequest0: MemberRpcRequest,
  ): TDubboCallResult<BaseResponse<MemberResultDTO>>;
  findBizRevenueReportList(
    BizRevenueSearchRpcRequest0: BizRevenueSearchRpcRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<BizRevenueReportOfDateDTO>>>;
}

export const ReportRpcServiceWrapper = {
  queryOrderSourceDetail: argumentMap,
  findNewBizRevenueReportOfDate: argumentMap,
  queryOrderSourceReport: argumentMap,
  queryCouponTransformeRateReport: argumentMap,
  queryMonthReport: argumentMap,
  findNewBizRevenueReportOfYear: argumentMap,
  queryRevenueRoomNightsDetail: argumentMap,
  findExtBookingPosting: argumentMap,
  queryHotelRoomTypeReport: argumentMap,
  queryCouponReport: argumentMap,
  queryRevenueRoomNightsFeeDetail: argumentMap,
  getAllOperatorsInHotel: argumentMap,
  findBizRevenueReportOfDate: argumentMap,
  findExtBookingPostingDetail: argumentMap,
  findHotelIncomeReport: argumentMap,
  findBizRevenueReportOfYear: argumentMap,
  exportExtBookingPosting: argumentMap,
  queryMemberRate: argumentMap,
  findBizRevenueReportList: argumentMap,
};

export function ReportRpcService(dubbo: Dubbo): IReportRpcService {
  return dubbo.proxyService<IReportRpcService>({
    dubboInterface: 'com.oyo.report.api.service.ReportRpcService',
    methods: ReportRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
