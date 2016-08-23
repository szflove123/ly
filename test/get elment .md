
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

  * 如果不满足前面，则递归地寻找其父节点，直到找到唯一。再从其父节点开始，取绝对路径（元素索引），加起来唯一定位，其Xpath类似：

//X.XX.XXX[@resource-id=\"android:id/list\"]/X.XX.XXX[1]/X.XX.XXX[2]

6.以上全不满足，则给出其绝对路径（元素索引），来唯一定位，其Xpath类似：

//X.XX.XXX[1]/X.XX.XXX[2]/X.XX.XXX[5]/X.XX.XXX[2]
