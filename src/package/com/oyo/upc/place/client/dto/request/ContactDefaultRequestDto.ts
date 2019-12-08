import { ContactDto } from './../../common/ContactDto';
import java from 'js-to-java';

export interface IContactDefaultRequestDto {
  defaultContact?: ContactDto;
  placeId?: number;
  operatorId?: number;
  status?: number;
}

export class ContactDefaultRequestDto {
  constructor(params: IContactDefaultRequestDto) {
    this.defaultContact = params.defaultContact;
    this.placeId = params.placeId;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  defaultContact?: ContactDto;
  placeId?: number;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ContactDefaultRequestDto',
      $: {
        defaultContact: this.defaultContact
          ? this.defaultContact.__fields2java()
          : null,
        placeId: java.Long(this.placeId),
        operatorId: java.Long(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
