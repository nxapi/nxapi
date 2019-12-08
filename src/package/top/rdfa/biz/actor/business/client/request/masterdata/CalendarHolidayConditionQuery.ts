import { LanguageType } from './../../enums/LanguageType';
import java from 'js-to-java';

export interface ICalendarHolidayConditionQuery {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  begDate?: string;
  endDate?: string;
  appKey?: string;
}

export class CalendarHolidayConditionQuery {
  constructor(params: ICalendarHolidayConditionQuery) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.begDate = params.begDate;
    this.endDate = params.endDate;
    this.appKey = params.appKey;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  begDate?: string;
  endDate?: string;
  appKey?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.masterdata.CalendarHolidayConditionQuery',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        begDate: java.String(this.begDate),
        endDate: java.String(this.endDate),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
