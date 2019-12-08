import java from 'js-to-java';

export interface IBatchGetPlaceByCodesRequestDto {
  codes?: Array<string>;
  status?: number;
}

export class BatchGetPlaceByCodesRequestDto {
  constructor(params: IBatchGetPlaceByCodesRequestDto) {
    this.codes = params.codes;
    this.status = params.status;
  }

  codes?: Array<string>;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.BatchGetPlaceByCodesRequestDto',
      $: {
        codes: this.codes
          ? java.List(
              (this.codes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
