import java from 'js-to-java';

export interface IVersionUpdateVO {
  downloadUrl?: string;
  forceUpdate?: string;
  popUpUpdate?: string;
  updateContent?: string;
  updateTitle?: string;
}

export class VersionUpdateVO {
  constructor(params: IVersionUpdateVO) {
    this.downloadUrl = params.downloadUrl;
    this.forceUpdate = params.forceUpdate;
    this.popUpUpdate = params.popUpUpdate;
    this.updateContent = params.updateContent;
    this.updateTitle = params.updateTitle;
  }

  downloadUrl?: string;
  forceUpdate?: string;
  popUpUpdate?: string;
  updateContent?: string;
  updateTitle?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.ops.facade.bean.vo.VersionUpdateVO',
      $: {
        downloadUrl: java.String(this.downloadUrl),
        forceUpdate: java.String(this.forceUpdate),
        popUpUpdate: java.String(this.popUpUpdate),
        updateContent: java.String(this.updateContent),
        updateTitle: java.String(this.updateTitle),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
