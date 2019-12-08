import java from 'js-to-java';

export interface ILoginLogoutRecordDto {
  corporationId?: string;
  loginChannel?: string;
  accountName?: string;
  logoutChannel?: string;
  loginTicket?: string;
  logoutResultCode?: string;
  logoutTicket?: string;
  loginPlatform?: string;
  positionName?: string;
  accountId?: number;
  logoutTime?: string;
  accountEmail?: string;
  loginTime?: string;
  logoutPlatform?: string;
  accountPhone?: string;
  positionId?: string;
  loginDeviceId?: string;
  logoutDeviceId?: string;
  loginIp?: string;
  logoutIp?: string;
  loginResultCode?: string;
}

export class LoginLogoutRecordDto {
  constructor(params: ILoginLogoutRecordDto) {
    this.corporationId = params.corporationId;
    this.loginChannel = params.loginChannel;
    this.accountName = params.accountName;
    this.logoutChannel = params.logoutChannel;
    this.loginTicket = params.loginTicket;
    this.logoutResultCode = params.logoutResultCode;
    this.logoutTicket = params.logoutTicket;
    this.loginPlatform = params.loginPlatform;
    this.positionName = params.positionName;
    this.accountId = params.accountId;
    this.logoutTime = params.logoutTime;
    this.accountEmail = params.accountEmail;
    this.loginTime = params.loginTime;
    this.logoutPlatform = params.logoutPlatform;
    this.accountPhone = params.accountPhone;
    this.positionId = params.positionId;
    this.loginDeviceId = params.loginDeviceId;
    this.logoutDeviceId = params.logoutDeviceId;
    this.loginIp = params.loginIp;
    this.logoutIp = params.logoutIp;
    this.loginResultCode = params.loginResultCode;
  }

  corporationId?: string;
  loginChannel?: string;
  accountName?: string;
  logoutChannel?: string;
  loginTicket?: string;
  logoutResultCode?: string;
  logoutTicket?: string;
  loginPlatform?: string;
  positionName?: string;
  accountId?: number;
  logoutTime?: string;
  accountEmail?: string;
  loginTime?: string;
  logoutPlatform?: string;
  accountPhone?: string;
  positionId?: string;
  loginDeviceId?: string;
  logoutDeviceId?: string;
  loginIp?: string;
  logoutIp?: string;
  loginResultCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.LoginLogoutRecordDto',
      $: {
        corporationId: java.String(this.corporationId),
        loginChannel: java.String(this.loginChannel),
        accountName: java.String(this.accountName),
        logoutChannel: java.String(this.logoutChannel),
        loginTicket: java.String(this.loginTicket),
        logoutResultCode: java.String(this.logoutResultCode),
        logoutTicket: java.String(this.logoutTicket),
        loginPlatform: java.String(this.loginPlatform),
        positionName: java.String(this.positionName),
        accountId: java.Long(this.accountId),
        logoutTime: java.String(this.logoutTime),
        accountEmail: java.String(this.accountEmail),
        loginTime: java.String(this.loginTime),
        logoutPlatform: java.String(this.logoutPlatform),
        accountPhone: java.String(this.accountPhone),
        positionId: java.String(this.positionId),
        loginDeviceId: java.String(this.loginDeviceId),
        logoutDeviceId: java.String(this.logoutDeviceId),
        loginIp: java.String(this.loginIp),
        logoutIp: java.String(this.logoutIp),
        loginResultCode: java.String(this.loginResultCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
