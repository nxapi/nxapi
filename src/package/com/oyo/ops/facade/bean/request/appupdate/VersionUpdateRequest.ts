import java from 'js-to-java';

export interface IVersionUpdateRequest {
  currentAppVersion?: string;
  appType?: string;
  systemType?: string;
}

export class VersionUpdateRequest {
  constructor(params: IVersionUpdateRequest) {
    this.currentAppVersion = params.currentAppVersion;
    this.appType = params.appType;
    this.systemType = params.systemType;
  }

  currentAppVersion?: string;
  appType?: string;
  systemType?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.ops.facade.bean.request.appupdate.VersionUpdateRequest',
      $: {
        currentAppVersion: java.String(this.currentAppVersion),
        appType: java.String(this.appType),
        systemType: java.String(this.systemType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
