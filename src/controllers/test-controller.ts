import TestReq from './req/test-req';
import TestDto from './dto/test-dto';
import BaseController from './base-controller';
import d from '../../packages/decorator/src';

@d.controller.path('/v1')
export default class TestController extends BaseController {
  @d.function.description('ddd')
  @d.function.get('/hello88')
  public ggg(req: TestReq): number[] {
    return [3];
  }
  @d.function.post('post')
  public hhh(req: TestReq): TestDto {
    return new TestDto();
  }
}
