import java from 'js-to-java';

export interface ITag {
  tagCategory?: string;
  tagCode?: string;
  tagType?: string;
  tagName?: string;
}

export class Tag {
  constructor(params: ITag) {
    this.tagCategory = params.tagCategory;
    this.tagCode = params.tagCode;
    this.tagType = params.tagType;
    this.tagName = params.tagName;
  }

  tagCategory?: string;
  tagCode?: string;
  tagType?: string;
  tagName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.bean.Tag',
      $: {
        tagCategory: java.String(this.tagCategory),
        tagCode: java.String(this.tagCode),
        tagType: java.String(this.tagType),
        tagName: java.String(this.tagName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
