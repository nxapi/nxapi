import java from 'js-to-java';

export interface IPlaceLegalEntityDto {
  businessLicense?: number;
  legalEntityId?: number;
  createTime?: Date;
  placeId?: number;
  businessLicenseReason?: string;
  cartType?: number;
  updateTime?: Date;
}

export class PlaceLegalEntityDto {
  constructor(params: IPlaceLegalEntityDto) {
    this.businessLicense = params.businessLicense;
    this.legalEntityId = params.legalEntityId;
    this.createTime = params.createTime;
    this.placeId = params.placeId;
    this.businessLicenseReason = params.businessLicenseReason;
    this.cartType = params.cartType;
    this.updateTime = params.updateTime;
  }

  businessLicense?: number;
  legalEntityId?: number;
  createTime?: Date;
  placeId?: number;
  businessLicenseReason?: string;
  cartType?: number;
  updateTime?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceLegalEntityDto',
      $: {
        businessLicense: java.Integer(this.businessLicense),
        legalEntityId: java.Long(this.legalEntityId),
        createTime: this.createTime,
        placeId: java.Long(this.placeId),
        businessLicenseReason: java.String(this.businessLicenseReason),
        cartType: java.Integer(this.cartType),
        updateTime: this.updateTime,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
