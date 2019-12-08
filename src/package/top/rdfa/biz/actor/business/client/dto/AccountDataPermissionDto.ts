import { DataPermissionDto } from './DataPermissionDto';
import { AccountDto } from './AccountDto';
import java from 'js-to-java';

export interface IAccountDataPermissionDto {
  dataPermissionMap?: {[name: string]: Array<DataPermissionDto>};
  account?: AccountDto;
}

export class AccountDataPermissionDto {
  constructor(params: IAccountDataPermissionDto) {
    this.dataPermissionMap = params.dataPermissionMap;
    this.account = params.account;
  }

  dataPermissionMap?: {[name: string]: Array<DataPermissionDto>};
  account?: AccountDto;

  __fields2java(): any {
    let dataPermissionMapMapTransfer = new Map();
    for (let mapKey in this.dataPermissionMap) {
      dataPermissionMapMapTransfer.set(
        java.String(mapKey),
        java.List(
          this.dataPermissionMap[mapKey].map((paramItem: any) => {
            return paramItem ? paramItem.__fields2java() : null;
          }),
        ),
      );
    }
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.AccountDataPermissionDto',
      $: {
        dataPermissionMap: java.Map(dataPermissionMapMapTransfer),
        account: this.account ? this.account.__fields2java() : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
