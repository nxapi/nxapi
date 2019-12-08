import { MaterielApplyItemRequest } from './MaterielApplyItemRequest';
import java from 'js-to-java';

export interface IMaterielApplyRequest {
  accountId?: number;
  contactName?: string;
  hotelAddress?: string;
  itemList?: Array<MaterielApplyItemRequest>;
  hotelId?: number;
  hotelName?: string;
  contactTell?: string;
}

export class MaterielApplyRequest {
  constructor(params: IMaterielApplyRequest) {
    this.accountId = params.accountId;
    this.contactName = params.contactName;
    this.hotelAddress = params.hotelAddress;
    this.itemList = params.itemList;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.contactTell = params.contactTell;
  }

  accountId?: number;
  contactName?: string;
  hotelAddress?: string;
  itemList?: Array<MaterielApplyItemRequest>;
  hotelId?: number;
  hotelName?: string;
  contactTell?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.MaterielApplyRequest',
      $: {
        accountId: java.Long(this.accountId),
        contactName: java.String(this.contactName),
        hotelAddress: java.String(this.hotelAddress),
        itemList: this.itemList
          ? java.List(
              (this.itemList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        contactTell: java.String(this.contactTell),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
