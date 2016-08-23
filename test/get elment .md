
#####  自动化测试不断发展，从网页自动化，延伸至app的自动化测试，神器appium在手，天下我有

-----
* 打开命令行
```
cd /tools (进入android的sdk/tools文件夹下面）
uiautomatorviewer.bat
```
* 打开另一个命令行
```
adb devices (search for device now)
```
* uiautomatorviewer是android的插件，用于检测UI，一个页面交互的插件，打开后通过左上方获取手机当前页面，就可以进行查询了
* 通常xpath有这几个样式
* class(//android.widget.TextView),resourece-id(com.duowan.mobile:id/rb_main),text(手机),content-desc(热门推荐)
  * 如果只包含resource-id，且唯一，则直接用resource-id
  * 其Xpath为：//android.widget.TextView[@resource-id="com.duowan.mobile:id/rb_main"]

  * 如果只存在text，且唯一，则直接用text，其Xpath为：//android.widget.TextView[@text="手机"]

  * 如果只存在content-desc，且唯一，则直接用content-desc，其Xpath为：//android.XX.XXX[@content-desc="热门推荐"]

  * 如果不满足前面，且存在resource-id、text、content-desc，三者取其二或者取其三能唯一定位，则其Xpath类似：

  * //android.widget.TextView[@resource-id="com.duowan.mobile:id/rb_main" and @text="手机" and @content-desc="热门推荐"]

* 在使用appium时候，需要打开3个端口
 * 手机连接
 * appium运行
 * 行为驱动

参考资料[app元素获取](http://www.mobile-open.com/2016/969243.html)
