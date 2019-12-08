import { SaveItemOptionRequest } from './SaveItemOptionRequest';
import java from 'js-to-java';

export interface IInfoItemValueRequest {
  coverUrl?: string;
  optionType?: string;
  photoUrl?: string;
  itemType?: number;
  itemValueId?: string;
  itemContent?: string;
  videoUrl?: string;
  itemOptions?: Array<SaveItemOptionRequest>;
}

export class InfoItemValueRequest {
  constructor(params: IInfoItemValueRequest) {
    this.coverUrl = params.coverUrl;
    this.optionType = params.optionType;
    this.photoUrl = params.photoUrl;
    this.itemType = params.itemType;
    this.itemValueId = params.itemValueId;
    this.itemContent = params.itemContent;
    this.videoUrl = params.videoUrl;
    this.itemOptions = params.itemOptions;
  }

  coverUrl?: string;
  optionType?: string;
  photoUrl?: string;
  itemType?: number;
  itemValueId?: string;
  itemContent?: string;
  videoUrl?: string;
  itemOptions?: Array<SaveItemOptionRequest>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.krypton.facade.bean.request.worktask.InfoItemValueRequest',
      $: {
        coverUrl: java.String(this.coverUrl),
        optionType: java.String(this.optionType),
        photoUrl: java.String(this.photoUrl),
        itemType: java.Integer(this.itemType),
        itemValueId: java.String(this.itemValueId),
        itemContent: java.String(this.itemContent),
        videoUrl: java.String(this.videoUrl),
        itemOptions: this.itemOptions
          ? java.List(
              (this.itemOptions || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
