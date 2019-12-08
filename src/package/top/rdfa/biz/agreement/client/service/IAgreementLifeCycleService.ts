import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { ParticipatorType } from './../dto/enums/ParticipatorType';
import { AgreementCodeDto } from './../dto/AgreementCodeDto';
import { argumentMap, JavaLong, JavaMap, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAgreementLifeCycleService {
  updateStatusById(
    Long0: JavaLong,
    Map1: JavaMap,
  ): TDubboCallResult<ClientBaseResponse<boolean>>;
  saveOrUpdateWithInstanceId(
    String0: JavaString,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  reject(
    Long0: JavaLong,
    ParticipatorType1: ParticipatorType,
  ): TDubboCallResult<ClientBaseResponse<boolean>>;
  cancelInprocessAgreement(
    String0: JavaString,
    String1: JavaString,
    Map2: JavaMap,
  ): TDubboCallResult<ClientBaseResponse<{[name: string]: Object}>>;
  updateOwnerAppAgreementLifeCycleStatus(
    String0: JavaString,
    String1: JavaString,
    Date2: Date,
  ): TDubboCallResult<ClientBaseResponse>;
  generateAgreementCode(
    String0: JavaString,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse<AgreementCodeDto>>;
  autoSign(
    Long0: JavaLong,
    ParticipatorType1: ParticipatorType,
  ): TDubboCallResult<ClientBaseResponse<boolean>>;
  ownerAppSaveOrUpdate(
    String0: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  saveOrUpdateWithCheck(
    String0: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  saveOrUpdate(String0: JavaString): TDubboCallResult<ClientBaseResponse>;
  eventHandler(
    Long0: JavaLong,
    String1: JavaString,
    Map2: JavaMap,
  ): TDubboCallResult<ClientBaseResponse<{[name: string]: Object}>>;
}

export const IAgreementLifeCycleServiceWrapper = {
  updateStatusById: argumentMap,
  saveOrUpdateWithInstanceId: argumentMap,
  reject: argumentMap,
  cancelInprocessAgreement: argumentMap,
  updateOwnerAppAgreementLifeCycleStatus: argumentMap,
  generateAgreementCode: argumentMap,
  autoSign: argumentMap,
  ownerAppSaveOrUpdate: argumentMap,
  saveOrUpdateWithCheck: argumentMap,
  saveOrUpdate: argumentMap,
  eventHandler: argumentMap,
};

export function IAgreementLifeCycleService(
  dubbo: Dubbo,
): IIAgreementLifeCycleService {
  return dubbo.proxyService<IIAgreementLifeCycleService>({
    dubboInterface:
      'top.rdfa.biz.agreement.client.service.IAgreementLifeCycleService',
    methods: IAgreementLifeCycleServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
