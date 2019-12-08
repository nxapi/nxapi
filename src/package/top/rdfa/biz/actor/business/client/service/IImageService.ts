import { ImageRequest } from './../request/ImageRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { ImageDTO } from './../dto/ImageDTO';
import { ImageQuery } from './../request/ImageQuery';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIImageService {
  batchSaveImages(
    ImageRequest0: ImageRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<ImageDTO>>>;
  getImages(
    ImageQuery0: ImageQuery,
  ): TDubboCallResult<ClientBaseResponse<Array<ImageDTO>>>;
}

export const IImageServiceWrapper = {
  batchSaveImages: argumentMap,
  getImages: argumentMap,
};

export function IImageService(dubbo: Dubbo): IIImageService {
  return dubbo.proxyService<IIImageService>({
    dubboInterface: 'top.rdfa.biz.actor.business.client.service.IImageService',
    methods: IImageServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
