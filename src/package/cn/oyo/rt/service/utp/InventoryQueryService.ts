import { InventoryQueryRequest } from './request/InventoryQueryRequest';
import { PaginResponseVo } from './../../common/response/PaginResponseVo';
import { InventoryQueryResult } from './response/InventoryQueryResult';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IInventoryQueryService {
  pageQueryInventory(
    inventoryQueryDto: InventoryQueryRequest,
  ): TDubboCallResult<PaginResponseVo<InventoryQueryResult>>;
}

export const InventoryQueryServiceWrapper = {pageQueryInventory: argumentMap};

export function InventoryQueryService(dubbo: Dubbo): IInventoryQueryService {
  return dubbo.proxyService<IInventoryQueryService>({
    dubboInterface: 'cn.oyo.rt.service.utp.InventoryQueryService',
    methods: InventoryQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
