import java from 'js-to-java';

export interface IContentsDeleteRequest {
  contentsId?: string;
}

export class ContentsDeleteRequest {
  constructor(params: IContentsDeleteRequest) {
    this.contentsId = params.contentsId;
  }

  contentsId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.ContentsDeleteRequest',
      $: {contentsId: java.String(this.contentsId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
