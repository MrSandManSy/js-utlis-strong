# js-utlis-strong

提供 react-native 上常用的工具函数库，比如通配符、文件监听、网络库等。

## 安装
```bash
npm install js-utlis-strong
```

> 注意：该库基于ES6编写 不支持node直接编译 。

一行代码引用所有模块：
```js
import * as JsLibs from 'js-utlis-strong'
```

## API 文档

## 模块列表

### 目录
- 网络 network
	- [checkNetworkState](#checkNetworkState)：网络状态
	- [removeEventListener](#removeEventListener)：移除网络状态变化监听
	- [addEventListener](#addEventListener)：添加网络状态变化监听
- 唯一性 only
	- [uuid](#uuid)：16位的唯一标识
	- [alpha](#alpha)：指定位数的随机字符串
- 校验 regexp
	- [isPhone](#isPhone)：判断是否国内手机号
	- [isEmail](#isEmail)：判断是否Email
	- [checkUserName](#checkUserName)：校验用户名：1-20位字符，首字符为字母
    - [checkPwd](#checkPwd)：校验密码：6-20位，数字、字母、下划线
- 类型判断 type
	- [typeOf](#typeOf)：通用判断对象类型
- 常规 common
	- [debounce](#debounce)：函数防抖
    - [tthrottle](#tthrottle)：定时器版本节流函数
    - [countDown](#countDown): 验证码倒计时
