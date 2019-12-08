import { HotelImagesBO } from './../../../bean/bo/hotel/HotelImagesBO';
import java from 'js-to-java';

export interface IHotelImagesVO {
  category?: string;
  categoryName?: string;
  imagesList?: Array<HotelImagesBO>;
}

export class HotelImagesVO {
  constructor(params: IHotelImagesVO) {
    this.category = params.category;
    this.categoryName = params.categoryName;
    this.imagesList = params.imagesList;
  }

  category?: string;
  categoryName?: string;
  imagesList?: Array<HotelImagesBO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelImagesVO',
      $: {
        category: java.String(this.category),
        categoryName: java.String(this.categoryName),
        imagesList: this.imagesList
          ? java.List(
              (this.imagesList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
