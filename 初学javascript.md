#### 现在才知道人真的是在不断的学习，以为高中轰轰烈烈的读完了，结果还有大学，大学要是没有学好，工作都找不到，有些事，真的很现实，比如你上班，没有掌握最近技术依然会被淘汰，人总是要去不断进步的，借用星爷的一句话：努力！奋斗！

* javascript是一种面向对象的编程（OOP）,从最简单的了解
 * 函数：这是一个可以被用来反复调用的方法,函数最重要的一定就是体内有个return返回值
 ```
 function 函数名(参数，注意参数书写规范) { 源代码}
 ```
  * 函数中的参数有形参和实参之分，形参是没有赋值的变量，并不占有空间，实参又是变量，拥有确定的值，形参接受的是实参的值
 
 * 方法:这是相当于一个隐式函数，隐藏的就是对象，在源代码中是用this来调用，this指向的是当前函数体的对象
 ```
 function myfunction(对象被隐藏，name) { this.name }
 ```
 * 对象：对象其实就是一个属性的集合，方法只是属性的值以函数的形式
  * 创建对象有三种1.工厂模式，2.构造函数3.原型
  ```
  function my(name) {//工厂模式
  var o=new Object();
  o.name=name;
  o.say=function () {
  alert(this.name);}
  return o;
  }
  function My(name) { //构造函数首字母大写
  this.name=name;
  this.say=function () {
  alert(this.name);
  }; 
  }
  function my(name) {  //原型模式
  my.prototype.name=name;
  my.prototype.say=function () {
  alert(this.name); }
  }
  var person=new my('ly');
  person.say();
  ```
   *  _proto_ JavaScript在创建对象的时候，都会有一个proto的内置属性，用于指向创建它的函数对象的prototype。原型对象也有proto属性。因此在不断的指向中，形成了原型链。
   *  constructor 原型对象prototype上都有个预定义的constructor属性，用来引用它的函数对象。这是一种循环引用。
   * ![原型链](https://segmentfault.com/img/bVwFw5)
   * 原型链最终都会指向Object.prototype->null
 * 构造函数模式 所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。
  * 实例对象，在创建实例对象后，实例对象会有一个constructor属性，指向他们的构造函数
  * 每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承

 * javascript包含六个基本的数据类型：String, Number, Boolean, Undefined, Null, Object
 * 局部变量和全局变量的区别
  * 全局变量是存在于整个页面的,在该页面的各个地方都可以被调用，而局部变量是存在某个函数中的,只能在这个函数体中被调用
  * var的使用，如果在函数体中，没有使用var就成k了全局变量，否则就是局部变量
  * 有一段代码，可以加深理解
  ```
  function my() {
  var a=b=1; } =>var a,b=1;a是局部变量，b是全局变量，为避免不必要的错误，可以改成：var a,b; a=b=1;
  ```
 * js检测数据类型
  * typeof 基本数据类型type都能返回适当的类型字符串,但是对象类型的她就没戏了
  ```
   typeof "jerry"; // "string"
    typeof 12;  // "number"
    typeof true;    // "boolean"
    typeof undefined;   // "undefined"
    typeof null;    // "object"
    typeof {name: "jerry"}; // "object"
    typeof function(){};  
   ```
   typeof可以判断除null之外的数据类型，null返回的是object，function返回的是function
   * .constructor,可以检查一个对象的类型
   ```
[].constructor
function Array()
function my(name) { this.name=name;} new my("ly").constructor;
function my()
function my(name) { this.name=name;} new my("ly").constructor===my;
true
```

   * hasOwnproperty,可以检测对象的自身属性，但不能检测继承属性，继承的属性用in可以检测
   ```
   obj.hasOwnProperty(name); name in obj
   ```
 
 * 使用的方法  
   * call()方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.还有继承和多重继承
   其实在js中只有函数，而方法只不过是在函数的内部代码使用了this的函数
   ```
   function my(property) { return (this.hasOwnProperty(property)); } var obj={age:20}; my.call(obj,"age");
   ```
   
   * apply()方法和call一样，但是接受的是数组
 * 继承
 * 递归
 * 闭包
 * ASCII码值的转换："A".charCodeAt(0)//A->65;String.fromCharCode(97);//97->a;
更多内容可以看https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
