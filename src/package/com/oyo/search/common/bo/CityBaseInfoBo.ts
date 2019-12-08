import java from 'js-to-java';

export interface ICityBaseInfoBo {
  pinyin?: string;
  nameHighlight?: string;
  relevanceScore?: number;
  stateName?: string;
  stateId?: number;
  name?: string;
  id?: number;
  status?: number;
}

export class CityBaseInfoBo {
  constructor(params: ICityBaseInfoBo) {
    this.pinyin = params.pinyin;
    this.nameHighlight = params.nameHighlight;
    this.relevanceScore = params.relevanceScore;
    this.stateName = params.stateName;
    this.stateId = params.stateId;
    this.name = params.name;
    this.id = params.id;
    this.status = params.status;
  }

  pinyin?: string;
  nameHighlight?: string;
  relevanceScore?: number;
  stateName?: string;
  stateId?: number;
  name?: string;
  id?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.common.bo.CityBaseInfoBo',
      $: {
        pinyin: java.String(this.pinyin),
        nameHighlight: java.String(this.nameHighlight),
        relevanceScore: java.Float(this.relevanceScore),
        stateName: java.String(this.stateName),
        stateId: java.Integer(this.stateId),
        name: java.String(this.name),
        id: java.Integer(this.id),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
