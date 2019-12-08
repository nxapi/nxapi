import { BaseResponse } from './../../common/response/BaseResponse';
import { PagedResponse } from './../../common/response/PagedResponse';
import { QuestionOperationVO } from './../bean/vo/QuestionOperationVO';
import { UpdateQuestionReplyRequest } from './../bean/request/UpdateQuestionReplyRequest';
import { QuestionRequest } from './../bean/request/QuestionRequest';
import { DelReplyRequest } from './../bean/request/DelReplyRequest';
import { QuestionReplyVO } from './../bean/vo/QuestionReplyVO';
import { QuestionVO } from './../bean/vo/QuestionVO';
import { DelQuestionRequest } from './../bean/request/DelQuestionRequest';
import { QuestionReplyRequest } from './../bean/request/QuestionReplyRequest';
import { argumentMap, JavaInteger, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ISalonQuestionService {
  operationList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    Date2: Date,
    Date3: Date,
  ): TDubboCallResult<BaseResponse<PagedResponse<QuestionOperationVO>>>;
  updateReply(
    UpdateQuestionReplyRequest0: UpdateQuestionReplyRequest,
  ): TDubboCallResult<BaseResponse>;
  question(QuestionRequest0: QuestionRequest): TDubboCallResult<BaseResponse>;
  delReply(DelReplyRequest0: DelReplyRequest): TDubboCallResult<BaseResponse>;
  replyList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
    Integer3: JavaInteger,
  ): TDubboCallResult<BaseResponse<PagedResponse<QuestionReplyVO>>>;
  detail(String0: JavaString): TDubboCallResult<BaseResponse<QuestionVO>>;
  delQuestion(
    DelQuestionRequest0: DelQuestionRequest,
  ): TDubboCallResult<BaseResponse>;
  list(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
    String3: JavaString,
    Date4: Date,
    Date5: Date,
    Integer6: JavaInteger,
  ): TDubboCallResult<BaseResponse<PagedResponse<QuestionVO>>>;
  replyQuestion(
    QuestionReplyRequest0: QuestionReplyRequest,
  ): TDubboCallResult<BaseResponse>;
}

export const SalonQuestionServiceWrapper = {
  operationList: argumentMap,
  updateReply: argumentMap,
  question: argumentMap,
  delReply: argumentMap,
  replyList: argumentMap,
  detail: argumentMap,
  delQuestion: argumentMap,
  list: argumentMap,
  replyQuestion: argumentMap,
};

export function SalonQuestionService(dubbo: Dubbo): ISalonQuestionService {
  return dubbo.proxyService<ISalonQuestionService>({
    dubboInterface: 'com.oyo.owner.service.SalonQuestionService',
    methods: SalonQuestionServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
