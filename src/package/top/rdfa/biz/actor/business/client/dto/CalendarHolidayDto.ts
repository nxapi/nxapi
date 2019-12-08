import java from 'js-to-java';

export interface ICalendarHolidayDto {
  merchantCode?: string;
  holidayType?: string;
  corporationCode?: string;
  departmentCode?: string;
  curDate?: string;
}

export class CalendarHolidayDto {
  constructor(params: ICalendarHolidayDto) {
    this.merchantCode = params.merchantCode;
    this.holidayType = params.holidayType;
    this.corporationCode = params.corporationCode;
    this.departmentCode = params.departmentCode;
    this.curDate = params.curDate;
  }

  merchantCode?: string;
  holidayType?: string;
  corporationCode?: string;
  departmentCode?: string;
  curDate?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.CalendarHolidayDto',
      $: {
        merchantCode: java.String(this.merchantCode),
        holidayType: java.String(this.holidayType),
        corporationCode: java.String(this.corporationCode),
        departmentCode: java.String(this.departmentCode),
        curDate: java.String(this.curDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
