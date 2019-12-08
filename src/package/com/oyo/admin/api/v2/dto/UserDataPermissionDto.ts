import { DataPermissionDto } from './DataPermissionDto';
import java from 'js-to-java';

export interface IUserDataPermissionDto {
  dataPermissionDtos?: Array<DataPermissionDto>;
  dataType?: string;
  dataGroupCode?: string;
  dataCode?: string;
  userId?: number;
}

export class UserDataPermissionDto {
  constructor(params: IUserDataPermissionDto) {
    this.dataPermissionDtos = params.dataPermissionDtos;
    this.dataType = params.dataType;
    this.dataGroupCode = params.dataGroupCode;
    this.dataCode = params.dataCode;
    this.userId = params.userId;
  }

  dataPermissionDtos?: Array<DataPermissionDto>;
  dataType?: string;
  dataGroupCode?: string;
  dataCode?: string;
  userId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.v2.dto.UserDataPermissionDto',
      $: {
        dataPermissionDtos: this.dataPermissionDtos
          ? java.List(
              (this.dataPermissionDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        dataType: java.String(this.dataType),
        dataGroupCode: java.String(this.dataGroupCode),
        dataCode: java.String(this.dataCode),
        userId: java.Long(this.userId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
