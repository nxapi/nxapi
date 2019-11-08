import d from '../../../packages/decorator/src/index';

export default class TestDto {
  @d.number.max(1)
  @d.number.desc('ddd')
  tt: number;
}
