# Ionic
## 参考
- [一个ionic的微博demo源码分析](https://segmentfault.com/a/1190000004176310)

## 总结
- module.config 和 module.run 方法注册了在 angularjs 应用的声明周期的关键时刻所调用的函数。
	- config，在当前模块被加载后调用。
	- run，在所有模块被加载后调用
- run 
	- 入口方法。
	- 初始化。
- config


## 常用
- ionic start routeTest blank 创建空白项目
- cd routeTest
- ionic platform add android
- ionic build android

