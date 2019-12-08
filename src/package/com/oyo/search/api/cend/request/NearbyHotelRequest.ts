import java from 'js-to-java';

export interface INearbyHotelRequest {
  nearDistance?: number;
  latitude?: string;
  userType?: number;
  locationCityId?: number;
  userId?: number;
  channelId?: string;
  longitude?: string;
}

export class NearbyHotelRequest {
  constructor(params: INearbyHotelRequest) {
    this.nearDistance = params.nearDistance;
    this.latitude = params.latitude;
    this.userType = params.userType;
    this.locationCityId = params.locationCityId;
    this.userId = params.userId;
    this.channelId = params.channelId;
    this.longitude = params.longitude;
  }

  nearDistance?: number;
  latitude?: string;
  userType?: number;
  locationCityId?: number;
  userId?: number;
  channelId?: string;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.NearbyHotelRequest',
      $: {
        nearDistance: java.Double(this.nearDistance),
        latitude: java.String(this.latitude),
        userType: java.Integer(this.userType),
        locationCityId: java.Integer(this.locationCityId),
        userId: java.Long(this.userId),
        channelId: java.String(this.channelId),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
