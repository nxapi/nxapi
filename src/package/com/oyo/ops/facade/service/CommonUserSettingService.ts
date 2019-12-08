import { OpenTaskSwitchVO } from './../bean/vo/OpenTaskSwitchVO';
import { argumentMap, JavaInteger, JavaLong, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ICommonUserSettingService {
  getSwitcher(): TDubboCallResult<{[name: string]: Object}>;
  changeSwitcher(Integer0: JavaInteger): TDubboCallResult<void>;
  getSwitcher(Long0: JavaLong): TDubboCallResult<{[name: string]: Object}>;
  querySwitchTask(List0: JavaList): TDubboCallResult<OpenTaskSwitchVO>;
}

export const CommonUserSettingServiceWrapper = {
  getSwitcher: argumentMap,
  changeSwitcher: argumentMap,
  querySwitchTask: argumentMap,
};

export function CommonUserSettingService(
  dubbo: Dubbo,
): ICommonUserSettingService {
  return dubbo.proxyService<ICommonUserSettingService>({
    dubboInterface: 'com.oyo.ops.facade.service.CommonUserSettingService',
    methods: CommonUserSettingServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
