# nxapi

这个库的功能是将类和类函数信息转换成 DSL，DSL 描述了函数携带的所有信息。下面将详细介绍

## 使用

> 安装

```bash
npm i @nxapi/nxapi -D
```

> 配置

在根目录配置 .nxapirc.js 文件，内容如下：

```js
module.exports = {
  rootDir: 'src', //根目录
  ctrlDir: 'controllers', //需要转DSL目录
  outputDir: '__tmp__', //输出目录
  plugins: ['package'|function], //接受DSL和输出路径
};
```

> 执行

```bash
nxapi build|watch
```

## 插件 plugin 定义

```js
import { DSLController } from '@nxapi/nxapi';

export default (controllerDsls: DSLController[], tmpRelativePath: string) => {
  //插件逻辑处理，处理该库转换的DSL
};
```

## 类和类函数定义

首先看下如何定义类和类函数。类必须继承类名为 BaseController 的类，所以这个基类可以自定义。然后添加描述信息。如下：

```js
import { d } from '@nxapi/nxapi';

@d.controller.path('/v1')
export default class HelloController extends BaseController {
  @d.function.get('/hello')
  @d.function.description('接口描述')
  public hello(name: string): string {
    return 'hello ' + name;
  }
}
```

将上面信息转换成 DSL 如下：

```json
{
  "fileFullPath": "/Users/xxx/workspace/xxxx/src/controllers/hello-controller.ts",
  "className": "HelloController",
  "classMethods": [
    {
      "classMethodName": "hello",
      "get": "'/hello'",
      "description": "'接口描述'",
      "req": { "fields": [{ "name": "name", "type": "string", "isArray": false }], "type": "params" },
      "dto": { "isArray": false, "type": "string" }
    }
  ],
  "path": "'/v1'"
}
```

## 函数详解

> 参数

参数数量为 1

- 参数为基础类型或数组。将参数打包成一个对象，字段名就是参数名
- 参数为自定义对象。将参数名丢掉，参数当成对象

参数数量大于 1

- 将参数打包成一个对象，字段名就是参数名

> 返回类型

- 返回类型没有限制

## 装饰器

这里装饰器没有处理逻辑，只是对类、函数、参数、返回类型的额外描述。在生成 DSL 的时候，将装饰器描述一起带出。例如：

```js
// file
export class TestReq {
  @d.string.required()
  @d.string.max(10)
  @d.string.allow('v1', 'v2')
  @d.string.error(() => '错误描述')
  test: string;
}

//file
import { d } from '@nxapi/nxapi';
import { TestReq } from './req/test-req';

@d.controller.path('/v1')
export default class HelloController extends BaseController {
  @d.function.get('/hello')
  @d.function.description('接口描述')
  public hello(req: TestReq): string {
    return 'hello';
  }
}
```

将上面信息转换成 DSL 如下：

```json
{
  "fileFullPath": "/Users/xxx/workspace/xxxx/src/controllers/hello-controller.ts",
  "className": "HelloController",
  "classMethods": [
    {
      "classMethodName": "hello",
      "get": "'/hello'",
      "description": "'接口描述'",
      "req": {
        "fields": [
          {
            "name": "test",
            "type": "string",
            "isArray": false,
            "required": true,
            "max": "10",
            "allow": ["'v1'", "'v2'"],
            "error": "() => '错误描述'"
          }
        ],
        "fileFullPath": "/Users/xxx/workspace/xxxx/src/controllers/req/test-req.ts",
        "type": "TestReq"
      },
      "dto": { "isArray": false, "type": "string" }
    }
  ],
  "path": "'/v1'"
}
```

装饰器类型总共有 8 中类型分别是 any、array、boolean、controller、function、number、object、string 使用方法很简单，不需详细介绍
