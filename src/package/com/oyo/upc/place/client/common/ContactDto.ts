import java from 'js-to-java';

export interface IContactDto {
  isDefault?: number;
  isDeleted?: number;
  contactId?: number;
  type?: string;
}

export class ContactDto {
  constructor(params: IContactDto) {
    this.isDefault = params.isDefault;
    this.isDeleted = params.isDeleted;
    this.contactId = params.contactId;
    this.type = params.type;
  }

  isDefault?: number;
  isDeleted?: number;
  contactId?: number;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.common.ContactDto',
      $: {
        isDefault: java.Integer(this.isDefault),
        isDeleted: java.Integer(this.isDeleted),
        contactId: java.Long(this.contactId),
        type: java.String(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
