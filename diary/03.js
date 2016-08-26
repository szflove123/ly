//最近在看关于jquery的用法，特此写下总结
//jquery是和html，css进行交互的一个js库，他是页面更加动态化

--------------
//html
<!DOCTYPE html>
<html>
    <head>
		<title>What Say You?</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script type="text/javascript" src="script.js"></script>
	</head>
	<body>
        <div id="ready">I'm ready!</div>
        <div id="notready">You'll never take me alive, jQuery!</div>
	</body>
</html>

//css
div {
    height:100px;
    width:100px;
    border-radius:5px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-family: Verdana, Arial, Sans-Serif;
    margin-right:5px;
}

#ready {
    background-color:#008800;
    color:#FFFFFF;
}

#notready {
    background-color:#FF0000;
    color:#FFFFFF;
}

//jquery
$(document).ready(function() {
    $('#notready').fadeOut(1000);
});  
//jquery主要有三个部分组成，美元符号$,需要监听的元素#notready,执行的动作
//fadeOut()淡出的效果来隐藏一个元素，括号里面可以放时间，1000ms,后执行，还可以加入回调函数
//fadeIn(),淡入的效果，用法一样
//fadeTo(),淡出的效果
//fadeToggle(),淡入淡出的效果


$(document).rady(function () {
 $('div').slideDown('slow');
});
//slideDown() 方法通过使用滑动效果，显示隐藏的被选元素。
//$(selector).slideDown(speed,callback)

$('#blue').fadeOut('slow');
//id=blue的文件可以用#blue表示
//css想表示为圆形，border-radius: 100%;
//<div class=ly> 表示为$('.ly')
$('$panel').slidToggle('slow');
//作用是可以向下滑出，向上收拢
$('body').append('<p>i/'m a people</p>');
//append() 方法在被选元素的结尾（仍然在内部）插入指定内容
$('.div').after('<p>to</p>');
//在后面添加内容
$('#one').after('<p>to</p>');
$('#two').after($('p'));
//移动<p>标签到two后面
$('p').remove();
//移除掉p这个标签
$('#text').click(function () {
 $(this).addClass('height');
});
//增加一个calss属性
//removeClass()删除一个class属性
//toggleClass()增加删除属性相互切换
$(document).ready(function () {
 $('div').width('10px');
 $('div').css("background-color","blue");
});
//改变css属性
$('p').html('ly');//改变p标签为ly
$('input[name=chik]').val();//从p标签得到值
$('p').on('click','.item',function() {})
//click是执行的事件，.item是被值ixngd元素，function是发生的行为
$('div').dblclick();//连击 两下才回发生的事件
$('img').animate({left: "-=10px"}, 'fast');//图片的移动
$('div').effect('explode');//分裂特效
$('div').effect("bounce", "slow");//反弹特效'bounce', {times:3}, 500
$('div').effect("slide", "slow");//滑动而出
$('div').draggle();//拖动div这个标签
