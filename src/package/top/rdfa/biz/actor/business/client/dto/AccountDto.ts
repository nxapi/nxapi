import { UserDto } from './UserDto';
import java from 'js-to-java';

export interface IAccountDto {
  merchantCode?: string;
  ticket?: string;
  accountName?: string;
  firstLogin?: boolean;
  accountType?: string;
  available?: boolean;
  userCode?: number;
  valid?: boolean;
  accountId?: number;
  phone?: string;
  dirLeader?: AccountDto;
  user?: UserDto;
  email?: string;
}

export class AccountDto {
  constructor(params: IAccountDto) {
    this.merchantCode = params.merchantCode;
    this.ticket = params.ticket;
    this.accountName = params.accountName;
    this.firstLogin = params.firstLogin;
    this.accountType = params.accountType;
    this.available = params.available;
    this.userCode = params.userCode;
    this.valid = params.valid;
    this.accountId = params.accountId;
    this.phone = params.phone;
    this.dirLeader = params.dirLeader;
    this.user = params.user;
    this.email = params.email;
  }

  merchantCode?: string;
  ticket?: string;
  accountName?: string;
  firstLogin?: boolean;
  accountType?: string;
  available?: boolean;
  userCode?: number;
  valid?: boolean;
  accountId?: number;
  phone?: string;
  dirLeader?: AccountDto;
  user?: UserDto;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.AccountDto',
      $: {
        merchantCode: java.String(this.merchantCode),
        ticket: java.String(this.ticket),
        accountName: java.String(this.accountName),
        firstLogin: java.Boolean(this.firstLogin),
        accountType: java.String(this.accountType),
        available: java.Boolean(this.available),
        userCode: java.Long(this.userCode),
        valid: java.Boolean(this.valid),
        accountId: java.Long(this.accountId),
        phone: java.String(this.phone),
        dirLeader: this.dirLeader ? this.dirLeader.__fields2java() : null,
        user: this.user ? this.user.__fields2java() : null,
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
