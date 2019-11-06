import d from '../../../decorator/src/index';
import TestReq from './req/test-req';
import TestDto from './dto/test-dto';
import BaseController from './base-controller';

@d.class.path('dd')
class TestController extends BaseController {
  @d.function.description('ddd')
  @d.function.get('/ddd')
  public ggg(req: any): TestDto {
    return new TestDto();
  }
}
