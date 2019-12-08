import { CommentSearchRequest } from './request/CommentSearchRequest';
import { Response } from './../../common/bean/Response';
import { CommentResp } from './response/CommentResp';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ISearchCommentRemoteService {
  getCommentList(
    CommentSearchRequest0: CommentSearchRequest,
  ): TDubboCallResult<Response<CommentResp>>;
}

export const SearchCommentRemoteServiceWrapper = {getCommentList: argumentMap};

export function SearchCommentRemoteService(
  dubbo: Dubbo,
): ISearchCommentRemoteService {
  return dubbo.proxyService<ISearchCommentRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.SearchCommentRemoteService',
    methods: SearchCommentRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
