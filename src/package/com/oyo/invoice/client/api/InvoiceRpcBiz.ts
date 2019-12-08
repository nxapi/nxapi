import { CancelInvoiceDTO } from './../request/CancelInvoiceDTO';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { CancelInvoiceVO } from './../response/CancelInvoiceVO';
import { QueryBuyerDTO } from './../request/QueryBuyerDTO';
import { InvoiceBuyerVO } from './../response/InvoiceBuyerVO';
import { QueryInvoiceDTO } from './../request/QueryInvoiceDTO';
import { QueryInvoiceVO } from './../response/QueryInvoiceVO';
import { CreateInvoiceDTO } from './../request/CreateInvoiceDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IInvoiceRpcBiz {
  cancelInvoice(
    CancelInvoiceDTO0: CancelInvoiceDTO,
  ): TDubboCallResult<BaseResponse<CancelInvoiceVO>>;
  queryBuyer(
    QueryBuyerDTO0: QueryBuyerDTO,
  ): TDubboCallResult<BaseResponse<InvoiceBuyerVO>>;
  queryInvoice(
    QueryInvoiceDTO0: QueryInvoiceDTO,
  ): TDubboCallResult<BaseResponse<QueryInvoiceVO>>;
  createInvoice(
    CreateInvoiceDTO0: CreateInvoiceDTO,
  ): TDubboCallResult<BaseResponse<string>>;
}

export const InvoiceRpcBizWrapper = {
  cancelInvoice: argumentMap,
  queryBuyer: argumentMap,
  queryInvoice: argumentMap,
  createInvoice: argumentMap,
};

export function InvoiceRpcBiz(dubbo: Dubbo): IInvoiceRpcBiz {
  return dubbo.proxyService<IInvoiceRpcBiz>({
    dubboInterface: 'com.oyo.invoice.client.api.InvoiceRpcBiz',
    methods: InvoiceRpcBizWrapper,
  });
}

//generate by interpret-cli dubbo2.js
