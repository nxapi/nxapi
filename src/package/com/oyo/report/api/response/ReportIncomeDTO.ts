import java from 'js-to-java';

export interface IReportIncomeDTO {
  arrItem?: Array<string>;
}

export class ReportIncomeDTO {
  constructor(params: IReportIncomeDTO) {
    this.arrItem = params.arrItem;
  }

  arrItem?: Array<string>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ReportIncomeDTO',
      $: {
        arrItem: this.arrItem
          ? java.List(
              (this.arrItem || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
