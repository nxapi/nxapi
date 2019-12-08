import { CommentInfo } from './../bean/CommentInfo';
import java from 'js-to-java';

export interface ICommentResp {
  commentList?: Array<CommentInfo>;
  requestId?: string;
  count?: number;
}

export class CommentResp {
  constructor(params: ICommentResp) {
    this.commentList = params.commentList;
    this.requestId = params.requestId;
    this.count = params.count;
  }

  commentList?: Array<CommentInfo>;
  requestId?: string;
  count?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.CommentResp',
      $: {
        commentList: this.commentList
          ? java.List(
              (this.commentList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        requestId: java.String(this.requestId),
        count: java.Integer(this.count),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
