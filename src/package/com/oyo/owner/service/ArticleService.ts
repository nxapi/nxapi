import { ArticleCreateRequest } from './../bean/request/ArticleCreateRequest';
import { BaseResponse } from './../../common/response/BaseResponse';
import { ArticleUpdateRequest } from './../bean/request/ArticleUpdateRequest';
import { ArticleShowVO } from './../bean/vo/ArticleShowVO';
import { ArticleCmsDetailVO } from './../bean/vo/ArticleCmsDetailVO';
import { PagedResponse } from './../../common/response/PagedResponse';
import { ArticlePageVO } from './../bean/vo/ArticlePageVO';
import { ArticleDetailVO } from './../bean/vo/ArticleDetailVO';
import { ArticleCmsPageVO } from './../bean/vo/ArticleCmsPageVO';
import { ContentsDeleteRequest } from './../bean/request/ContentsDeleteRequest';
import { argumentMap, JavaString, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IArticleService {
  addArticle(
    ArticleCreateRequest0: ArticleCreateRequest,
  ): TDubboCallResult<BaseResponse>;
  updateArticle(
    ArticleUpdateRequest0: ArticleUpdateRequest,
  ): TDubboCallResult<BaseResponse>;
  queryTop2ArticleInfo(): TDubboCallResult<BaseResponse<Array<ArticleShowVO>>>;
  queryCmsArticleDetailInfo(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<ArticleCmsDetailVO>>;
  queryArticleList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
    Date3: Date,
    Date4: Date,
  ): TDubboCallResult<BaseResponse<PagedResponse<ArticlePageVO>>>;
  queryArticleDetailInfo(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<ArticleDetailVO>>;
  queryCmsArticleList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
    Date3: Date,
    Date4: Date,
  ): TDubboCallResult<BaseResponse<PagedResponse<ArticleCmsPageVO>>>;
  deleteArticle(
    ContentsDeleteRequest0: ContentsDeleteRequest,
  ): TDubboCallResult<BaseResponse>;
}

export const ArticleServiceWrapper = {
  addArticle: argumentMap,
  updateArticle: argumentMap,
  queryTop2ArticleInfo: argumentMap,
  queryCmsArticleDetailInfo: argumentMap,
  queryArticleList: argumentMap,
  queryArticleDetailInfo: argumentMap,
  queryCmsArticleList: argumentMap,
  deleteArticle: argumentMap,
};

export function ArticleService(dubbo: Dubbo): IArticleService {
  return dubbo.proxyService<IArticleService>({
    dubboInterface: 'com.oyo.owner.service.ArticleService',
    methods: ArticleServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
