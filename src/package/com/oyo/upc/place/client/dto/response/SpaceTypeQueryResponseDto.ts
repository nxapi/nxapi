import { SpaceTypeDto } from './SpaceTypeDto';
import java from 'js-to-java';

export interface ISpaceTypeQueryResponseDto {
  spaceTypeList?: Array<SpaceTypeDto>;
}

export class SpaceTypeQueryResponseDto {
  constructor(params: ISpaceTypeQueryResponseDto) {
    this.spaceTypeList = params.spaceTypeList;
  }

  spaceTypeList?: Array<SpaceTypeDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.SpaceTypeQueryResponseDto',
      $: {
        spaceTypeList: this.spaceTypeList
          ? java.List(
              (this.spaceTypeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
