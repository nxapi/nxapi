import { ContactDto } from './../../common/ContactDto';
import java from 'js-to-java';

export interface IPlaceContactDto {
  placeId?: number;
  contactDtos?: Array<ContactDto>;
}

export class PlaceContactDto {
  constructor(params: IPlaceContactDto) {
    this.placeId = params.placeId;
    this.contactDtos = params.contactDtos;
  }

  placeId?: number;
  contactDtos?: Array<ContactDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceContactDto',
      $: {
        placeId: java.Long(this.placeId),
        contactDtos: this.contactDtos
          ? java.List(
              (this.contactDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
