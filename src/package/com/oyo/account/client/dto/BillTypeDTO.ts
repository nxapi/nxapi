import java from 'js-to-java';

export interface IBillTypeDTO {
  types?: Array<string>;
  recentType?: string;
}

export class BillTypeDTO {
  constructor(params: IBillTypeDTO) {
    this.types = params.types;
    this.recentType = params.recentType;
  }

  types?: Array<string>;
  recentType?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.BillTypeDTO',
      $: {
        types: this.types
          ? java.List(
              (this.types || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        recentType: java.String(this.recentType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
