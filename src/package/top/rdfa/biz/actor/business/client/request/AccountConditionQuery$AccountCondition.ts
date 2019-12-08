import { AccountConditionQuery } from './AccountConditionQuery';
import java from 'js-to-java';

export interface IAccountConditionQuery$AccountCondition {
  phone?: string;
  this$0?: AccountConditionQuery;
  name?: string;
  email?: string;
}

export class AccountConditionQuery$AccountCondition {
  constructor(params: IAccountConditionQuery$AccountCondition) {
    this.phone = params.phone;
    this.this$0 = params.this$0;
    this.name = params.name;
    this.email = params.email;
  }

  phone?: string;
  this$0?: AccountConditionQuery;
  name?: string;
  email?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.AccountConditionQuery$AccountCondition',
      $: {
        phone: java.String(this.phone),
        this$0: this.this$0 ? this.this$0.__fields2java() : null,
        name: java.String(this.name),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
