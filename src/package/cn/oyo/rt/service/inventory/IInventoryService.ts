import { InventoryQueryRequestV2 } from './request/InventoryQueryRequestV2';
import { InventorySellOutResponse } from './response/InventorySellOutResponse';
import { GetHotelInventoryRequestV2 } from './dto/GetHotelInventoryRequestV2';
import { GetHotelInventoryDTO } from './dto/GetHotelInventoryDTO';
import { InventoryQueryDTO } from './dto/InventoryQueryDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIInventoryService {
  sellOut(
    request: InventoryQueryRequestV2,
  ): TDubboCallResult<Array<InventorySellOutResponse>>;
  getHotelInventory(
    request: GetHotelInventoryRequestV2,
  ): TDubboCallResult<GetHotelInventoryDTO>;
  queryInventory(
    request: InventoryQueryRequestV2,
  ): TDubboCallResult<Array<InventoryQueryDTO>>;
}

export const IInventoryServiceWrapper = {
  sellOut: argumentMap,
  getHotelInventory: argumentMap,
  queryInventory: argumentMap,
};

export function IInventoryService(dubbo: Dubbo): IIInventoryService {
  return dubbo.proxyService<IIInventoryService>({
    dubboInterface: 'cn.oyo.rt.service.inventory.IInventoryService',
    methods: IInventoryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
