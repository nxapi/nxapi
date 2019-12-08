import { HotelLegalPersonDto } from './HotelLegalPersonDto';
import { AgreementBasicDto } from './AgreementBasicDto';
import { HotelAdditionAgreementDto } from './HotelAdditionAgreementDto';
import java from 'js-to-java';

export interface IHotelAgreementDto {
  hotelLegalPersonDto?: HotelLegalPersonDto;
  agreementBasicDto?: AgreementBasicDto;
  hotelAdditionAgreementDto?: HotelAdditionAgreementDto;
}

export class HotelAgreementDto {
  constructor(params: IHotelAgreementDto) {
    this.hotelLegalPersonDto = params.hotelLegalPersonDto;
    this.agreementBasicDto = params.agreementBasicDto;
    this.hotelAdditionAgreementDto = params.hotelAdditionAgreementDto;
  }

  hotelLegalPersonDto?: HotelLegalPersonDto;
  agreementBasicDto?: AgreementBasicDto;
  hotelAdditionAgreementDto?: HotelAdditionAgreementDto;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.HotelAgreementDto',
      $: {
        hotelLegalPersonDto: this.hotelLegalPersonDto
          ? this.hotelLegalPersonDto.__fields2java()
          : null,
        agreementBasicDto: this.agreementBasicDto
          ? this.agreementBasicDto.__fields2java()
          : null,
        hotelAdditionAgreementDto: this.hotelAdditionAgreementDto
          ? this.hotelAdditionAgreementDto.__fields2java()
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
