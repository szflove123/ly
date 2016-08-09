最近做了关于node的一些课程，课程也讲了很多笔记。觉得很棒，可以写点东西来总结一下，以便加深自己的印象

-----

那上面全是英语，对于我这种连4级英语都没有通过的，全是靠一个个单词翻译的，这下读者有福了，我都为你们翻译出来了

* 首先来讲讲一些概念的东东
 * 书上是如此说的： 作用域，作用域链，闭包，垃圾回收，他们都是非常严谨的
 * var 表示一个变量是当前词法的作用域
 
 ```javascript
   function someFunc() {
      var aVariable; //只能在这个函数里使用
    }
  ```
  
  * 作用域链
  
  ```javascript
  function someFunc() {
      function inner() {
      } //inner函数镶嵌在somefunc这个函数中
    }
  ```
  
    * 所有嵌套作用域都遵循相同的规则，就是内部函数可以访问外部函数，但是外部不可以访问内部函数
    for example 
    
    ```javascript
     function someFunc() {
      var outerVar = 1;
      function inner() {
        var innerVar = 2;
      } //内部函数可以访问两个变量innervar和outervar
    }   //外部函数只可以访问outervar
    ```
    
    * 嵌套不限制在一个范围内，可以有多个嵌套
    for example
    
    ```javascript
     function someFunc() {
      function inner() {
      }
      function inner2() {
        function foo() {
        }
      }
    }

// Produces this tree

       someFunc()
           |
          / \
         /   \
        /     \
       ↓       ↓
    inner()  inner2()
               |
               ↓
             foo()
  ```
  
* js的运行时间遵循以下步骤去分配变量
 * 在当前作用域下面搜寻
 * 如果没有找到，就寻找外部的作用域
 * 如果找到了，就执行第6步
 * 如果还是没有找到，就执行第2步，直到全局作用域到达为止
 * 如果全局作用域都没有，那就创建一个值（全局变量/当前窗口）
 * 给这个值赋值

for example

```javascript
 function someFunc() {
       var scopedVar = 1;   //局部变量
       function inner() {
          foo = 2; //全局变量
       }
    }
 ```
 
* 闭包的概念很重要，他能够很好的去使用异步编程，具体看![闭包](https://github.com/ly1314529/ly/blob/master/Summary/%E9%97%AD%E5%8C%85%E7%9A%84%E6%A6%82%E5%BF%B5.md) 
    
