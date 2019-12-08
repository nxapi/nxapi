import java from 'js-to-java';

export interface IContactBO {
  phone?: string;
  name?: string;
  type?: string;
  email?: string;
}

export class ContactBO {
  constructor(params: IContactBO) {
    this.phone = params.phone;
    this.name = params.name;
    this.type = params.type;
    this.email = params.email;
  }

  phone?: string;
  name?: string;
  type?: string;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.ContactBO',
      $: {
        phone: java.String(this.phone),
        name: java.String(this.name),
        type: java.String(this.type),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
