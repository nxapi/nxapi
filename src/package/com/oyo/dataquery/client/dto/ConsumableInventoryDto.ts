import { ApplyDetailDto } from './ApplyDetailDto';
import { InventoryCalculationDto } from './InventoryCalculationDto';
import java from 'js-to-java';

export interface IConsumableInventoryDto {
  applyDetail?: ApplyDetailDto;
  inventoryCalculation?: Array<InventoryCalculationDto>;
}

export class ConsumableInventoryDto {
  constructor(params: IConsumableInventoryDto) {
    this.applyDetail = params.applyDetail;
    this.inventoryCalculation = params.inventoryCalculation;
  }

  applyDetail?: ApplyDetailDto;
  inventoryCalculation?: Array<InventoryCalculationDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.ConsumableInventoryDto',
      $: {
        applyDetail: this.applyDetail ? this.applyDetail.__fields2java() : null,
        inventoryCalculation: this.inventoryCalculation
          ? java.List(
              (this.inventoryCalculation || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
