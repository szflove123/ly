最近看了nodeschool的一些教程，其中就有关于git的，接触git也有半年多了，每次都是到了要用git的时候，在网上顺便找资料，额( ╯□╰ )
我觉得还是有必要自己再总结一下资料，可以方便以后参考

* git
* 
首先弄清楚git是什么，这是一个版本控制系统，是分布式的，而SVN不同，另外还有各种非常不错的源代码也分布在![github](www.github.com)
上
  * 首先你需要有个github账号吧
  
  * 然后就是在github上创建属于自己的仓库
  
  * 有了自己的账号之后，就需要配置自己的用户名和邮箱
  
  ```
  git config --global user.name '名字'
  git config --global user.email 邮箱
  ```
  
  * 在github上你也可以follow（大神）或者fork别人的项目到自己的仓库
  
  * 在这里，就不得不提一个时刻都可以用到的命令
  
  ```
  git clone ssh(仓库的地址)//这样可以把别人的项目克隆到本地
  ```
  

* git在本地的用法命令
  github上有很多很好的源代码，可以直接克隆到本地，方便参考，修改
  
  * 首先你需要在自己的电脑上创建一个git仓库
  
  ```
  mkdir ly //create a responlity
  ```
  
  * 然后进入仓库的路径下面，进行初始化
  
  ```
  cd ly  //into the responlity
  git init //初始化仓库
  ```
  
  * 选择一个需要克隆仓库地址
  
  ```
  git clone ssh //choose everything for your love
  ```
  
* git的远程仓库
有时候你会需要提交你写好的文件到仓库上，就会用到关于远程的命令
  
  * 与远程仓库链接起来
  
  ```
  git remote add origin ssh(需要链接的远程仓库地址) 
  git remote rm local(远程仓库名字) //删掉远程仓库的链接
  ```
   
   * 提交文件
   
   ```
   git add ly.txt //添加文件
   git commit -m 'describe' //提交文件
   git push -u origin master //push,第一次提交添加-u
   //如果提交的是文件，比较大，可以先pull再push
   git pull origin master //pull
   git push origin master //push
```

暂时先更新到这里( ╯□╰ )
  
  
  
  
 
