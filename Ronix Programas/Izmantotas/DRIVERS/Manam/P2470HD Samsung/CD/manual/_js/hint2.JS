var tf = 20;//위 여백
var lf = -180;//왼쪽여백
var IDSU_HINT = "stop";
var tag = Array("A","DIV","SPAN");//도움말을 추가할 html 태그 목록
var ap = 10;//도움말이 나타날 속도 적을수록 빠릅니다.

hint_start = function()
{
	var cnt = tag.length;
	for(i=0;i<cnt;i++)
	{
		var obj = document.getElementsByTagName(tag[i]);
		var obj_cnt = obj.length;
		for(o=0;o<obj_cnt;o++)
		{
			if(obj[o].className=="hint")
			{
				hint_event(obj[o]);
			}
		}
	}
}

hint_event = function(obj)
{
	var OEvent = function(){hint_view(arguments[0],obj.name);}
	var OEvent2 = function(){hint_None();}
	if(window.addEventListener)
	{
		obj.addEventListener("mouseover",OEvent,false);//mozilla,firefox
		obj.addEventListener("mouseout",OEvent2,false);//mozilla,firefox
	}
	else
	{
		obj.attachEvent("onmouseover",OEvent);//ie
		obj.attachEvent("onmouseout",OEvent2);//ie
	}
}
hint_view = function(e,text)
{
	var f = document.getElementById('IDSU_HINT');
	if(document.all)
	{
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
	else
	{
		mouseX = e.pageX;
		mouseY = e.pageY;
	}
	mouseX = mouseX+lf+document.body.scrollLeft;
	mouseY = mouseY+tf+document.body.scrollTop;
	if(mouseX < 0) mouseX = 0;
    if(mouseY < 0) mouseY = 0;
	f.style.top = mouseY;
	f.style.left = mouseX;

	hint_alpha(0);
	f.innerHTML = hint_style().replace("hint",text);
	IDSU_HINT = "start";
}
hint_None = function()
{
	document.getElementById('IDSU_HINT').innerHTML = "";
	IDSU_HINT = "stop";
}

hint_alpha = function(no)
{
	var alpha = 0;
	alpha = no+10;
	obj = document.getElementById('IDSU_HINT');
	objs = obj.style;
	if(document.all)
	{
		objs.filter = "alpha(opacity:"+alpha+")";
	}
	else
	{
		objs.opacity = alpha/100;
	}
	if(no!=100)
	{
		setTimeout("hint_alpha("+alpha+")",ap);
	}
}
hint_style = function()
{
	st = "<table cellpadding=\"7\" cellspacing=\"0\" style=\"border:1px solid #CCCCCC;background-color:#FFFFFF;\">";
	st += "<tr><td>";
	st += "hint";//도움말이 나오는곳 이곳은 수정하시면 안되용~
	st += "</td></tr>";
	st += "</table>";
	return st;
}

document.write('<div id="IDSU_HINT" style="position:absolute"></div>');
window.onload = function(){hint_start();}