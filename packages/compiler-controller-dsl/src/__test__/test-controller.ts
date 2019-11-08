import d from '../../../decorator/src/index';
import TestReq from './req/test-req';
import TestDto from './dto/test-dto';
import BaseController from './base-controller';

@d.class.path('/v1')
class TestController extends BaseController {
  @d.function.desc('ddd')
  @d.function.get('/hello')
  public ggg(req: TestReq): TestDto {
    return new TestDto();
  }
}
