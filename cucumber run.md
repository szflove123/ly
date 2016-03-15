# 关于在Linux终端运行cucumber的步骤
## cucumber运行起来需要打开三个终端

*第一个终端是运行终端
*第二个是服务器终端
*第三个是本地服务器终端

##首先是npm的安装，npm是包管理器，nvm是版本管理器

*sudo apt-get install -g npm(安装npm)
*npm use 0.12(调出npm使用)
*nvm alias default 0.12(npm 全局设定，下次可以直接使用npm)

##还需要安装cucumber

*$ sudo apt-get install cucumber

##在首次执行运行时，需要安装依赖库

$ npm install

##第一个终端需要进入到测试文件目录下

     $ ./test/run.js
    
 ##如果是运行git上面的文件，需要git clone “url地址”
 第二个终端需要安装浏览器
     $ npm install -g phantomjs(安装时需要进入测试目录下，在安装完成后需要将浏览器改成phantomjs)
##然后运行npm run-script local-webserver
##第三个终端输入xvfb-run --server-args="-screen 0, 1366x768x24" selenium-standalone start，在以后使用的时候可以输入：selenium-standalone start
  第一个终端是最后运行的
  
#然后等待终端跑起来吧！

