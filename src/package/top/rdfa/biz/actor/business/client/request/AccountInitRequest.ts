import java from 'js-to-java';

export interface IAccountInitRequest {
  password?: string;
  phone?: string;
  name?: string;
  subType?: string;
  type?: string;
  email?: string;
}

export class AccountInitRequest {
  constructor(params: IAccountInitRequest) {
    this.password = params.password;
    this.phone = params.phone;
    this.name = params.name;
    this.subType = params.subType;
    this.type = params.type;
    this.email = params.email;
  }

  password?: string;
  phone?: string;
  name?: string;
  subType?: string;
  type?: string;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.AccountInitRequest',
      $: {
        password: java.String(this.password),
        phone: java.String(this.phone),
        name: java.String(this.name),
        subType: java.String(this.subType),
        type: java.String(this.type),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
