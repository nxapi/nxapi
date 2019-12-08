import java from 'js-to-java';

export interface ISpaceTypeDto {
  displayName?: string;
  spaceTypeCode?: string;
  description?: string;
  id?: number;
}

export class SpaceTypeDto {
  constructor(params: ISpaceTypeDto) {
    this.displayName = params.displayName;
    this.spaceTypeCode = params.spaceTypeCode;
    this.description = params.description;
    this.id = params.id;
  }

  displayName?: string;
  spaceTypeCode?: string;
  description?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.SpaceTypeDto',
      $: {
        displayName: java.String(this.displayName),
        spaceTypeCode: java.String(this.spaceTypeCode),
        description: java.String(this.description),
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
