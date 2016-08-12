/*
2016年8月12日 星期五
今天终于把js这章搞完了，来点小心得
*/
var name='ly';
name.length;//length 属性
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');//类似于alert
prompt('where are they from');//become a 问题框，可以输入答案
console.log("ly");//打印

//the check
if (true) {
  console.log('ly');
}

if(true) {
  console.log('ly');
}
else {
  console.log("bad");
}

if(a===1) {
  console.log(1);
}
else if(a===2)
{
  console.log(2);
}
else if(a===3)
{
  console.log(3);
}
else {
  console.log(0);
}

//the function 
var greeting = function (name) {
    console.log(name);
};//create a function 
greeting('ly');//call the function

function orangeCost(price) {
    console.log(5*price);
}// the another method create a function
orangeCost(4);//call the function

var timesTwo = function(number) {
    return number * 2;
}; //
var newNumber = timesTwo(3);//create a instance to call the method
console.log(newNumber);


//the method
var a=Math.random();//这个方法可以在0和1之间随机取一个数0<=a<1;
Math.round(2.8);// 四舍五入的方法
'ly'.toUpperCase();


//the array
var newArray=[1,2,3]//一维数组
var newArray=[[1,2,3],[2,3,4],[4,5,6]]//二维数组

//the object
var obj={
  a:1,
  b:2
};//create a object

var obj=new Object();
obj.a=1;
obj.b=2;// another way to create a object

//the loop
for (var i=0;i<3;i++)//执行条件，执行语句
{
  console.log(i);//打印3次
}

var i=0;
while(i<3){//执行条件
		i++;//执行语句
		console.log(i);
	}
	

var answer = prompt("Add your question here!");
switch(answer) {
  case 'e'://every not common statement
    console.log('ly');
    break;
 case 'l':
     console.log('j');
     break;
    default:
    console.log('bad');
}


//比较符号
true&&true //true
true&&false //false
false&&false //false

true || true //true
false || true //true
false || false //false

1===1 //true
1!==2 //true

= //赋值
== //要转换成相同的数据类型，再进行比较
=== //直接比较，不做转换
! //相反


//the small program
var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");//通讯录
