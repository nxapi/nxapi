import java from 'js-to-java';

export interface IOwnerIdeInstallIntentionDto {
  ideSolutionType?: string;
  ownerIntention?: string;
  rejectDate?: Date;
  hotelId?: number;
}

export class OwnerIdeInstallIntentionDto {
  constructor(params: IOwnerIdeInstallIntentionDto) {
    this.ideSolutionType = params.ideSolutionType;
    this.ownerIntention = params.ownerIntention;
    this.rejectDate = params.rejectDate;
    this.hotelId = params.hotelId;
  }

  ideSolutionType?: string;
  ownerIntention?: string;
  rejectDate?: Date;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.OwnerIdeInstallIntentionDto',
      $: {
        ideSolutionType: java.String(this.ideSolutionType),
        ownerIntention: java.String(this.ownerIntention),
        rejectDate: this.rejectDate,
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
