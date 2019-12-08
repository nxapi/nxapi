import { ContactDto } from './../../common/ContactDto';
import java from 'js-to-java';

export interface IContactSaveRequestDto {
  placeId?: number;
  source?: string;
  contactDtos?: Array<ContactDto>;
  operatorId?: number;
  status?: number;
}

export class ContactSaveRequestDto {
  constructor(params: IContactSaveRequestDto) {
    this.placeId = params.placeId;
    this.source = params.source;
    this.contactDtos = params.contactDtos;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  placeId?: number;
  source?: string;
  contactDtos?: Array<ContactDto>;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ContactSaveRequestDto',
      $: {
        placeId: java.Long(this.placeId),
        source: java.String(this.source),
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
