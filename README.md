# nxapi

这个库的功能是将类中的函数信息转换成 DSL，DSL 描述了函数携带的所有信息。下面将详细介绍

### 类和类函数定义

首先看下如何定义一个类和类函数。类必须继承类名为 BaseController 的类，所以这个基类可以自定义。然后定义函数并添加描述类和函数的信息。如下：

```js
import { d } from '@nxapi/nxapi';

@d.controller.path('/v1')
export default class HelloController extends BaseController {
  @d.function.get('/hello')
  @d.function.description('接口描述')
  public helloWorld(name: string): string {
    return 'hello ' + name;
  }
}
```

将上面信息转换成 DSL 数据如下：
