
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

/////////////////////////////////////////// You must modify Each model ///////////////////////////////////////////


// current page search ////////////////////////////
loc = location.href.split("/"); 
loc.reverse();  
var answer;  
answer = loc[0]; 
// model name
var model1, model2, model3, model4, model5, model6;

function monitor_select() {
    str  = ''
	str += '<font color="2e3c70" style="font-size:42px; font-weight:bold;">SyncMaster </font>'
	//str += '<font color="2e3c70" style="font-size:26px; font-weight:bold;"><sup>Magic</sup> </font>'
	document.write( str );	 
}

function model1() {
model1 = "P2470HD";
document.write(model1);
}

function model2() {
model1 = "P2770HD";
document.write(model1);
}


////////////////////////////////////////////////////




function OpenPDF() {
      window.open("../../_PDF/BN59-00857A-00Eng.pdf", "_blank") ;
}

function OpenReg() {
      window.open("../../_PDF/Regulatory.pdf", "_blank") ;
}

function MagicTune() { 
var myWin1 = window.open("MagicTune.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=350,top=300,left=300 '); 
}

/*function natural() {
	if(navigator.userAgent.indexOf('Win') == -1)
	{ window.open("../../../comfirm/eng/win.htm","_blank",'toolbar=no,resizable=no,scrollbars=no,width=434,height=118,left=' + 400 + ',top=' + 450); }

	else if(navigator.userAgent.indexOf('MSIE') == -1)
	{ window.open("../../../comfirm/eng/ie_color.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=453,height=341,left=' + 350 + ',top=' + 350); }

	else {launch.launch(2)}
}*/

function drive() { 
var myWin1 = window.open("Drive.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=170,top=300,left=300 '); 
}

	

/*function ie_reader() {

	if (navigator.userAgent.indexOf('Win') == -1)
	{ window.open("../../../comfirm/eng/win.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=434,height=118,left=' + 400 + ',top=' + 450); }

	else if(navigator.userAgent.indexOf('MSIE') == -1)
	{ window.open("../../../comfirm/eng/ie_reader.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=453,height=341,left=' + 350 + ',top=' + 350); }

	else {launch.launch(6)}
}*/



function MagicRotation() { 
var myWin2 = window.open("MagicRotation.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=330,top=300,left=300 '); 
}
function MultiScreen() { 
var myWin2 = window.open("MultiScreen.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=330,top=300,left=300 '); 
}


function MDC() {
	if(navigator.userAgent.indexOf('Win') == -1)
	{ window.open("../../../comfirm/eng/win.htm","_blank",'toolbar=no,resizable=no,scrollbars=no,width=434,height=118,left=' + 400 + ',top=' + 450); }

	else if(navigator.userAgent.indexOf('MSIE') == -1)
	{ window.open("../../../comfirm/eng/ie_mdc.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=453,height=341,left=' + 350 + ',top=' + 350); }

	else {launch.launch(35)}
}

/////////////////////////////////////////// End  /////////////////////////////////////////////////////////////////

function namosw_exchange_src()
{
  str = namosw_exchange_src.arguments[0];
  str = (navigator.appName == 'Netscape') ? 'document.' + str : 'document.all.' + str;
  img = eval(str);
  if (img) {
    if (img.ori_src == null) {
      img.ori_src = img.src;
      img.src     = namosw_exchange_src.arguments[1];
    } else {
      var temp    = img.src;
      img.src     = img.ori_src;
      img.ori_src = temp;
    }
  }
}

function namosw_preload_img()
{
  var img_list = namosw_preload_img.arguments;
  if (document.preloadlist == null)
    document.preloadlist = new Array();
  var top = document.preloadlist.length;
  for (var i=0; i < img_list.length; i++) {
    document.preloadlist[top+i]     = new Image;
    document.preloadlist[top+i].src = img_list[i];
  }
}

function OpenWindow(url,intWidth,intHeight) {
      window.open(url, "_blank", "width="+intWidth+",height="+intHeight+",resizable=0,scrollbars=no") ;
}

function gogo(form) {
        var myindex=form.select1.selectedIndex
        window.open(form.select1.options[myindex].value, target="_parent");
}

function gogo2(form) {
        var myindex=select1.selectedIndex
        window.open(select1.options[myindex].value, target="_parent");
}

function namosw_exchange_src()
{
  str = namosw_exchange_src.arguments[0];
  str = (navigator.appName == 'Netscape') ? 'document.' + str : 'document.all.' + str;
  img = eval(str);
  if (img) {
    if (img.ori_src == null) {
      img.ori_src = img.src;
      img.src     = namosw_exchange_src.arguments[1];
    } else {
      var temp    = img.src;
      img.src     = img.ori_src;
      img.ori_src = temp;
    }
  }
}

function namosw_preload_img()
{
  var img_list = namosw_preload_img.arguments;
  if (document.preloadlist == null)
    document.preloadlist = new Array();
  var top = document.preloadlist.length;
  for (var i=0; i < img_list.length; i++) {
    document.preloadlist[top+i]     = new Image;
    document.preloadlist[top+i].src = img_list[i];
  }
}


function OpenWindow(url,intWidth,intHeight) {
      window.open(url, "_blank", "width="+intWidth+",height="+intHeight+",resizable=0,scrollbars=no") ;
}

function openwin(str)
{
		var thereman = screen.availWidth;
		var hereman = screen.availHeight;
		window.open(str, '_parent', 'toolbar=no,resizable=yes,scrollbars=yes,width=900,height=800,left=' + ((thereman - 900 - 5) * .5) + ',top=' + ((hereman - 375 - 30) * .2))
}





//drage start
ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

var drag = 0
var move = false
var dragObj = ""

function init() {
    window.document.onmousemove = mouseMove
    window.document.onmousedown = mouseDown
    window.document.onmouseup = mouseUp
    window.document.ondragstart = mouseStop
}

function mouseDown() {
    if (drag) {
        clickleft = window.event.x - parseInt(dragObj.style.left)
        clicktop = window.event.y - parseInt(dragObj.style.top)
        //dragObj.style.zIndex += 1
        move = true
    }
}

function mouseStop() {
    window.event.returnValue = false
}


function mouseMove() {
    if (move) {
        dragObj.style.left = window.event.x - clickleft
        dragObj.style.top = window.event.y - clicktop
    }
}

function mouseUp() {
    move = false
}

init();
//drage close

//Layer Showing or Hide
function show(id) {
	id = document.getElementById(id)
    id.style.display = 'block';
}

function hide(id) {
	id = document.getElementById(id)
    id.style.display = 'none';
}

function newwin(NewUrl) { 
var width = screen.width; 
var height = screen.height; 
var leftpos = width / 2 - 418; 
var toppos = height / 2 - 328; 

window.open(NewUrl,'_blank','scrollbars=no,status=no,toolbar=no,resizable=no,location=no,menubar=no,width=840,height=707,left='+ leftpos +',top=' + toppos); 
} 


function opensw(NewUrl) { 
var width = screen.width; 
var height = screen.height; 
var leftpos = 0; 
var toppos = 0; 

window.open(NewUrl,'_blank','scrollbars=yes,status=no,toolbar=no,resizable=yes,location=no,menubar=no,width=800,height=710,left='+ leftpos +',top=' + toppos); 
} 

function vchip(NewUrl) { 
var width = screen.width; 
var height = screen.height; 
var leftpos = 0; 
var toppos = 0; 

window.open(NewUrl,'_blank','scrollbars=yes,status=no,toolbar=no,resizable=no,location=no,menubar=no,width=567,height=710,left='+ leftpos +',top=' + toppos); 
} 

n4 = (document.layers) ? 1 : 0
e4 = (document.all) ? 1 : 0

function popUp(L, e) {
        if(n4) {
        	var barron = document.layers[L]
		barron.left = e.pageX 
		barron.top = e.pageY + 10
		barron.visibility = "visible"
        }
        else if(e4) {
        	var barron = document.all[L]
                barron.style.pixelLeft = event.clientX + document.body.scrollLeft 
                barron.style.pixelTop = event.clientY + document.body.scrollTop + 10
                barron.style.visibility = "visible"
        }
}
function popDown2(L) {
        if(n4) {
        	X = document.layers[L]
                barron_ID = setTimeout("clearTimeout(barron_ID); X.visibility = 'hidden'", 1)
        }
        else if(e4) {
        	X = document.all[L]
                barron_ID = setTimeout("clearTimeout(barron_ID); X.style.visibility = 'hidden'", 1)
        }
}


//overTip start
var n = (document.layers) ? 1:0;
var ie = (document.all) ? 1:0;

function overTip(boxObj) {
	if (ie) {
        	boxObj.style.visibility = "visible";
        	boxObj.filters.item(0).stop();
	}          
}
function outTip(boxObj) {
	if (ie) {
		boxObj.style.visibility = "visible";
		boxObj.filters.item(0).transition = 12;
		boxObj.filters.item(0).apply();
		boxObj.style.visibility = "hidden";
		boxObj.filters.item(0).play();
	}
}
//overTip close

////Layer show/hide start///
function getAbsolutePos(el) // showLayer 
{ 
    var r = { x: el.offsetLeft, y: el.offsetTop };
    if (el.offsetParent) {
        var tmp = getAbsolutePos(el.offsetParent);
        r.x += tmp.x;
        r.y += tmp.y;
    }
    return r;
}

function showLayer(lay,obj,xpx) // showLayer
{   
    if(typeof lay != "object") lay = document.getElementById(lay);
    if(typeof obj != "object") obj = document.getElementById(lay);
	
	if(typeof xpx == "undefined") xpx = "0";

	if (lay.style.display == "none")
	{
		lay.style.display = ''; //showLayer

		var pos = getAbsolutePos(obj); 
        lay.style.top = pos.y - 246  + "px";
        lay.style.left = "348 px";
		
		//document.body.scrollTop = pos.y - 246;  // When you push play button, each images is autoscroll.
	}
    else 
	{ 
		lay.style.display = 'none'; //hideLayer
	}
}

function hide(lay) //hideLayer
{
	lay = document.getElementById(lay)
    lay.style.display = 'none';
}

function showLayerMain(lay,obj) // showLayer
{   
    if(typeof lay != "object") lay = document.getElementById(lay);
    if(typeof obj != "object") obj = document.getElementById(lay);
	
	if(typeof xpx == "undefined") xpx = "0";

	if (lay.style.display == "none")
	{
		lay.style.display = ''; //showLayer

	}

}
////Layer show/hide end///





function movr(src,clrOver)  { if (!src.contains(event.fromElement)) { src.bgColor = clrOver; }}
function mout(src,clrIn) { if (!src.contains(event.toElement)) { src.style.cursor = 'default'; src.bgColor = clrIn; }}





// 텍스트 그라데이션
var h="0123456789ABCDEF";
var Fullrgb = "#000000";

function gradient(string, startcolor, endcolor) {
    startcolor = "0x" + startcolor;
    endcolor = "0x" + endcolor;
    var len = string.length;
    var color;
    var start_red = startcolor >> 16;
    var start_green=(startcolor & 0x00FF00) >> 8;
    var start_blue=startcolor & 0x0000FF;
    var end_red = endcolor >> 16;
    var end_green= (endcolor & 0x00FF00) >> 8;
    var end_blue = endcolor & 0x0000FF;
    var incRed = Math.floor((end_red - start_red) / len);
    var incGreen = Math.floor((end_green - start_green) / len);
    var incBlue = Math.floor((end_blue - start_blue) / len);
    for (var x=0; x < len; x++) {
        if (start_red + incRed >= 0x00 && start_red + incRed <= 0xFF) start_red += incRed;
        if (start_green + incGreen >= 0x00 && start_green + incGreen <= 0xFF) start_green += incGreen;
        if (start_blue + incBlue >= 0x00 && start_blue + incBlue <= 0xFF) start_blue += incBlue;
            color = hex(merge(start_red, start_green, start_blue));
            color = Fullrgb.substring(0, 6 - color.length + 1) + color;
            document.write("<font color = " + color + ">", string.charAt(x), "</font>");
    }
}

function merge(r, g, b) {   
    return (r << 16 | g << 8 | b);
}

function hex(c) {
    var temp = "";
    var hexStr = "";
    var remainder, i;
        for ( ; c != 0; c >>= 4) {
            remainder = c % 16;
            hexStr += h.charAt(remainder);
        }
        for (i=5 ; i >= 0; i--)temp += hexStr.charAt(i);
        return temp;
}
// 사용 : gradient("문장", "시작 색상코드", "끝부분 색상코드");