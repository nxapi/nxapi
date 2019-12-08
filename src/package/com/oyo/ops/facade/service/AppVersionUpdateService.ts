import { VersionUpdateRequest } from './../bean/request/appupdate/VersionUpdateRequest';
import { VersionUpdateVO } from './../bean/vo/VersionUpdateVO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IAppVersionUpdateService {
  getAppVersionUpdateInfo(
    VersionUpdateRequest0: VersionUpdateRequest,
  ): TDubboCallResult<VersionUpdateVO>;
}

export const AppVersionUpdateServiceWrapper = {
  getAppVersionUpdateInfo: argumentMap,
};

export function AppVersionUpdateService(
  dubbo: Dubbo,
): IAppVersionUpdateService {
  return dubbo.proxyService<IAppVersionUpdateService>({
    dubboInterface: 'com.oyo.ops.facade.service.AppVersionUpdateService',
    methods: AppVersionUpdateServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
