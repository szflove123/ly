/*
2016年8月12日 星期五
今天终于把js这章搞完了，来点小心得
*/
var name='ly';
name.length;//length 属性
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');//类似于alert
prompt('where are they from');//become a 问题框，可以输入答案
console.log("ly");//打印

-----------------------------
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



---------------------------------------------
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

----------------------------------------------------------------------------

//the method
var a=Math.random();//这个方法可以在0和1之间随机取一个数0<=a<1;
Math.round(2.8);// 四舍五入的方法
'ly'.toUpperCase();//将字符串转换成大写字母
typeof 'ly'//check the 数据类型
obj.hasOwnProperty('a');//检查obj这个对象自身是否具备a这个属性，只能检测自身，继承的属性无法检测


---------------------------------------------------------------
//the array
var newArray=[1,2,3]//一维数组
var newArray=[[1,2,3],[2,3,4],[4,5,6]]//二维数组

---------------------------------------------------------
//the object
var obj={
  a:1,
  b:2
};//create a object

var obj=new Object();
obj.a=1;
obj.b=2;// another way to create a object


function obj(a,b) {
	this.a=1;
	this.b=2;
} //构造函数创建对象
---------------------------------------------------------------------
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


var i=0;
do {
	i++;
	console.log(i);
}
while(i<3);
	

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


---------------------------------------------------

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

------------------------------------------

//遍历循环
for(var property in obj){
	console.log(property);
}


---------------------------------------------
//the small program
var friends = {};//create a obj called obj
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052'] //bill become as a friend property
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']//steve as same as bill
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};//遍历对象的属性

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }//check the friend's property equal the privements
  }// 遍历friend property
};

list(friends);//遍历friends property
search("Steve");//通讯录 search for setev



-----------------------------------------
function Person (name, age) {
    this.name = name;
    this.age = age;
} //consructor function to create a object called Person

var family = new Array(); // create a new array called family
family[0] = new Person("alice", 40); //将数组的每一项赋值为对象
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3]=new Person("timmy",6);


------------------------------------------------------
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
} //consructor function called StaffMember

var sally = new StaffMember("Sally",5);//create a instance object
var bob = new StaffMember("Bob",10);
var me=new StaffMember("Me",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;//object's method add
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }//switch to show the price
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    }, 
    // Create a new method applyStaffDiscount here
    applyStaffDiscount:function (employee) {
    this.total -= this.total * (employee.discountPercent / 100);
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total);
