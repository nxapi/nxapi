import java from 'js-to-java';

export interface IClusterVO {
  clusterName?: string;
  clusterId?: number;
}

export class ClusterVO {
  constructor(params: IClusterVO) {
    this.clusterName = params.clusterName;
    this.clusterId = params.clusterId;
  }

  clusterName?: string;
  clusterId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.cluster.ClusterVO',
      $: {
        clusterName: java.String(this.clusterName),
        clusterId: java.Integer(this.clusterId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
