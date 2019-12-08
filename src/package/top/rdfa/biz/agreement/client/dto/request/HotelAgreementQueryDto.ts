import java from 'js-to-java';

export interface IHotelAgreementQueryDto {
  queryTypes?: Array<string>;
  oyoId?: string;
}

export class HotelAgreementQueryDto {
  constructor(params: IHotelAgreementQueryDto) {
    this.queryTypes = params.queryTypes;
    this.oyoId = params.oyoId;
  }

  queryTypes?: Array<string>;
  oyoId?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.request.HotelAgreementQueryDto',
      $: {
        queryTypes: this.queryTypes
          ? java.List(
              (this.queryTypes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        oyoId: java.String(this.oyoId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
