import { RateCodeQueryRequest } from './../../controller/request/product/RateCodeQueryRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { RemoteRateCodeWithRateVO } from './../../remote/rate/vo/RemoteRateCodeWithRateVO';
import { ProductListRequest } from './../../controller/request/product/ProductListRequest';
import { ProductVO } from './../../controller/vo/product/ProductVO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IProductServiceClient {
  searchRateCodeNameList(
    RateCodeQueryRequest0: RateCodeQueryRequest,
  ): TDubboCallResult<BaseResponse<Array<RemoteRateCodeWithRateVO>>>;
  products(
    ProductListRequest0: ProductListRequest,
  ): TDubboCallResult<BaseResponse<Array<ProductVO>>>;
}

export const ProductServiceClientWrapper = {
  searchRateCodeNameList: argumentMap,
  products: argumentMap,
};

export function ProductServiceClient(dubbo: Dubbo): IProductServiceClient {
  return dubbo.proxyService<IProductServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.ProductServiceClient',
    methods: ProductServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
