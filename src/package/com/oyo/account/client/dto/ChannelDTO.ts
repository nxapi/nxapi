import java from 'js-to-java';

export interface IChannelDTO {
  sourceCode?: string;
  bookCode?: string;
  sourceType?: string;
  sourceName?: string;
}

export class ChannelDTO {
  constructor(params: IChannelDTO) {
    this.sourceCode = params.sourceCode;
    this.bookCode = params.bookCode;
    this.sourceType = params.sourceType;
    this.sourceName = params.sourceName;
  }

  sourceCode?: string;
  bookCode?: string;
  sourceType?: string;
  sourceName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.ChannelDTO',
      $: {
        sourceCode: java.String(this.sourceCode),
        bookCode: java.String(this.bookCode),
        sourceType: java.String(this.sourceType),
        sourceName: java.String(this.sourceName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
