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


