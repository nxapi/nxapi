import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { ClientCooperationPlanQueryRequest } from './../request/ClientCooperationPlanQueryRequest';
import { CooperationPlanRelationRequest } from './../request/CooperationPlanRelationRequest';
import { argumentMap, JavaLong, JavaString, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IICooperationPlanRpcService {
  queryByIdOrCode(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  queryByHotelBizId(
    ClientCooperationPlanQueryRequest0: ClientCooperationPlanQueryRequest,
  ): TDubboCallResult<ClientBaseResponse>;
  deleteCooperationPlanById(
    Long0: JavaLong,
  ): TDubboCallResult<ClientBaseResponse>;
  updateCooperationPlan(
    String0: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  updatePlanStatus(
    Long0: JavaLong,
    String1: JavaString,
    Integer2: JavaInteger,
    String3: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  queryRelCooperationPlan(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  saveCooperationPlan(
    String0: JavaString,
  ): TDubboCallResult<ClientBaseResponse>;
  saveCooperationPlanRelation(
    CooperationPlanRelationRequest0: CooperationPlanRelationRequest,
  ): TDubboCallResult<ClientBaseResponse>;
}

export const ICooperationPlanRpcServiceWrapper = {
  queryByIdOrCode: argumentMap,
  queryByHotelBizId: argumentMap,
  deleteCooperationPlanById: argumentMap,
  updateCooperationPlan: argumentMap,
  updatePlanStatus: argumentMap,
  queryRelCooperationPlan: argumentMap,
  saveCooperationPlan: argumentMap,
  saveCooperationPlanRelation: argumentMap,
};

export function ICooperationPlanRpcService(
  dubbo: Dubbo,
): IICooperationPlanRpcService {
  return dubbo.proxyService<IICooperationPlanRpcService>({
    dubboInterface:
      'top.rdfa.biz.agreement.client.service.ICooperationPlanRpcService',
    methods: ICooperationPlanRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
