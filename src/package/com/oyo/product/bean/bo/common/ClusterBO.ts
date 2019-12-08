import java from 'js-to-java';

export interface IClusterBO {
  cnName?: string;
  clusterName?: string;
  clusterCnName?: string;
  enName?: string;
  clusterCode?: string;
  clusterId?: number;
  cityId?: number;
}

export class ClusterBO {
  constructor(params: IClusterBO) {
    this.cnName = params.cnName;
    this.clusterName = params.clusterName;
    this.clusterCnName = params.clusterCnName;
    this.enName = params.enName;
    this.clusterCode = params.clusterCode;
    this.clusterId = params.clusterId;
    this.cityId = params.cityId;
  }

  cnName?: string;
  clusterName?: string;
  clusterCnName?: string;
  enName?: string;
  clusterCode?: string;
  clusterId?: number;
  cityId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.ClusterBO',
      $: {
        cnName: java.String(this.cnName),
        clusterName: java.String(this.clusterName),
        clusterCnName: java.String(this.clusterCnName),
        enName: java.String(this.enName),
        clusterCode: java.String(this.clusterCode),
        clusterId: java.Integer(this.clusterId),
        cityId: java.Integer(this.cityId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
