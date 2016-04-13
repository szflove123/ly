## how to run the appium

  this have some steps
 
 * stpe1 
  * 将你所需要调用的项目克隆到本地
  
      $ git clone https://github.com/appium/sample-code
   
* step2
   * 进入node文件下，进行真机链接
   
      $ adb devices
   
* step3
   * 在node文件下，安装依赖库
   
      $ npm install
    
* step4
   * 安装mocha
   
     $ npm install -g mocha
* step5
   * 修改内部信息，进入caps，根据相应信息修改（修改真机名字，修改appium 版本号）
  
* step6
   * 运行 
     
     $ mocha android-simple(项目名)
   
 进行到这里，appium已经可以运行了
        
