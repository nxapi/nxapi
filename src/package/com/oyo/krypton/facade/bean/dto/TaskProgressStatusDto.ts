import java from 'js-to-java';

export interface ITaskProgressStatusDto {
  date?: Date;
  code?: string;
  name?: string;
  done?: boolean;
}

export class TaskProgressStatusDto {
  constructor(params: ITaskProgressStatusDto) {
    this.date = params.date;
    this.code = params.code;
    this.name = params.name;
    this.done = params.done;
  }

  date?: Date;
  code?: string;
  name?: string;
  done?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.TaskProgressStatusDto',
      $: {
        date: this.date,
        code: java.String(this.code),
        name: java.String(this.name),
        done: java.Boolean(this.done),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
