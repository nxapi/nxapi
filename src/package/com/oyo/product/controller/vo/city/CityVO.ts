import { ClusterVO } from './../cluster/ClusterVO';
import java from 'js-to-java';

export interface ICityVO {
  cityName?: string;
  cityId?: number;
  clusterVOList?: Array<ClusterVO>;
}

export class CityVO {
  constructor(params: ICityVO) {
    this.cityName = params.cityName;
    this.cityId = params.cityId;
    this.clusterVOList = params.clusterVOList;
  }

  cityName?: string;
  cityId?: number;
  clusterVOList?: Array<ClusterVO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.city.CityVO',
      $: {
        cityName: java.String(this.cityName),
        cityId: java.Integer(this.cityId),
        clusterVOList: this.clusterVOList
          ? java.List(
              (this.clusterVOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
