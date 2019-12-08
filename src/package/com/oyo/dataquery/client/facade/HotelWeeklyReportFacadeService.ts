import { HotelIncomeUptonowReqDto } from './../request/HotelIncomeUptonowReqDto';
import { RdfaResult } from './../../../../../top/rdfa/framework/biz/ro/RdfaResult';
import { HotelIncomeUptonowDto } from './../dto/weeklyreport/HotelIncomeUptonowDto';
import { HotelPutIntoUptonowReqDto } from './../request/HotelPutIntoUptonowReqDto';
import { HotelPutIntoUptonowDto } from './../dto/weeklyreport/HotelPutIntoUptonowDto';
import { HotelIncomeWeeklyReqDto } from './../request/HotelIncomeWeeklyReqDto';
import { HotelIncomeWeeklyDto } from './../dto/weeklyreport/HotelIncomeWeeklyDto';
import { HotelAppraiseWeeklyReqDto } from './../request/HotelAppraiseWeeklyReqDto';
import { HotelAppraiseWeeklyDto } from './../dto/weeklyreport/HotelAppraiseWeeklyDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelWeeklyReportFacadeService {
  queryHotelIncomeUptonow(
    HotelIncomeUptonowReqDto0: HotelIncomeUptonowReqDto,
  ): TDubboCallResult<RdfaResult<HotelIncomeUptonowDto>>;
  queryHotelOutgoUptonow(
    HotelPutIntoUptonowReqDto0: HotelPutIntoUptonowReqDto,
  ): TDubboCallResult<RdfaResult<HotelPutIntoUptonowDto>>;
  queryHotelIncomeByWeeks(
    HotelIncomeWeeklyReqDto0: HotelIncomeWeeklyReqDto,
  ): TDubboCallResult<RdfaResult<HotelIncomeWeeklyDto>>;
  queryHotelAppraiseByWeeks(
    HotelAppraiseWeeklyReqDto0: HotelAppraiseWeeklyReqDto,
  ): TDubboCallResult<RdfaResult<HotelAppraiseWeeklyDto>>;
}

export const HotelWeeklyReportFacadeServiceWrapper = {
  queryHotelIncomeUptonow: argumentMap,
  queryHotelOutgoUptonow: argumentMap,
  queryHotelIncomeByWeeks: argumentMap,
  queryHotelAppraiseByWeeks: argumentMap,
};

export function HotelWeeklyReportFacadeService(
  dubbo: Dubbo,
): IHotelWeeklyReportFacadeService {
  return dubbo.proxyService<IHotelWeeklyReportFacadeService>({
    dubboInterface:
      'com.oyo.dataquery.client.facade.HotelWeeklyReportFacadeService',
    methods: HotelWeeklyReportFacadeServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
