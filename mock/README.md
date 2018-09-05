
# mock数据服务

## 概述

1. 所有mock文件直接放在 `./api` 目录的根目录下。(不支持子目录,可自行修改mock-server.js来实现)
2. mock文件名必须和接口文件名一致，才能将请求接口匹配上mock文件。
3. mock文件可以是 `.js` 文件或 `.json` 文件，如果对同一接口分别创建了js和json两个mock文件，会优先取js文件的数据。
4. json文件用来存放固定的mock数据，而js文件可更加自由的处理并返回mock数据。
5. 修改api目录下的mock文件后，无需重启node服务，重新调用接口会返回新的数据。


## 启动mock服务

有两种方式：

1、执行命令 ***npm start*** 启动当前项目时，会自动启动mock服务（此为默认方式，在package.json中配置）。

```
$ npm start
```

2、手动执行node服务文件 `./mock/mock-server.js`
```
$ node ./mock/mock-server.js
```


## 项目中使用mock接口
在配置文件 `/build/webpack.dev.conf` 中，使用webpack插件 `webpack-dev-server` 的代理属性 `(proxy)` ，将接口服务器转发到mock服务器。

mock服务器接收到转发过来的请求后，截取URL请求路径中的接口名，再用API接口的名字去匹配 `./mock/api` 目录下的mock文件名，
最终返回mock文件中的数据。



## mock文件命名规则

mock文件名必须和接口文件名一致

> 例1：
>
> 如果接口为 "/service/user/getUserInfo"
>
> 则mock数据文件名为 "getUserInfo.js" 或者 "getUserInfo.json"

> 例2：
>
> 如果接口为 "/service/user/getUserInfo.do"
>
> 则mock数据文件名为 "getUserInfo.do.js" 或者 "getUserInfo.do.json"




## mock文件编写规则

`API接口名.json` 文件只支持json格式的数据，例:

```js
{
  "code": 1,
  "msg": "失败",
  "data":{
      "age": 520,
      "card": 10099
  },
  "servertime": 1534835882204
}
```

`API接口名.js` 文件必须导出一个函数，函数接收两个参数，需在函数中返回mock数据，例：

```js
/*
    返回mock数据

    @param {object} getData  接口的GET数据
    @param {object} postData 接口的POST数据
 */
module.exports = function(getData, postData) {
  //to do something...

  return {
    code: 0,
    msg: "成功"
    data: {}
  }
}
```
