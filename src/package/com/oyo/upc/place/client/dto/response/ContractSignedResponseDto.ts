import java from 'js-to-java';

export interface IContractSignedResponseDto {
  oyoId?: string;
  placeId?: number;
  correlationId?: string;
  uniqueId?: string;
  placeCode?: string;
}

export class ContractSignedResponseDto {
  constructor(params: IContractSignedResponseDto) {
    this.oyoId = params.oyoId;
    this.placeId = params.placeId;
    this.correlationId = params.correlationId;
    this.uniqueId = params.uniqueId;
    this.placeCode = params.placeCode;
  }

  oyoId?: string;
  placeId?: number;
  correlationId?: string;
  uniqueId?: string;
  placeCode?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.ContractSignedResponseDto',
      $: {
        oyoId: java.String(this.oyoId),
        placeId: java.Long(this.placeId),
        correlationId: java.String(this.correlationId),
        uniqueId: java.String(this.uniqueId),
        placeCode: java.String(this.placeCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
