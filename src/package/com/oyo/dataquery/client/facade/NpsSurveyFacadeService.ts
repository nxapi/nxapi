import { NpsQueryWithDateReqDto } from './../request/NpsQueryWithDateReqDto';
import { RdfaResult } from './../../../../../top/rdfa/framework/biz/ro/RdfaResult';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface INpsSurveyFacadeService {
  npsQueryWithDate(
    NpsQueryWithDateReqDto0: NpsQueryWithDateReqDto,
  ): TDubboCallResult<RdfaResult<any>>;
}

export const NpsSurveyFacadeServiceWrapper = {npsQueryWithDate: argumentMap};

export function NpsSurveyFacadeService(dubbo: Dubbo): INpsSurveyFacadeService {
  return dubbo.proxyService<INpsSurveyFacadeService>({
    dubboInterface: 'com.oyo.dataquery.client.facade.NpsSurveyFacadeService',
    methods: NpsSurveyFacadeServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
