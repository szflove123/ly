##### 突然觉得js中的this好强大，现在根据这几天学的来总结一下this 
 
 * 记忆中，认识this是始于大一，那时候学习C语言，然后老师据一直在哪里说this什么，指针什么的，那时候觉得C语言好难，好牛逼，原生态语言哟
 * 后来，大二有接触thism，是在学习java的途中了，感觉什么学的都是半吊子，在安卓里也偶遇this一次
 * 最后还是在js中搞懂了this，不仅感叹，this好强大的样子
 还有一点就是当年学习java，后来学习javascript，我还老以为js就是从java上面衍生下来的呢，接着见谁都吹我还学了java的另一种语言，呵呵，还好别人比我更菜，java和javascript的区别据跟雷锋和雷峰塔，八竿子打不到一起
 
 
 -----
 
 * 咳咳，进入正题，聊总结
 * 其实js中的东西都可以总结为一个对象来概括，只是函数是比较特殊的而已
   * this在函数中使用时，就是指向的这个被调用的对象，相当于是一个指针
   
   ```javascript
   function Create() { //创建对象的一种，构造函数模式
   this.name='ly'; //this指向的是这个函数，其实就是对象
   this.say=function () {
   console.log(this.name); };//this的指针指向了create这个函数
   }
   var test=new Create();//构造函数有2点，1是调用指针this，2是使用new新建一个实例对象
   test.say();//'ly'这个时候this指向的是test这个对象了
   ```
   
   ```javascript
   test.name='lyy';//给test的名字重新赋一个值
   test.say();//lyy，这个时候你会发现this的指针指向test上面的name来了
```
  * 对，这就是神奇的this，指向的就是调用函数的那个对象，可以根据情况来不断发生变化
  * 还有一个method，方法，他的对象是隐式的，这个是属于对象的属性的，只是值是以函数的形式出现罢了
  
  ```javascript
  function hasproperty(property) { 
  return(this.hasOwnProperty(property));
  } //对象已经被隐藏，用的是this，指向当前函数对象
  var obj={"age":10}; 
  hasproperty("name");//true，对啊，但是这里的this却是发生了质的变化
  hasproperty("age");//false 
  console.log(this);//返回的是window
   ```
   
   这是为什么呢，原来这个this已经处于了全局环境中，this根本没有指向obj这个值，这个时候就有疑问了，如何才能让this指向obj了
  这个是时候又诞生了一个很6的操作符，call（）；
  
  
  * 我们先来看看call的定义在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.其实在js中只有函数，而方法只不过是在函数的内部代码使用了this的函数。可以继承以及多重继承
  
  ```javascript
  hasproperty.call(obj,"age");//使用了call，这个时候就可以指向obj了,当然返回了true
```


call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。

  * 接着来看一下纯粹的函数调用
  ```javascript
  var x=1;
  function my() {
  alert(this.x); 
  }
  my();//1,this指向的是全局变量
  ```
  
  ```javascript
  var x=1;
  function my() {
  var x=2;
  alert(this.x);
  }
  my();//1，this指向的是全局变量
  ```
  
  ```javascript
  var x=1;
  function my() {
  this.x=2;
  alert(this.x);
  }
  my();//2，现在就可以访问到my里的x了
  ```
  
  
  
  
  
  
  
  
  
  
  
