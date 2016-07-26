#### 现在才知道人真的是在不断的学习，以为高中轰轰烈烈的读完了，结果还有大学，大学要是没有学好，工作都找不到，有些事，真的很现实，比如你上班，没有掌握最近技术依然会被淘汰，人总是要去不断进步的，借用星爷的一句话：努力！奋斗！
--------

##### javascript是一种面向对象的编程（OOP）,从最简单的了解
 * 函数：这是一个可以被用来反复调用的方法,函数最重要的一定就是体内有个return返回值
 
 ```javascript
 
 function 函数名(参数，注意参数书写规范) { 源代码}
 ```
   函数中的参数有形参和实参之分，形参是没有赋值的变量，并不占有空间，实参又是变量，拥有确定的值，形参接受的是实参的值


##### 对象：对象其实就是一个属性的集合，方法只是属性的值以函数的形式
  * 方法:这是相当于一个隐式函数，隐藏的就是对象，在源代码中是用this来调用，this指向的是当前函数体的对象
  
 ```javascript
 function myfunction(对象被隐藏，name) { this.name }
 ```
  * 创建对象有三种1.工厂模式，2.构造函数3.原型
  
  ```javascript
  function factory(name) {//工厂模式
  var o=new Object();
  o.name=name;
  o.say=function () {
  alert(this.name);}
  return o;
  }
  function Create(name) { //构造函数首字母大写
  this.name=name;
  this.say=function () {
  alert(this.name);
  }; 
  }
  function proto(name) {  //原型模式
  proto.prototype.name=name;
  proto.prototype.say=function () {
  alert(this.name); }
  }
  var person=new proto('ly');
  person.say();
  ```
 
  
  
#####  _proto_ JavaScript在创建对象的时候，都会有一个proto的内置属性，用于指向创建它的函数对象的prototype。原型对象也有proto属性。因此在不断的指向中，形成了原型链。o._proto_->Object._proto_->null
  *  constructor 原型对象prototype上都有个预定义的constructor属性，用来引用它的函数对象。这是一种循环引用。
  * ![原型链](https://segmentfault.com/img/bVwFw5)
   
  * 原型链最终都会指向Object.prototype->null
  * 构造函数模式 所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。
  * 实例对象，在创建实例对象后，实例对象会有一个constructor属性，指向他们的构造函数
  * 每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承

##### javascript包含六个基本的数据类型：String, Number, Boolean, Undefined, Null, Object
  * 局部变量和全局变量的区别
  * 全局变量是存在于整个页面的,在该页面的各个地方都可以被调用，而局部变量是存在某个函数中的,只能在这个函数体中被调用
  * var的使用，如果在函数体中，没有使用var就成k了全局变量，否则就是局部变量
  * 有一段代码，可以加深理解
  
  ```javascript
  function variable() {
  var a=b=1; } =>var a,b=1;a是局部变量，b是全局变量，为避免不必要的错误，可以改成：var a,b; a=b=1;
  ```

##### js检测数据类型
  * typeof 基本数据类型type都能返回适当的类型字符串,但是对象类型的她就没戏了
  
  ```javascript
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
   
```javascript
[].constructor
function Array()
function method(name) { this.name=name;} new method("ly").constructor;
function obj()
function obj(name) { this.name=name;} new obj("ly").constructor===obj;
true
```

   * hasOwnproperty,可以检测对象的自身属性，但不能检测继承属性，继承的属性用in可以检测
   
   ```javascript
   obj.hasOwnProperty(name); name in obj
   ```
 
 * 使用的方法  
   * call()方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法.还有继承和多重继承
   其实在js中只有函数，而方法只不过是在函数的内部代码使用了this的函数,调用的是call前面的方法，接的是字符串

   ```javascript
   function hasproperty(property) { return (this.hasOwnProperty(property)); } var obj={age:20}; hasproperty.call(obj,"age");
   ```
   
   * apply()方法和call一样，但是接受的是数组
  
   ```javascript
function hasproperty(property) { return (this.hasOwnProperty(property)); } var obj={age:20}; hasproperty.apply(obj,['age']);
```
##### 继承
##### 递归
##### 闭包
#####ASCII码值的转换："A".charCodeAt(0)//A->65;(0)代表的是一个顺序，0，1，2 String.fromCharCode(97);//97->a;
  * 发现一个问题，函数是否具有length属性，然后写了一段代码
  
  ```javascript
function has() { }; has.hasOwnProperty('length')
true//发现length属性是存在函数上的，然后属性length到底是根据什么来定义的
```
   * 参数个数和函数length属性是否相等
   * 实参
   
   ```javascript
   function argumentMethod() { 
 while (arguments.length<30) { 
		 arguments.length++;//代表的是实参
		 console.log('参数个数'+arguments.length+','+'函数length'+my.length);
	} 
}  
argumentMethod();//由此可见打印出来的结果并不相等
```
  * 形参
  
  ```javascript
  var s='a';//s是个字符串，代表的是形参
var count=1;//代表的是形参个数
for (var i = 98; i < 100; i++) {//使用的是阿斯克码值，97是a
  s+=','+String.fromCharCode(i);//s就是字符串,String.fromCharCode()是转换成字母
  count++;//形参个数也增加
eval('function parameter('+s+') {}');//eval里是一个函数，有引号的地方代表不变的
console.log('参数个数:'+conunt+my.length); 
} 
```

```javascript
function () {
	var s='a';
	for (var i = 98; i < 100; i++) {
  s+=','+String.fromCharCode(i);}
  return s;
} 
random();//提取出来的函数，可以用来生成参数个数，中间用逗号隔开，生成小写字母
```

   * 随机写出一个参数
   
```javascript
function random(len) { 
	var s='';//定义一个空字符串
	while(s.length<len&&len>0) { //为了生成的字符串长度为len
		var r=Math.random();//定义一个值在0到1之间随机数
		s+=String.fromCharCode(Math.floor(r*26)+97);//使用阿斯克码值的转换成小写字母，floor取得整值，97是a的阿斯克码值
	} 
	return s; //返回的是s
} 
random(3);//随机生成一个长度为3的字符串
```
  * 函数的length属性是根据形参个数来改变的，和实参个数无关


更多内容可以看https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
