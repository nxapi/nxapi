import java from 'js-to-java';

export interface IFuzzyHotelsResponse {
  searchDataSource?: string;
  displayName?: string;
  name?: string;
  id?: string;
  source?: string;
  type?: string;
}

export class FuzzyHotelsResponse {
  constructor(params: IFuzzyHotelsResponse) {
    this.searchDataSource = params.searchDataSource;
    this.displayName = params.displayName;
    this.name = params.name;
    this.id = params.id;
    this.source = params.source;
    this.type = params.type;
  }

  searchDataSource?: string;
  displayName?: string;
  name?: string;
  id?: string;
  source?: string;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.FuzzyHotelsResponse',
      $: {
        searchDataSource: java.String(this.searchDataSource),
        displayName: java.String(this.displayName),
        name: java.String(this.name),
        id: java.String(this.id),
        source: java.String(this.source),
        type: java.String(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
