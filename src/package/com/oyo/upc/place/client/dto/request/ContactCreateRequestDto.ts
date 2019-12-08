import { ContactDto } from './../../common/ContactDto';
import java from 'js-to-java';

export interface IContactCreateRequestDto {
  placeId?: number;
  contactDtos?: Array<ContactDto>;
  operatorId?: number;
  status?: number;
}

export class ContactCreateRequestDto {
  constructor(params: IContactCreateRequestDto) {
    this.placeId = params.placeId;
    this.contactDtos = params.contactDtos;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  placeId?: number;
  contactDtos?: Array<ContactDto>;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ContactCreateRequestDto',
      $: {
        placeId: java.Long(this.placeId),
        contactDtos: this.contactDtos
          ? java.List(
              (this.contactDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        operatorId: java.Long(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
