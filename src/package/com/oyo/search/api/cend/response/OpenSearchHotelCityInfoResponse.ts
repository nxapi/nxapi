import java from 'js-to-java';

export interface IOpenSearchHotelCityInfoResponse {
  searchType?: string;
  hotels?: Array<{[name: string]: Object}>;
  displayName?: Array<string>;
}

export class OpenSearchHotelCityInfoResponse {
  constructor(params: IOpenSearchHotelCityInfoResponse) {
    this.searchType = params.searchType;
    this.hotels = params.hotels;
    this.displayName = params.displayName;
  }

  searchType?: string;
  hotels?: Array<{[name: string]: Object}>;
  displayName?: Array<string>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.search.api.cend.response.OpenSearchHotelCityInfoResponse',
      $: {
        searchType: java.String(this.searchType),
        hotels: java.List(
          (this.hotels || []).map((paramItem: any) => {
            let paramItemMapTransfer = new Map();
            for (let mapKey in paramItem) {
              paramItemMapTransfer.set(
                java.String(mapKey),
                paramItem[mapKey] && paramItem[mapKey]['__fields2java']
                  ? paramItem[mapKey]['__fields2java']()
                  : paramItem[mapKey],
              );
            }

            return paramItemMapTransfer;
          }),
        ),
        displayName: this.displayName
          ? java.List(
              (this.displayName || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
