import { Customer3CExpDetailDTO } from './Customer3CExpDetailDTO';
import java from 'js-to-java';

export interface ICustomer3CExpDTO {
  warnLevel?: string;
  detailList?: Array<Customer3CExpDetailDTO>;
  hotelId?: number;
}

export class Customer3CExpDTO {
  constructor(params: ICustomer3CExpDTO) {
    this.warnLevel = params.warnLevel;
    this.detailList = params.detailList;
    this.hotelId = params.hotelId;
  }

  warnLevel?: string;
  detailList?: Array<Customer3CExpDetailDTO>;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.Customer3CExpDTO',
      $: {
        warnLevel: java.String(this.warnLevel),
        detailList: this.detailList
          ? java.List(
              (this.detailList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
