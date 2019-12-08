import java from 'js-to-java';

export interface IHttpServletRequest {}

export class HttpServletRequest {
  constructor(params: IHttpServletRequest) {}

  __fields2java(): any {
    return {
      $class: 'javax.servlet.http.HttpServletRequest',
      $: {},
    };
  }
}

//generate by interpret-cli dubbo2.js
