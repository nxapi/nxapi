import { RdfaResult } from './../../../../../top/rdfa/framework/biz/ro/RdfaResult';
import { ConsumableInventoryDto } from './../dto/ConsumableInventoryDto';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IConsumableQueryFacadeService {
  isOwnerQualified(Long0: JavaLong): TDubboCallResult<RdfaResult<boolean>>;
  isOwnerInWhiteList(Long0: JavaLong): TDubboCallResult<RdfaResult<boolean>>;
  inventoryCalculation(
    Long0: JavaLong,
  ): TDubboCallResult<RdfaResult<ConsumableInventoryDto>>;
  isInventoryWarning(Long0: JavaLong): TDubboCallResult<RdfaResult<boolean>>;
}

export const ConsumableQueryFacadeServiceWrapper = {
  isOwnerQualified: argumentMap,
  isOwnerInWhiteList: argumentMap,
  inventoryCalculation: argumentMap,
  isInventoryWarning: argumentMap,
};

export function ConsumableQueryFacadeService(
  dubbo: Dubbo,
): IConsumableQueryFacadeService {
  return dubbo.proxyService<IConsumableQueryFacadeService>({
    dubboInterface:
      'com.oyo.dataquery.client.facade.ConsumableQueryFacadeService',
    methods: ConsumableQueryFacadeServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
