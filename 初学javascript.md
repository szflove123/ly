#### 现在才知道人真的是在不断的学习，以为高中轰轰烈烈的读完了，结果还有大学，大学要是没有学好，工作都找不到，有些事，真的很现实，比如你上班，没有掌握最近技术依然会被淘汰，人总是要去不断进步的，借用星爷的一句话：努力！奋斗！

* javascript是一种面向对象的编程（OOP）,从最简单的了解
 * 函数：这是一个可以被用来反复调用的方法,函数最重要的一定就是体内有个return返回值
 ```
 function 函数名(参数，注意参数书写规范) { 源代码}
 ```
 
 * 方法:这是相当于一个隐式函数，隐藏的就是对象，在源代码中是用this来调用，this指向的是当前函数体的对象
 ```
 function myfunction(对象被隐藏，name) { this.name }
 ```
 
 * javascript包含六个基本的数据类型：String, Number, Boolean, Undefined, Null, Object
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
   * call()方法，是一个对象可以调用另一个对象的方法，还有继承和多重继承
   ```
   function my(property) { return (this.hasOwnProperty(property)); } var obj={age:20}; my.call(obj,"age");
   ```
 * 继承
 * 递归
 * 闭包
 * 
更多内容可以看https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
