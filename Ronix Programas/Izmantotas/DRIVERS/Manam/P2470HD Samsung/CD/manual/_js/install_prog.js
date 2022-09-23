
var linkList=[
//['javascript:MagicTune()','../../_IMG/Common/index/mt.gif','targetname','--------------------------------  MagicTune  --------------------------------------' ],
//['javascript:MagicRotation()','../../_IMG/Common/index/mr.gif','targetname','--------------------------------  MagicRotation  --------------------------------' ],
//['javascript:MultiScreen()','../../_IMG/Common/index/ms.gif','targetname','--------------------------------  MultiScreen  ------------------------------------' ],
//['javascript:natural()','../../_IMG/Common/index/nc.gif','targetname','--------------------------------  Natural Color  ----------------------------------' ],
['javascript:drive()','../../_IMG/Common/index/menu04.gif','targetname','--------------------------------  Monitor Driver  ---------------------------------' ],
['javascript:ie_reader()','../../_IMG/Common/index/acrobat2.gif','targetname','--------------------------------  Acrobat Reader  --------------------------------' ]
['javascript:ie_MDC()','../../_IMG/Common/index/mdc.gif','targetname','-----------------------------------------  MDC  ----------------------------------------' ],	
//['http://www.astkorea.net','../../_IMG/index/flash.gif','targetname','Flash Player' ]
//['http://www.astkorea.net','../../_IMG/index/menu07.gif','targetname','ETC...' ]
]

var startSize=80; // image minimum size
var curSize=50; 
var endSize=130; // image zoom size
var useText=true; // true = below display text, false = hidden text
var defText='--------------------------------  Install Programs  --------------------------------' //below text
var textGap=10; // between image menu and text gap
var effectW=4.5; 


var textStyle="font-family:Tahoma, verdana, Arial; font-size:11pt; color:777777; font-weight:bold";


var w3c=(document.getElementById)?true:false;
var ie4=(document.all && !w3c)?true:false;
var ie5=(document.all && w3c)?true:false;
var ns4=(document.layers)?true:false;
var mx=0;
var overEl=false;
var enterEl=false;
var id=0;
var elList=new Array();
var elText;
var pgLoaded=false;
if(defText=='')defText='&nbsp;';
effectW=Math.max(2,Math.min(5,effectW))+.5;
var wA=effectW*endSize/2;
var mX=wA/1.5;

function getMxy(v){
mx=(ie5||ie4)?event.clientX:v.pageX;
}

function getEl(s){
if(ns4)return findLayer(s,document);
else return (ie4)?document.all[s]:document.getElementById(s);
}

function getW(e){
return parseInt(e.style.width);
}

function setImgS(i,x){
elList[i].style.width=x;
elList[i].style.height=x;
document.images['linkDockI'+i].width=x;
document.images['linkDockI'+i].height=x;
}

function getL(el){
var x=0;
var sx=(document.all)?document.body.scrollLeft:0;
while(el.offsetParent!=null){
x+=el.offsetLeft;
el=el.offsetParent;
}
return x+el.offsetLeft-sx;
}

function rAll(){
for(i=0;i<elList.length;i++) {
curSize=getW(elList[i]);
if (curSize>startSize) {
id=setTimeout('rAll()',10);
curSize--;
setImgS(i,curSize);
}
}
}

function dockMagnify(){
var tEl,n1,n2;
if(overEl) {if(curSize<endSize) curSize+=5; } else curSize=50;
if(overEl){
for(i=0;i<linkList.length;i++){
tEl=elList[i];
if((getL(tEl)>=mx-wA)&&(getL(tEl)<=mx+wA)){
n1=getL(tEl)+getW(tEl)/2+10;
n2=mx-wA;
n1=(curSize*Math.sin(Math.abs(n1-n2)/mX));
setImgS(i,Math.max(n1,startSize));
}
else 
setImgS(i,startSize);
}
}
}

function mOver(){
overEl=false;
clearTimeout(id);
}

function mOut(){
overEl=false;
id=setTimeout('rAll()',100);
}

function findLayer(name,doc){
var i,layer;
for(i=0;i<doc.layers.length;i++){
layer=doc.layers[i];
if(layer.name==name)return layer;
if(layer.document.layers.length>0)if((layer=findLayer(name,layer.document))!=null)return layer;
}
return null;
}

function writeText(text){
if(useText && pgLoaded){
text=(text<0)?defText:linkList[text][3];
if(text=='')text='&nbsp;';
if(ns4){
elText.document.open();
elText.document.write('<center><span style="'+textStyle+'">'+text+'</span></center>');
elText.document.close();
}
else elText.innerHTML=text;
}
}

function writeHTML(){
var t='';

if(w3c||ie4){
	
	if(useText)t+='<div style="margin-left:25px; "align="left" id="dockText" style="'+textStyle+'; padding-top:'+textGap+'px">'+defText+'</div>';
} else {
t+='<table cellpadding=0 cellspacing=0 border=0><tr valign="middle">';
for(i=0;i<linkList.length;i++)t+='<td height="'+endSize+'"><a href="'+linkList[i][0]+'" rel="balloon1" target="'+linkList[i][2]+'" onmouseover="writeText('+i+')" onmouseout="writeText(-1)" onfocus=this.blur()><img src="'+linkList[i][1]+'" width="'+startSize+'" height="'+startSize+'" border="none"></a></td>';
t+='</tr>';
if(useText)t+='<tr><td colspan="'+linkList.length+'"><td height="'+textGap+'"></td></tr><tr><td colspan="'+linkList.length+'"><ilayer width="'+(linkList.length*startSize)+'"><layer name="dockText" height="100%"></layer></ilayer></td></tr>';
t+='</table>';
}
	
t+='<table cellpadding=0 cellspacing=0 border=0 height="'+endSize+'"><tr><td>';
for(i=0;i<linkList.length;i++){
t+='<span id="linkDockD'+i+'" style="width:'+startSize+'px; height:'+startSize+'px;">';
t+='<a href="'+linkList[i][0]+'" onmouseover="writeText('+i+')" onmouseout="writeText(-1)"><img name="linkDockI'+i+'" src="'+linkList[i][1]+'" width="'+startSize+'" height="'+startSize+'" border="none"></a>';
t+='</span>';
}
t+='</td></tr></table>';

document.write(t);
}

window.onload=function(){
if(w3c||ie4){
for(j=0;j<linkList.length;j++){
elList[j]=getEl('linkDockD'+j);
elList[j].n=j;
elList[j].onmouseover=mOver;
elList[j].onmouseout=mOut;
}
document.onmousemove=getMxy;
setInterval('dockMagnify()',20);
}
elText=getEl('dockText');
if(ns4)writeText(-1);
pgLoaded=true;
}
writeHTML();

