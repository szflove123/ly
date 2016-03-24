## 安装appium.

### appium是一款应用在移动终端上的测试软件，我们可以将它安装在windows上

  * 首先下载nodejs,网址https://nodejs.org/en/download/
  * 打开cmd,在终端上输入

     1.  $  node -v (查看node版本号)
       
  * 然后下载jdk,官网http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
  
  * 安装好之后，需要配环境变量
   
    1. JAVA-HOME：C:\Program Files\Java\jdk1.8.0_72（需要新建JAVA-HOME）
    2. CLASSPATH:;%JAVA_HOME%\lib\tools.jar;%JAVA_HOME%\lib\dt.jar
    3. path  ：;C:\Program Files\Java\jdk1.8.0_72\bin(直接加在path后面，需要加；）
  
  * 打开cmd，输入java看是否有数据输出
  
  * 打开cmd，输入javac看是否有数据输出
  
  * 安装android studio，网址http://www.android-studio.org/
  
  * 安装好之后，需要配置环境变量
   1. path：将sdk路径放在后面（前面需要加;）
   2. android-home:将sdk路径放在里面（新建android-home）
  
  * 打开cmd,安装appium，输入
   1. npm install -g appium(-g是全局变量)或者是
   2. npm --registry http://registry.cnpmjs.org install -g appium 
  
  * 安装好之后，打开cmd,输入appium,有start输出就可以了
