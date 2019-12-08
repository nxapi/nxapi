import { AggregationStaffRequest } from './request/AggregationStaffRequest';
import { AggregationStaffVO } from './dto/AggregationStaffVO';
import { AggregationPermissionVO } from './dto/AggregationPermissionVO';
import { argumentMap, JavaLong, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IAggregationPermissionService {
  queryStaffsByCodeAndDataIds(
    AggregationStaffRequest0: AggregationStaffRequest,
  ): TDubboCallResult<AggregationStaffVO>;
  getPermissionByUserIdAndCode(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<AggregationPermissionVO>;
  hasCode(
    Long0: JavaLong,
    String1: JavaString,
    Long2: JavaLong,
  ): TDubboCallResult<boolean>;
  hasFunctionPermissionCodeInApp(
    Long0: JavaLong,
    String1: JavaString,
    String2: JavaString,
  ): TDubboCallResult<boolean>;
}

export const AggregationPermissionServiceWrapper = {
  queryStaffsByCodeAndDataIds: argumentMap,
  getPermissionByUserIdAndCode: argumentMap,
  hasCode: argumentMap,
  hasFunctionPermissionCodeInApp: argumentMap,
};

export function AggregationPermissionService(
  dubbo: Dubbo,
): IAggregationPermissionService {
  return dubbo.proxyService<IAggregationPermissionService>({
    dubboInterface: 'com.oyo.admin.api.AggregationPermissionService',
    methods: AggregationPermissionServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
