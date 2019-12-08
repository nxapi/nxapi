import { BaseResponse } from './../../common/response/BaseResponse';
import { WeekReportVo } from './../bean/vo/WeekReportVo';
import { WeekReportBatchNoVo } from './../bean/vo/WeekReportBatchNoVo';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IWeekReportApi {
  weekReportDetail(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<WeekReportVo>>;
  countForUnRead(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<number>>;
  weekReportBatchNoList(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<WeekReportBatchNoVo>>>;
}

export const WeekReportApiWrapper = {
  weekReportDetail: argumentMap,
  countForUnRead: argumentMap,
  weekReportBatchNoList: argumentMap,
};

export function WeekReportApi(dubbo: Dubbo): IWeekReportApi {
  return dubbo.proxyService<IWeekReportApi>({
    dubboInterface: 'com.oyo.owner.service.WeekReportApi',
    methods: WeekReportApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
