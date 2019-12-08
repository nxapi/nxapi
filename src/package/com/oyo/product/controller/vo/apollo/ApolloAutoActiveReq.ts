import { HotelImagesBO } from './../../../bean/bo/hotel/HotelImagesBO';
import { ApolloOtaAccount } from './ApolloOtaAccount';
import { ContactBO } from './../../../bean/bo/hotel/ContactBO';
import { ApolloLegalEntity } from './ApolloLegalEntity';
import { ApolloHotelPostBO } from './../../../bean/bo/hotel/ApolloHotelPostBO';
import { AgreementInfoEntity } from './AgreementInfoEntity';
import { LandmarkBO } from './../../../bean/bo/hotel/LandmarkBO';
import { ApolloHotelRoomTypeBO } from './../../../bean/bo/roomtype/ApolloHotelRoomTypeBO';
import { ApolloBankAccountInfo } from './ApolloBankAccountInfo';
import java from 'js-to-java';

export interface IApolloAutoActiveReq {
  image?: Array<HotelImagesBO>;
  otaAccounts?: Array<ApolloOtaAccount>;
  contact?: Array<ContactBO>;
  legalEntities?: Array<ApolloLegalEntity>;
  hotel?: ApolloHotelPostBO;
  agreementInfoEntity?: AgreementInfoEntity;
  amenityList?: Array<number>;
  type?: string;
  landmark?: Array<LandmarkBO>;
  operator?: string;
  room?: Array<ApolloHotelRoomTypeBO>;
  bankAccountInfos?: Array<ApolloBankAccountInfo>;
}

export class ApolloAutoActiveReq {
  constructor(params: IApolloAutoActiveReq) {
    this.image = params.image;
    this.otaAccounts = params.otaAccounts;
    this.contact = params.contact;
    this.legalEntities = params.legalEntities;
    this.hotel = params.hotel;
    this.agreementInfoEntity = params.agreementInfoEntity;
    this.amenityList = params.amenityList;
    this.type = params.type;
    this.landmark = params.landmark;
    this.operator = params.operator;
    this.room = params.room;
    this.bankAccountInfos = params.bankAccountInfos;
  }

  image?: Array<HotelImagesBO>;
  otaAccounts?: Array<ApolloOtaAccount>;
  contact?: Array<ContactBO>;
  legalEntities?: Array<ApolloLegalEntity>;
  hotel?: ApolloHotelPostBO;
  agreementInfoEntity?: AgreementInfoEntity;
  amenityList?: Array<number>;
  type?: string;
  landmark?: Array<LandmarkBO>;
  operator?: string;
  room?: Array<ApolloHotelRoomTypeBO>;
  bankAccountInfos?: Array<ApolloBankAccountInfo>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.apollo.ApolloAutoActiveReq',
      $: {
        image: this.image
          ? java.List(
              (this.image || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        otaAccounts: this.otaAccounts
          ? java.List(
              (this.otaAccounts || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        contact: this.contact
          ? java.List(
              (this.contact || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        legalEntities: this.legalEntities
          ? java.List(
              (this.legalEntities || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotel: this.hotel ? this.hotel.__fields2java() : null,
        agreementInfoEntity: this.agreementInfoEntity
          ? this.agreementInfoEntity.__fields2java()
          : null,
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        type: java.String(this.type),
        landmark: this.landmark
          ? java.List(
              (this.landmark || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        operator: java.String(this.operator),
        room: this.room
          ? java.List(
              (this.room || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        bankAccountInfos: this.bankAccountInfos
          ? java.List(
              (this.bankAccountInfos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
