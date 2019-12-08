import java from 'js-to-java';

export interface IRelationMapConvertDto {
  relationMapData?: {[name: string]: string};
  convertType?: string;
  multiRelationMapDatas?: Map<Object, Array<Object>>;
}

export class RelationMapConvertDto {
  constructor(params: IRelationMapConvertDto) {
    this.relationMapData = params.relationMapData;
    this.convertType = params.convertType;
    this.multiRelationMapDatas = params.multiRelationMapDatas;
  }

  relationMapData?: {[name: string]: string};
  convertType?: string;
  multiRelationMapDatas?: Map<Object, Array<Object>>;

  __fields2java(): any {
    let relationMapDataMapTransfer = new Map();
    for (let mapKey in this.relationMapData) {
      relationMapDataMapTransfer.set(
        java.String(mapKey),
        java.String(this.relationMapData[mapKey]),
      );
    }
    let multiRelationMapDatasMapTransfer = new Map();
    for (let mapKey in this.multiRelationMapDatas) {
      multiRelationMapDatasMapTransfer.set(
        mapKey && mapKey['__fields2java'] ? mapKey['__fields2java']() : mapKey,
        java.List(
          this.multiRelationMapDatas[mapKey].map((paramItem: any) => {
            return paramItem && paramItem['__fields2java']
              ? paramItem['__fields2java']()
              : paramItem;
          }),
        ),
      );
    }
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.RelationMapConvertDto',
      $: {
        relationMapData: java.Map(relationMapDataMapTransfer),
        convertType: java.String(this.convertType),
        multiRelationMapDatas: java.Map(multiRelationMapDatasMapTransfer),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
