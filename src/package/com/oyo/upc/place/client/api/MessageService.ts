import { BaseResponse } from './../../../../common/response/BaseResponse';
import { OnsMessageDto } from './../dto/request/OnsMessageDto';
import { TagAndInstanceIdDto } from './../dto/request/TagAndInstanceIdDto';
import { argumentMap, JavaInteger, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IMessageService {
  queryByStatus(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<OnsMessageDto>>>;
  queryByTagAndInstanceId(
    TagAndInstanceIdDto0: TagAndInstanceIdDto,
  ): TDubboCallResult<BaseResponse<Array<OnsMessageDto>>>;
  queryByMessageId(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<OnsMessageDto>>;
  updateMessageMessageId(
    OnsMessageDto0: OnsMessageDto,
  ): TDubboCallResult<number>;
  updateMessage(OnsMessageDto0: OnsMessageDto): TDubboCallResult<number>;
  saveMessage(OnsMessageDto0: OnsMessageDto): TDubboCallResult<number>;
}

export const MessageServiceWrapper = {
  queryByStatus: argumentMap,
  queryByTagAndInstanceId: argumentMap,
  queryByMessageId: argumentMap,
  updateMessageMessageId: argumentMap,
  updateMessage: argumentMap,
  saveMessage: argumentMap,
};

export function MessageService(dubbo: Dubbo): IMessageService {
  return dubbo.proxyService<IMessageService>({
    dubboInterface: 'com.oyo.upc.place.client.api.MessageService',
    methods: MessageServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
