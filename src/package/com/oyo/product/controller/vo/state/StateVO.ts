import { CityVO } from './../city/CityVO';
import java from 'js-to-java';

export interface IStateVO {
  cityVOList?: Array<CityVO>;
  stateName?: string;
  stateId?: number;
}

export class StateVO {
  constructor(params: IStateVO) {
    this.cityVOList = params.cityVOList;
    this.stateName = params.stateName;
    this.stateId = params.stateId;
  }

  cityVOList?: Array<CityVO>;
  stateName?: string;
  stateId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.state.StateVO',
      $: {
        cityVOList: this.cityVOList
          ? java.List(
              (this.cityVOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        stateName: java.String(this.stateName),
        stateId: java.Integer(this.stateId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
