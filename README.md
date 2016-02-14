# ly
cucumber运行起来的步骤
1.写好feature
2.写好feature对应的step。js
3.在虚拟机上运行
4.进入该项目下面
5.打开selenium，打开另一个终端，然后输入
xvfb-run --server-args="-screen 0, 1366x768x24" selenium-standalone start
6.第一次运行cucumber，应该安装基本依赖库npm inatall
7.开始在文件目录下运行，输入./test/run.js
