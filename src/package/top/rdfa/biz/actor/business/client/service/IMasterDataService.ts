import { CalendarHolidayConditionQuery } from './../request/masterdata/CalendarHolidayConditionQuery';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { CalendarHolidayDto } from './../dto/CalendarHolidayDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIMasterDataService {
  getCalendarHolidayByCondition(
    CalendarHolidayConditionQuery0: CalendarHolidayConditionQuery,
  ): TDubboCallResult<ClientBaseResponse<Array<CalendarHolidayDto>>>;
}

export const IMasterDataServiceWrapper = {
  getCalendarHolidayByCondition: argumentMap,
};

export function IMasterDataService(dubbo: Dubbo): IIMasterDataService {
  return dubbo.proxyService<IIMasterDataService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IMasterDataService',
    methods: IMasterDataServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
