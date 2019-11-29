import { TestReq, TestReq2 } from './req/test-req';
import TestDto from './dto/test-dto';
import BaseController from './base-controller';
import d from '../../packages/decorator/src';
import BaseResponse from './dto/base-response';

@d.controller.path('/v1')
export default class TestController extends BaseController {
  @d.function.description('ddd')
  @d.function.get('/hello88')
  // public ggg(req: number): BaseResponse<TestDto[]> {
  //   return 'aa' as any;
  // }
  public ggg(req: TestReq, req2: number): BaseResponse<TestReq2[]> {
    return 'aa' as any;
  }
  // @d.function.post('post')
  // public hhh(req: TestReq): TestDto {
  //   return new TestDto();
  // }
}
