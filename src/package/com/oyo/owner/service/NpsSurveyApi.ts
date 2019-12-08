import { NpsSurveyDto } from './../bean/dto/nps/NpsSurveyDto';
import { BaseResponse } from './../../common/response/BaseResponse';
import { argumentMap, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface INpsSurveyApi {
  createNpsSurvey(NpsSurveyDto0: NpsSurveyDto): TDubboCallResult<BaseResponse>;
  verifyCurrentNpsSurveySubmit(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<boolean>>;
}

export const NpsSurveyApiWrapper = {
  createNpsSurvey: argumentMap,
  verifyCurrentNpsSurveySubmit: argumentMap,
};

export function NpsSurveyApi(dubbo: Dubbo): INpsSurveyApi {
  return dubbo.proxyService<INpsSurveyApi>({
    dubboInterface: 'com.oyo.owner.service.NpsSurveyApi',
    methods: NpsSurveyApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
