import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IResourceQuery {
  merchantCode?: string;
  languageType?: LanguageType;
  roleIds?: Array<number>;
  roleCode?: string;
  appKey?: string;
  queryType?: string;
}

export class ResourceQuery {
  constructor(params: IResourceQuery) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.roleIds = params.roleIds;
    this.roleCode = params.roleCode;
    this.appKey = params.appKey;
    this.queryType = params.queryType;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  roleIds?: Array<number>;
  roleCode?: string;
  appKey?: string;
  queryType?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.ResourceQuery',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        roleIds: this.roleIds
          ? java.List(
              (this.roleIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        roleCode: java.String(this.roleCode),
        appKey: java.String(this.appKey),
        queryType: java.String(this.queryType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
