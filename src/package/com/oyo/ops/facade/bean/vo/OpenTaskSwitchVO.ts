import java from 'js-to-java';

export interface IOpenTaskSwitchVO {
  openSwitchAccountIdList?: Array<string>;
}

export class OpenTaskSwitchVO {
  constructor(params: IOpenTaskSwitchVO) {
    this.openSwitchAccountIdList = params.openSwitchAccountIdList;
  }

  openSwitchAccountIdList?: Array<string>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.ops.facade.bean.vo.OpenTaskSwitchVO',
      $: {
        openSwitchAccountIdList: this.openSwitchAccountIdList
          ? java.List(
              (this.openSwitchAccountIdList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
