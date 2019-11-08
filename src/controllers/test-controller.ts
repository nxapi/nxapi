import TestReq from './req/test-req';
import TestDto from './dto/test-dto';
import BaseController from './base-controller';
import d from '../../packages/decorator/src';

@d.class.path('/v1')
export default class TestController extends BaseController {
  @d.function.desc('ddd')
  @d.function.get('/hello')
  public ggg(req: TestReq): TestDto {
    return new TestDto();
  }
  @d.function.post('post')
  public hhh(req: TestReq): TestDto {
    return new TestDto();
  }
}
