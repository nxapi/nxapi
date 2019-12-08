import { ContentsDeleteRequest } from './../bean/request/ContentsDeleteRequest';
import { BaseResponse } from './../../common/response/BaseResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IContentService {
  addCancelFavorite(
    ContentsDeleteRequest0: ContentsDeleteRequest,
  ): TDubboCallResult<BaseResponse>;
}

export const ContentServiceWrapper = {addCancelFavorite: argumentMap};

export function ContentService(dubbo: Dubbo): IContentService {
  return dubbo.proxyService<IContentService>({
    dubboInterface: 'com.oyo.owner.service.ContentService',
    methods: ContentServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
