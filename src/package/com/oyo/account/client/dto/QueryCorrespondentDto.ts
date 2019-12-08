import { HttpServletRequest } from './../../../../../javax/servlet/http/HttpServletRequest';
import { HttpServletResponse } from './../../../../../javax/servlet/http/HttpServletResponse';
import java from 'js-to-java';

export interface IQueryCorrespondentDto {
  firstChannel?: string;
  request?: HttpServletRequest;
  appVersion?: string;
  method?: string;
  pageSize?: number;
  deviceName?: string;
  pageNum?: number;
  token?: string;
  deviceToken?: string;
  serialVersionUID?: number;
  secondChannel?: string;
  osVersion?: string;
  response?: HttpServletResponse;
  jointName?: string;
  jointNumber?: string;
}

export class QueryCorrespondentDto {
  constructor(params: IQueryCorrespondentDto) {
    this.firstChannel = params.firstChannel;
    this.request = params.request;
    this.appVersion = params.appVersion;
    this.method = params.method;
    this.pageSize = params.pageSize;
    this.deviceName = params.deviceName;
    this.pageNum = params.pageNum;
    this.token = params.token;
    this.deviceToken = params.deviceToken;
    this.serialVersionUID = params.serialVersionUID;
    this.secondChannel = params.secondChannel;
    this.osVersion = params.osVersion;
    this.response = params.response;
    this.jointName = params.jointName;
    this.jointNumber = params.jointNumber;
  }

  firstChannel?: string;
  request?: HttpServletRequest;
  appVersion?: string;
  method?: string;
  pageSize?: number;
  deviceName?: string;
  pageNum?: number;
  token?: string;
  deviceToken?: string;
  serialVersionUID?: number;
  secondChannel?: string;
  osVersion?: string;
  response?: HttpServletResponse;
  jointName?: string;
  jointNumber?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.QueryCorrespondentDto',
      $: {
        firstChannel: java.String(this.firstChannel),
        request: this.request['__fields2java']
          ? this.request['__fields2java']()
          : this.request,
        appVersion: java.String(this.appVersion),
        method: java.String(this.method),
        pageSize: java.Integer(this.pageSize),
        deviceName: java.String(this.deviceName),
        pageNum: java.Integer(this.pageNum),
        token: java.String(this.token),
        deviceToken: java.String(this.deviceToken),
        serialVersionUID: java.Long(this.serialVersionUID),
        secondChannel: java.String(this.secondChannel),
        osVersion: java.String(this.osVersion),
        response: this.response['__fields2java']
          ? this.response['__fields2java']()
          : this.response,
        jointName: java.String(this.jointName),
        jointNumber: java.String(this.jointNumber),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
