import java from 'js-to-java';

export interface IImageUploadVO {
  uploadFailedFileNameList?: Array<string>;
  uploadSuccessFileNameList?: Array<string>;
}

export class ImageUploadVO {
  constructor(params: IImageUploadVO) {
    this.uploadFailedFileNameList = params.uploadFailedFileNameList;
    this.uploadSuccessFileNameList = params.uploadSuccessFileNameList;
  }

  uploadFailedFileNameList?: Array<string>;
  uploadSuccessFileNameList?: Array<string>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.image.ImageUploadVO',
      $: {
        uploadFailedFileNameList: this.uploadFailedFileNameList
          ? java.List(
              (this.uploadFailedFileNameList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        uploadSuccessFileNameList: this.uploadSuccessFileNameList
          ? java.List(
              (this.uploadSuccessFileNameList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
