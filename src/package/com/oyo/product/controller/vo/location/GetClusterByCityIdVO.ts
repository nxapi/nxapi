import { ClusterBO } from './../../../bean/bo/common/ClusterBO';
import java from 'js-to-java';

export interface IGetClusterByCityIdVO {
  clusterList?: Array<ClusterBO>;
  cityId?: number;
}

export class GetClusterByCityIdVO {
  constructor(params: IGetClusterByCityIdVO) {
    this.clusterList = params.clusterList;
    this.cityId = params.cityId;
  }

  clusterList?: Array<ClusterBO>;
  cityId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.location.GetClusterByCityIdVO',
      $: {
        clusterList: this.clusterList
          ? java.List(
              (this.clusterList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        cityId: java.Integer(this.cityId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
