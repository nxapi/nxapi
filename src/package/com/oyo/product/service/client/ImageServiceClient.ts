import { RemoveImageRequest } from './../../controller/request/image/RemoveImageRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HotelRoomImageVO } from './../../controller/vo/image/HotelRoomImageVO';
import { HotelImageCategoryVO } from './../../controller/vo/image/HotelImageCategoryVO';
import { ChangeCategoryRequest } from './../../controller/request/image/ChangeCategoryRequest';
import { HotelIndexImageVO } from './../../controller/vo/image/HotelIndexImageVO';
import { ChangePriorityRequest } from './../../controller/request/image/ChangePriorityRequest';
import { HotelImageTypeVO } from './../../controller/vo/image/HotelImageTypeVO';
import { HotelRoomImageRequest } from './../../controller/request/image/HotelRoomImageRequest';
import { ImageFullInfoDto } from './../dto/ImageFullInfoDto';
import { ImageUploadVO } from './../../controller/vo/image/ImageUploadVO';
import { HotelImageVO } from './../../controller/vo/image/HotelImageVO';
import { argumentMap, JavaLong, JavaList, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IImageServiceClient {
  removeImage(
    RemoveImageRequest0: RemoveImageRequest,
  ): TDubboCallResult<BaseResponse>;
  getHotelRoomImage(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelRoomImageVO>>>;
  getHotelImageCategoryList(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelImageCategoryVO>>>;
  changeCategory(
    ChangeCategoryRequest0: ChangeCategoryRequest,
  ): TDubboCallResult<BaseResponse>;
  getHotelIndexImage(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelIndexImageVO>>>;
  changePriority(
    ChangePriorityRequest0: ChangePriorityRequest,
  ): TDubboCallResult<BaseResponse>;
  getHotelImageTypeList(): TDubboCallResult<
    BaseResponse<Array<HotelImageTypeVO>>
  >;
  uploadImagePSAComplete(
    HotelRoomImageRequest0: HotelRoomImageRequest,
  ): TDubboCallResult<BaseResponse>;
  getHotelImageFullInfo(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<ImageFullInfoDto>>;
  uploadHotelImage(
    Long0: JavaLong,
    String1: JavaString,
    List2: JavaList,
    String3: JavaString,
    String4: JavaString,
  ): TDubboCallResult<BaseResponse<ImageUploadVO>>;
  getHotelImage(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelImageVO>>>;
}

export const ImageServiceClientWrapper = {
  removeImage: argumentMap,
  getHotelRoomImage: argumentMap,
  getHotelImageCategoryList: argumentMap,
  changeCategory: argumentMap,
  getHotelIndexImage: argumentMap,
  changePriority: argumentMap,
  getHotelImageTypeList: argumentMap,
  uploadImagePSAComplete: argumentMap,
  getHotelImageFullInfo: argumentMap,
  uploadHotelImage: argumentMap,
  getHotelImage: argumentMap,
};

export function ImageServiceClient(dubbo: Dubbo): IImageServiceClient {
  return dubbo.proxyService<IImageServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.ImageServiceClient',
    methods: ImageServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
