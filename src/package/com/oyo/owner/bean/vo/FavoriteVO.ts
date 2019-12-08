import java from 'js-to-java';

export interface IFavoriteVO {
  id?: string;
  type?: string;
  target?: Object;
}

export class FavoriteVO {
  constructor(params: IFavoriteVO) {
    this.id = params.id;
    this.type = params.type;
    this.target = params.target;
  }

  id?: string;
  type?: string;
  target?: Object;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.FavoriteVO',
      $: {
        id: java.String(this.id),
        type: java.String(this.type),
        target:
          this.target && this.target['__fields2java']
            ? this.target['__fields2java']()
            : this.target,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
