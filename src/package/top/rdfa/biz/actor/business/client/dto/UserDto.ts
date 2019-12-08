import { EmployeeDto } from './EmployeeDto';
import java from 'js-to-java';

export interface IUserDto {
  employees?: Array<EmployeeDto>;
  userId?: number;
}

export class UserDto {
  constructor(params: IUserDto) {
    this.employees = params.employees;
    this.userId = params.userId;
  }

  employees?: Array<EmployeeDto>;
  userId?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.UserDto',
      $: {
        employees: this.employees
          ? java.List(
              (this.employees || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        userId: java.Long(this.userId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
