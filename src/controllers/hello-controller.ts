import { TestReq, TestReq2 } from './req/test-req';
import TestDto from './dto/test-dto';
import BaseController from './base-controller';
import d from '../../packages/decorator/src';
import BaseResponse from './dto/base-response';

@d.controller.path('/v1')
export default class HelloController extends BaseController {
  @d.function.get('/hello')
  @d.function.description('接口描述')
  public helloWorld(name: string): string {
    return 'hello ' + name;
  }
}
