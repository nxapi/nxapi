import java from 'js-to-java';

export interface IMetadataConfigurationBO {
  code?: number;
  description?: string;
  id?: number;
  type?: string;
}

export class MetadataConfigurationBO {
  constructor(params: IMetadataConfigurationBO) {
    this.code = params.code;
    this.description = params.description;
    this.id = params.id;
    this.type = params.type;
  }

  code?: number;
  description?: string;
  id?: number;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.metadata.MetadataConfigurationBO',
      $: {
        code: java.Integer(this.code),
        description: java.String(this.description),
        id: java.Integer(this.id),
        type: java.String(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
