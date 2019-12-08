import { BannerStatusUpdateRequest } from './../bean/request/BannerStatusUpdateRequest';
import { BaseResponse } from './../../common/response/BaseResponse';
import { BannerDetailVO } from './../bean/vo/BannerDetailVO';
import { BannerCreateRequest } from './../bean/request/BannerCreateRequest';
import { PagedResponse } from './../../common/response/PagedResponse';
import { BannerPageVO } from './../bean/vo/BannerPageVO';
import { BannerCmsDetailVO } from './../bean/vo/BannerCmsDetailVO';
import { BannerUpdateRequest } from './../bean/request/BannerUpdateRequest';
import { BannerShowVO } from './../bean/vo/BannerShowVO';
import { argumentMap, JavaString, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IBannerService {
  updateBannerStatus(
    BannerStatusUpdateRequest0: BannerStatusUpdateRequest,
  ): TDubboCallResult<BaseResponse>;
  queryBannerDetailInfo(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<BannerDetailVO>>;
  addBannerInfo(
    BannerCreateRequest0: BannerCreateRequest,
  ): TDubboCallResult<BaseResponse>;
  queryBannerInfoByPage(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
  ): TDubboCallResult<BaseResponse<PagedResponse<BannerPageVO>>>;
  queryCmsBannerDetailInfo(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<BannerCmsDetailVO>>;
  updateBannerInfo(
    BannerUpdateRequest0: BannerUpdateRequest,
  ): TDubboCallResult<BaseResponse>;
  queryBannerByLocation(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<Array<BannerShowVO>>>;
}

export const BannerServiceWrapper = {
  updateBannerStatus: argumentMap,
  queryBannerDetailInfo: argumentMap,
  addBannerInfo: argumentMap,
  queryBannerInfoByPage: argumentMap,
  queryCmsBannerDetailInfo: argumentMap,
  updateBannerInfo: argumentMap,
  queryBannerByLocation: argumentMap,
};

export function BannerService(dubbo: Dubbo): IBannerService {
  return dubbo.proxyService<IBannerService>({
    dubboInterface: 'com.oyo.owner.service.BannerService',
    methods: BannerServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
