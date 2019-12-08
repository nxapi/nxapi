import java from 'js-to-java';

export interface IOnsMessageDto {
  messageId?: string;
  topic?: string;
  id?: number;
  tag?: string;
  message?: string;
  status?: number;
}

export class OnsMessageDto {
  constructor(params: IOnsMessageDto) {
    this.messageId = params.messageId;
    this.topic = params.topic;
    this.id = params.id;
    this.tag = params.tag;
    this.message = params.message;
    this.status = params.status;
  }

  messageId?: string;
  topic?: string;
  id?: number;
  tag?: string;
  message?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.OnsMessageDto',
      $: {
        messageId: java.String(this.messageId),
        topic: java.String(this.topic),
        id: java.Integer(this.id),
        tag: java.String(this.tag),
        message: java.String(this.message),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
