import { BaseResponse } from './../../common/response/BaseResponse';
import { PagedResponse } from './../../common/response/PagedResponse';
import { MaterielApplyListVo } from './../bean/vo/MaterielApplyListVo';
import { MaterielApplyRequest } from './../bean/request/MaterielApplyRequest';
import { argumentMap, JavaLong, JavaInteger, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IMaterielApi {
  applyListByPage(
    Long0: JavaLong,
    Integer1: JavaInteger,
    Integer2: JavaInteger,
  ): TDubboCallResult<BaseResponse<PagedResponse<MaterielApplyListVo>>>;
  apply(
    MaterielApplyRequest0: MaterielApplyRequest,
  ): TDubboCallResult<BaseResponse<boolean>>;
  batchNoIfApply(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<string>>>;
}

export const MaterielApiWrapper = {
  applyListByPage: argumentMap,
  apply: argumentMap,
  batchNoIfApply: argumentMap,
};

export function MaterielApi(dubbo: Dubbo): IMaterielApi {
  return dubbo.proxyService<IMaterielApi>({
    dubboInterface: 'com.oyo.owner.service.MaterielApi',
    methods: MaterielApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
