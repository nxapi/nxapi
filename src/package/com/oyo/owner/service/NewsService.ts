import { BaseResponse } from './../../common/response/BaseResponse';
import { NewsAppVO } from './../bean/vo/NewsAppVO';
import { PagedResponse } from './../../common/response/PagedResponse';
import { NewsPageVO } from './../bean/vo/NewsPageVO';
import { NewsShow2VO } from './../bean/vo/NewsShow2VO';
import { NewsCreateRequest } from './../bean/request/NewsCreateRequest';
import { ContentsDeleteRequest } from './../bean/request/ContentsDeleteRequest';
import { NewsUpdateRequest } from './../bean/request/NewsUpdateRequest';
import { NewsCmsVO } from './../bean/vo/NewsCmsVO';
import { TopNewsVO } from './../bean/vo/TopNewsVO';
import { NewsShowVO } from './../bean/vo/NewsShowVO';
import { argumentMap, JavaString, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface INewsService {
  queryAppNewsDetailInfo(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<NewsAppVO>>;
  queryNewsList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
    Date3: Date,
    Date4: Date,
  ): TDubboCallResult<BaseResponse<PagedResponse<NewsPageVO>>>;
  queryTop5AllNewsInfo(): TDubboCallResult<BaseResponse<Array<NewsShow2VO>>>;
  addNews(
    NewsCreateRequest0: NewsCreateRequest,
  ): TDubboCallResult<BaseResponse>;
  deleteNews(
    ContentsDeleteRequest0: ContentsDeleteRequest,
  ): TDubboCallResult<BaseResponse>;
  updateNews(
    NewsUpdateRequest0: NewsUpdateRequest,
  ): TDubboCallResult<BaseResponse>;
  queryCmsNewsDetailInfo(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<NewsCmsVO>>;
  queryTopNewsInfo(): TDubboCallResult<BaseResponse<TopNewsVO>>;
  queryTradeOrOyoNewsList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
  ): TDubboCallResult<BaseResponse<PagedResponse<NewsShowVO>>>;
}

export const NewsServiceWrapper = {
  queryAppNewsDetailInfo: argumentMap,
  queryNewsList: argumentMap,
  queryTop5AllNewsInfo: argumentMap,
  addNews: argumentMap,
  deleteNews: argumentMap,
  updateNews: argumentMap,
  queryCmsNewsDetailInfo: argumentMap,
  queryTopNewsInfo: argumentMap,
  queryTradeOrOyoNewsList: argumentMap,
};

export function NewsService(dubbo: Dubbo): INewsService {
  return dubbo.proxyService<INewsService>({
    dubboInterface: 'com.oyo.owner.service.NewsService',
    methods: NewsServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
