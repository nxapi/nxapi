import { argumentMap, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IImageZipServiceClient {
  initData(): TDubboCallResult<void>;
  sendMail(): TDubboCallResult<void>;
  downLoadImage(String0: JavaString): TDubboCallResult<void>;
}

export const ImageZipServiceClientWrapper = {
  initData: argumentMap,
  sendMail: argumentMap,
  downLoadImage: argumentMap,
};

export function ImageZipServiceClient(dubbo: Dubbo): IImageZipServiceClient {
  return dubbo.proxyService<IImageZipServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.ImageZipServiceClient',
    methods: ImageZipServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
