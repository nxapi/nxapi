import java from 'js-to-java';

export interface IHttpServletResponse {}

export class HttpServletResponse {
  constructor(params: IHttpServletResponse) {}

  __fields2java(): any {
    return {
      $class: 'javax.servlet.http.HttpServletResponse',
      $: {},
    };
  }
}

//generate by interpret-cli dubbo2.js
