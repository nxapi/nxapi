import java from 'js-to-java';

export interface IPlaceLegalEntityCreateRequestDto {
  businessLicense?: number;
  legalEntityId?: number;
  placeId?: number;
  businessLicenseReason?: string;
  cartType?: number;
  id?: number;
  operatorId?: number;
  status?: number;
}

export class PlaceLegalEntityCreateRequestDto {
  constructor(params: IPlaceLegalEntityCreateRequestDto) {
    this.businessLicense = params.businessLicense;
    this.legalEntityId = params.legalEntityId;
    this.placeId = params.placeId;
    this.businessLicenseReason = params.businessLicenseReason;
    this.cartType = params.cartType;
    this.id = params.id;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  businessLicense?: number;
  legalEntityId?: number;
  placeId?: number;
  businessLicenseReason?: string;
  cartType?: number;
  id?: number;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceLegalEntityCreateRequestDto',
      $: {
        businessLicense: java.Integer(this.businessLicense),
        legalEntityId: java.Long(this.legalEntityId),
        placeId: java.Long(this.placeId),
        businessLicenseReason: java.String(this.businessLicenseReason),
        cartType: java.Integer(this.cartType),
        id: java.Long(this.id),
        operatorId: java.Long(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
