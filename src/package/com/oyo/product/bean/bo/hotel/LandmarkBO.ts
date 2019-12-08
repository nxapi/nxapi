import java from 'js-to-java';

export interface ILandmarkBO {
  distance?: string;
  name?: string;
  desc?: string;
}

export class LandmarkBO {
  constructor(params: ILandmarkBO) {
    this.distance = params.distance;
    this.name = params.name;
    this.desc = params.desc;
  }

  distance?: string;
  name?: string;
  desc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.LandmarkBO',
      $: {
        distance: java.String(this.distance),
        name: java.String(this.name),
        desc: java.String(this.desc),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
