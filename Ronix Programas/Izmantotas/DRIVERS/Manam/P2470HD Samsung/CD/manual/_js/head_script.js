 // jjol

var isDOM = (document.getElementById ? true : false); 
var isIE4 = ((document.all && !isDOM) ? true : false);
var isNS4 = (document.layers ? true : false);

function getRef(id)
{
	if (isDOM) return document.getElementById(id);
	if (isIE4) return document.all[id];
	if (isNS4) return document.layers[id];
}

var isNS = navigator.appName == "Netscape";

function moveRightEdge()
{
	var yMenuFrom, yMenuTo, yOffset, timeoutNextCheck;
	if (isNS4)
	{
		yMenuFrom   = divMenu.top;
		yMenuTo     = windows.pageYOffset + 100;   // up
	}
	else if (isDOM)
	{
		yMenuFrom   = parseInt (divMenu.style.top, 10);
		yMenuTo     = (isNS ? window.pageYOffset : document.body.scrollTop) + 300; // up
	}

	timeoutNextCheck = 500;

	if (yMenuFrom != yMenuTo)
	{
		yOffset = Math.ceil(Math.abs(yMenuTo - yMenuFrom) / 20);
		if (yMenuTo < yMenuFrom)
			yOffset = -yOffset;
		if (isNS4)
			divMenu.top += yOffset;
		else if (isDOM)
			divMenu.style.top = parseInt (divMenu.style.top, 10) + yOffset;
			timeoutNextCheck = 10;
	}
	setTimeout ("moveRightEdge()", timeoutNextCheck);
}
 // jjol 끝
 
 //  각페이지 메뉴 시작
 <!-- Core MyCSSMenu Code -->
/* <![CDATA[ */var qm_si,qm_li,qm_lo,qm_tt,qm_th,qm_ts,qm_la,qm_ic,qm_ib;var qp="parentNode";var qc="className";var qm_t=navigator.userAgent;var qm_o=qm_t.indexOf("Opera")+1;var qm_s=qm_t.indexOf("afari")+1;var qm_s2=qm_s&&qm_t.indexOf("ersion/2")+1;var qm_s3=qm_s&&qm_t.indexOf("ersion/3")+1;var qm_n=qm_t.indexOf("Netscape")+1;var qm_v=parseFloat(navigator.vendorSub);;function qm_create(sd,v,ts,th,oc,rl,sh,fl,ft,aux,l){var w="onmouseover";var ww=w;var e="onclick";if(oc){if(oc=="all"||(oc=="lev2"&&l>=2)){w=e;ts=0;}if(oc=="all"||oc=="main"){ww=e;th=0;}}if(!l){l=1;qm_th=th;sd=document.getElementById("qm"+sd);if(window.qm_pure)sd=qm_pure(sd);sd[w]=function(e){qm_kille(e)};document[ww]=qm_bo;if(oc=="main"){qm_ib=true;sd[e]=function(event){qm_ic=true;qm_oo(new Object(),qm_la,1);qm_kille(event)};document.onmouseover=function(){qm_la=null;clearTimeout(qm_tt);qm_tt=null;};}sd.style.zoom=1;if(sh)x2("qmsh",sd,1);if(!v)sd.ch=1;}else  if(sh)sd.ch=1;if(oc)sd.oc=oc;if(sh)sd.sh=1;if(fl)sd.fl=1;if(ft)sd.ft=1;if(rl)sd.rl=1;sd.style.zIndex=l+""+1;var lsp;var sp=sd.childNodes;for(var i=0;i<sp.length;i++){var b=sp[i];if(b.tagName=="A"){lsp=b;b[w]=qm_oo;if(w==e)b.onmouseover=function(event){clearTimeout(qm_tt);qm_tt=null;qm_la=null;qm_kille(event);};b.qmts=ts;if(l==1&&v){b.style.styleFloat="none";b.style.cssFloat="none";}}else  if(b.tagName=="DIV"){if(window.showHelp&&!window.XMLHttpRequest)sp[i].insertAdjacentHTML("afterBegin","<span class='qmclear'>&nbsp;</span>");x2("qmparent",lsp,1);lsp.cdiv=b;b.idiv=lsp;if(qm_n&&qm_v<8&&!b.style.width)b.style.width=b.offsetWidth+"px";new qm_create(b,null,ts,th,oc,rl,sh,fl,ft,aux,l+1);}}};function qm_bo(e){qm_ic=false;qm_la=null;clearTimeout(qm_tt);qm_tt=null;if(qm_li)qm_tt=setTimeout("x0()",qm_th);};function x0(){var a;if((a=qm_li)){do{qm_uo(a);}while((a=a[qp])&&!qm_a(a))}qm_li=null;};function qm_a(a){if(a[qc].indexOf("qmmc")+1)return 1;};function qm_uo(a,go){if(!go&&a.qmtree)return;if(window.qmad&&qmad.bhide)eval(qmad.bhide);a.style.visibility="";x2("qmactive",a.idiv);};;function qa(a,b){return String.fromCharCode(a.charCodeAt(0)-(b-(parseInt(b/2)*2)));};function qm_oo(e,o,nt){if(!o)o=this;if(qm_la==o&&!nt)return;if(window.qmv_a&&!nt)qmv_a(o);if(window.qmwait){qm_kille(e);return;}clearTimeout(qm_tt);qm_tt=null;qm_la=o;if(!nt&&o.qmts){qm_si=o;qm_tt=setTimeout("qm_oo(new Object(),qm_si,1)",o.qmts);return;}var a=o;if(a[qp].isrun){qm_kille(e);return;}if(qm_ib&&!qm_ic)return;var go=true;while((a=a[qp])&&!qm_a(a)){if(a==qm_li)go=false;}if(qm_li&&go){a=o;if((!a.cdiv)||(a.cdiv&&a.cdiv!=qm_li))qm_uo(qm_li);a=qm_li;while((a=a[qp])&&!qm_a(a)){if(a!=o[qp]&&a!=o.cdiv)qm_uo(a);else break;}}var b=o;var c=o.cdiv;if(b.cdiv){var aw=b.offsetWidth;var ah=b.offsetHeight;var ax=b.offsetLeft;var ay=b.offsetTop;if(c[qp].ch){aw=0;if(c.fl)ax=0;}else {if(c.ft)ay=0;if(c.rl){ax=ax-c.offsetWidth;aw=0;}ah=0;}if(qm_o){ax-=b[qp].clientLeft;ay-=b[qp].clientTop;}if(qm_s2&&!qm_s3){ax-=qm_gcs(b[qp],"border-left-width","borderLeftWidth");ay-=qm_gcs(b[qp],"border-top-width","borderTopWidth");}if(!c.ismove){c.style.left=(ax+aw)+"px";c.style.top=(ay+ah)+"px";}x2("qmactive",o,1);if(window.qmad&&qmad.bvis)eval(qmad.bvis);c.style.visibility="inherit";qm_li=c;}else  if(!qm_a(b[qp]))qm_li=b[qp];else qm_li=null;qm_kille(e);};function qm_gcs(obj,sname,jname){var v;if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);else  if(obj.currentStyle)v=obj.currentStyle[jname];if(v&&!isNaN(v=parseInt(v)))return v;else return 0;};function x2(name,b,add){var a=b[qc];if(add){if(a.indexOf(name)==-1)b[qc]+=(a?' ':'')+name;}else {b[qc]=a.replace(" "+name,"");b[qc]=b[qc].replace(name,"");}};function qm_kille(e){if(!e)e=event;e.cancelBubble=true;if(e.stopPropagation&&!(qm_s&&e.type=="click"))e.stopPropagation();};function qm_pure(sd){if(sd.tagName=="UL"){var nd=document.createElement("DIV");nd.qmpure=1;var c;if(c=sd.style.cssText)nd.style.cssText=c;qm_convert(sd,nd);var csp=document.createElement("SPAN");csp.className="qmclear";csp.innerHTML="&nbsp;";nd.appendChild(csp);sd=sd[qp].replaceChild(nd,sd);sd=nd;}return sd;};function qm_convert(a,bm,l){if(!l)bm[qc]=a[qc];bm.id=a.id;var ch=a.childNodes;for(var i=0;i<ch.length;i++){if(ch[i].tagName=="LI"){var sh=ch[i].childNodes;for(var j=0;j<sh.length;j++){if(sh[j]&&(sh[j].tagName=="A"||sh[j].tagName=="SPAN"))bm.appendChild(ch[i].removeChild(sh[j]));if(sh[j]&&sh[j].tagName=="UL"){var na=document.createElement("DIV");var c;if(c=sh[j].style.cssText)na.style.cssText=c;if(c=sh[j].className)na.className=c;na=bm.appendChild(na);new qm_convert(sh[j],na,1)}}}}}/* ]]> */
 
<!-- Add-On Core Code (Remove when not using any add-on's) -->
var qmad = new Object();qmad.bvis="";qmad.bhide="";

<!-- Add-On Settings -->
		/*******  Menu 0 Add-On Settings *******/
		var a = qmad.qm0 = new Object();
		
		// Box Animation Add On
		a.box_animation_frames = 20;
		a.box_accelerator = 0.4;
		a.box_position = "center";		

		// Rounded Corners Add On
		a.rcorner_size = 6;
		a.rcorner_border_color = "#dadada";
		a.rcorner_bg_color = "#F7F7F7";
		a.rcorner_apply_corners = new Array(false,true,true,true);
		a.rcorner_top_line_auto_inset = true;

		// Rounded Items Add On
		a.ritem_size = 4;
		a.ritem_apply = "main";
		a.ritem_main_apply_corners = new Array(true,true,false,false);
		a.ritem_show_on_actives = true;
		
<!-- Add-On Code: Rounded Corners -->
/* <![CDATA[ */qmad.rcorner=new Object();qmad.br_ie7=navigator.userAgent.indexOf("MSIE 7")+1;if(qmad.bvis.indexOf("qm_rcorner(b.cdiv);")==-1)qmad.bvis+="qm_rcorner(b.cdiv);";;function qm_rcorner(a,hide,force){var z;if(!hide&&((z=window.qmv)&&(z=z.addons)&&(z=z.round_corners)&&!z["on"+qm_index(a)]))return;var q=qmad.rcorner;if((!hide&&!a.hasrcorner)||force){var ss;if(!a.settingsid){var v=a;while((v=v.parentNode)){if(v.className.indexOf("qmmc")+1){a.settingsid=v.id;break;}}}ss=qmad[a.settingsid];if(!ss)return;if(!ss.rcorner_size)return;q.size=ss.rcorner_size;q.background=ss.rcorner_bg_color;if(!q.background)q.background="transparent";q.border=ss.rcorner_border_color;if(!q.border)q.border="#ff0000";q.angle=ss.rcorner_angle_corners;q.corners=ss.rcorner_apply_corners;if(!q.corners||q.corners.length<4)q.corners=new Array(true,1,1,1);q.tinset=0;if(ss.rcorner_top_line_auto_inset&&qm_a(a[qp]))q.tinset=a.idiv.offsetWidth;q.opacity=ss.rcorner_opacity;if(q.opacity&&q.opacity!=1){var addf="";if(window.showHelp)addf="filter:alpha(opacity="+(q.opacity*100)+");";q.opacity="opacity:"+q.opacity+";"+addf;}else q.opacity="";var f=document.createElement("SPAN");x2("qmrcorner",f,1);var fs=f.style;fs.position="absolute";fs.display="block";fs.top="0px";fs.left="0px";var size=q.size;q.mid=parseInt(size/2);q.ps=new Array(size+1);var t2=0;q.osize=q.size;if(!q.angle){for(var i=0;i<=size;i++){if(i==q.mid)t2=0;q.ps[i]=t2;t2+=Math.abs(q.mid-i)+1;}q.osize=1;}var fi="";for(var i=0;i<size;i++)fi+=qm_rcorner_get_span(size,i,1,q.tinset);fi+='<span qmrcmid=1 style="background-color:'+q.background+';border-color:'+q.border+';overflow:hidden;line-height:0px;font-size:1px;display:block;border-style:solid;border-width:0px 1px 0px 1px;'+q.opacity+'"></span>';for(var i=size-1;i>=0;i--)fi+=qm_rcorner_get_span(size,i);f.innerHTML=fi;f.noselect=1;a.insertBefore(f,a.firstChild);a.hasrcorner=f;}var b=a.hasrcorner;if(b){if(!a.offsetWidth)a.style.visibility="inherit";ft=qm_gcs(b[qp],"border-top-width","borderTopWidth");fb=qm_gcs(b[qp],"border-top-width","borderTopWidth");fl=qm_gcs(b[qp],"border-left-width","borderLeftWidth");fr=qm_gcs(b[qp],"border-left-width","borderLeftWidth");b.style.width=(a.offsetWidth-fl)+"px";b.style.height=(a.offsetHeight-fr)+"px";if(qmad.br_ie7){var sp=b.getElementsByTagName("SPAN");for(var i=0;i<sp.length;i++)sp[i].style.visibility="inherit";}b.style.visibility="inherit";var s=b.childNodes;for(var i=0;i<s.length;i++){if(s[i].getAttribute("qmrcmid"))s[i].style.height=Math.abs((a.offsetHeight-(q.osize*2)-ft-fb))+"px";}}};function qm_rcorner_get_span(size,i,top,tinset){var q=qmad.rcorner;var mlmr;if(i==0){var mo=q.ps[size]+q.mid;if(q.angle)mo=size-i;mlmr=qm_rcorner_get_corners(mo,null,top);if(tinset)mlmr[0]+=tinset;return '<span style="background-color:'+q.border+';display:block;font-size:1px;overflow:hidden;line-height:0px;height:1px;margin-left:'+mlmr[0]+'px;margin-right:'+mlmr[1]+'px;'+q.opacity+'"></span>';}else {var md=size-(i);var ih=1;var bs=1;if(!q.angle){if(i>=q.mid)ih=Math.abs(q.mid-i)+1;else {bs=Math.abs(q.mid-i)+1;md=q.ps[size-i]+q.mid;}if(top)q.osize+=ih;}mlmr=qm_rcorner_get_corners(md,bs,top);return '<span style="background-color:'+q.background+';border-color:'+q.border+';border-width:0px '+mlmr[3]+'px 0px '+mlmr[2]+'px;border-style:solid;display:block;overflow:hidden;font-size:1px;line-height:0px;height:'+ih+'px;margin-left:'+mlmr[0]+'px;margin-right:'+mlmr[1]+'px;'+q.opacity+'"></span>';}};function qm_rcorner_get_corners(mval,bval,top){var q=qmad.rcorner;var ml=mval;var mr=mval;var bl=bval;var br=bval;if(top){if(!q.corners[0]){ml=0;bl=1;}if(!q.corners[1]){mr=0;br=1;}}else {if(!q.corners[2]){mr=0;br=1;}if(!q.corners[3]){ml=0;bl=1;}}return new Array(ml,mr,bl,br);}/* ]]> */


<!-- Add-On Code: Box Animation -->
/* <![CDATA[ */qmad.br_navigator=navigator.userAgent.indexOf("Netscape")+1;qmad.br_version=parseFloat(navigator.vendorSub);qmad.br_oldnav=qmad.br_navigator&&qmad.br_version<7.1;qmad.br_ie=window.showHelp;qmad.br_mac=navigator.userAgent.indexOf("Mac")+1;qmad.br_old_safari=navigator.userAgent.indexOf("afari")+1&&!window.XMLHttpRequest;qmad.box_off=(qmad.br_mac&&qmad.br_ie)||qmad.br_old_safari;if(!qmad.box){qmad.box=new Object();if(qmad.bvis.indexOf("qm_box_a(b.cdiv);")==-1)qmad.bvis+="qm_box_a(b.cdiv);";if(qmad.bhide.indexOf("qm_box_a(a,1);")==-1)qmad.bhide+="qm_box_a(a,1);";if(window.attachEvent)document.attachEvent("onmouseover",qm_box_hide);else  if(window.addEventListener)document.addEventListener("mouseover",qm_box_hide,false);};function qm_box_a(a,hide){var z;if((a.style.visibility=="inherit"&&!hide)||(qmad.box_off)||((z=window.qmv)&&(z=z.addons)&&(z=z.box_effect)&&!z["on"+qm_index(a)]))return;var ss;if(!a.settingsid){var v=a;while((v=v.parentNode)){if(v.className.indexOf("qmmc")+1){a.settingsid=v.id;break;}}}ss=qmad[a.settingsid];if(!ss)return;if(!ss.box_animation_frames)return;qm_th=0;var steps=ss.box_animation_frames;var b=new Object();b.obj=a;b.accelerator=ss.box_accelerator;if(!b.accelerator)b.accelerator=0;b.position=ss.box_position;if(!b.position)b.position="center";if(!a.hasbox){var s=document.createElement("SPAN");s.className="qmbox";s.style.display="block";s.style.position="absolute";s.style.top=a.offsetTop+"px";s.style.left=a.offsetLeft+"px";s.style.fontSize="1px";s.style.lineHieght="0px";s=a[qp].appendChild(s);a.hasbox=s;}b.stepx=a.offsetWidth/steps;b.stepy=a.offsetHeight/steps;if(hide){b.growx=a.hasbox.offsetWidth;b.growy=a.hasbox.offsetHeight;b.ishide=true;}else {b.growx=0;b.growy=0;}b.fixsize=2;x2("qmfh",a,1);if(a.hasshadow)x2("qmfh",a.hasshadow,1);a.hasbox.style.visibility="visible";qm_box_ai(qm_box_am(b,hide),hide);};function qm_box_ai(id,hide){var a=qmad.box["_"+id];if(!a||!a.obj.hasbox)return;var box=a.obj.hasbox;var sub=a.obj;a.stepy+=a.accelerator;a.stepx+=a.accelerator;var go=false;if(!hide){a.growx+=a.stepx;a.growy+=a.stepy;if(a.growx<sub.offsetWidth){go=true;box.style.width=parseInt(a.growx)+"px";qm_box_position_it(box,a);}else box.style.width=(sub.offsetWidth-a.fixsize)+"px";if(a.growy<sub.offsetHeight){go=true;box.style.height=parseInt(a.growy)+"px";}else box.style.height=(sub.offsetHeight-a.fixsize)+"px";}else {a.growx-=a.stepx;a.growy-=a.stepy;if(a.growx>0){go=true;box.style.width=parseInt(a.growx)+"px";qm_box_position_it(box,a);}else box.style.width=0+"px";if(a.growy>0){go=true;box.style.height=parseInt(a.growy)+"px";}else box.style.height=0+"px";}if(go){a.timer=setTimeout("qm_box_ai("+id+","+hide+")",10);}else {if(!hide)qm_box_position_it(box,a,1);x2("qmfh",sub);if(sub.hasshadow)x2("qmfh",sub.hasshadow);box.style.visibility="hidden";}};function qm_box_position_it(box,a,def){if(a.position=="center"){box.style.left=parseInt((a.obj.offsetWidth-box.offsetWidth)/2)+a.obj.offsetLeft+"px";box.style.top=parseInt((a.obj.offsetHeight-box.offsetHeight)/2)+a.obj.offsetTop+"px";}else {if(a.position=="top"){box.style.left=parseInt((a.obj.offsetWidth-box.offsetWidth)/2)+a.obj.offsetLeft+"px";box.style.top=a.obj.offsetTop+"px";}else  if(a.position=="left"){box.style.left=a.obj.offsetLeft+"px";box.style.top=parseInt((a.obj.offsetHeight-box.offsetHeight)/2)+a.obj.offsetTop+"px";}}};function qm_box_hide(){var z;if((z=window.qmv)&&(z=z.addons)&&(z=z.box_effect)&&!qmv.preview_mode)return;var k;for(k in qmad.box){var a;if((a=qmad.box[k]).obj){if(!a.ishide&&a.timer){clearTimeout(a.timer);a.timer=null;qm_box_a(a.obj,1);}}}};function qm_box_am(obj,hide){var k;for(k in qmad.box){if(qmad.box[k]&&obj.obj==qmad.box[k].obj){if(qmad.box[k].timer){clearTimeout(qmad.box[k].timer);qmad.box[k].timer=null;}qmad.box[k]=null;}}var i=0;while(qmad.box["_"+i])i++;qmad.box["_"+i]=obj;return i;}/* ]]> */


<!-- Add-On Code: Rounded Items -->
/* <![CDATA[ */qmad.br_navigator=navigator.userAgent.indexOf("Netscape")+1;qmad.br_version=parseFloat(navigator.vendorSub);qmad.br_oldnav6=qmad.br_navigator&&qmad.br_version<7;qmad.br_strict=(dcm=document.compatMode)&&dcm=="CSS1Compat";qmad.br_ie=window.showHelp;qmad.str=(qmad.br_ie&&!qmad.br_strict);if(!qmad.br_oldnav6){if(!qmad.ritem){qmad.ritem=new Object();if(qmad.bvis.indexOf("qm_ritem_a(b.cdiv);")==-1){qmad.bvis+="qm_ritem_a(b.cdiv);";qmad.bhide+="qm_ritem_a_hide(a);";}if(window.attachEvent)window.attachEvent("onload",qm_ritem_init);else  if(window.addEventListener)window.addEventListener("load",qm_ritem_init,1);var ca="cursor:pointer;";if(qmad.br_ie)ca="cursor:hand;";var wt='<style type="text/css">.qmvritemmenu{}';wt+=".qmmc .qmritem span{"+ca+"}";document.write(wt+'</style>');}};function qm_ritem_init(e,spec){var z;if((z=window.qmv)&&(z=z.addons)&&(z=z.ritem)&&(!z["on"+qmv.id]&&z["on"+qmv.id]!=undefined&&z["on"+qmv.id]!=null))return;qm_ts=1;var q=qmad.ritem;var a,b,r,sx,sy;z=window.qmv;for(i=0;i<10;i++){if(!(a=document.getElementById("qm"+i))||(!isNaN(spec)&&spec!=i))continue;var ss=qmad[a.id];if(ss&&ss.ritem_size){q.size=ss.ritem_size;q.apply=ss.ritem_apply;if(!q.apply)q.apply="main";q.angle=ss.ritem_angle_corners;q.corners_main=ss.ritem_main_apply_corners;if(!q.corners_main||q.corners_main.length<4)q.corners_main=new Array(true,1,1,1);q.corners_sub=ss.ritem_sub_apply_corners;if(!q.corners_sub||q.corners_sub.length<4)q.corners_sub=new Array(true,1,1,1);q.sactive=false;if(ss.ritem_show_on_actives)q.sactive=true;q.opacity=ss.ritem_opacity;if(q.opacity&&q.opacity!=1){var addf="";if(window.showHelp)addf="filter:alpha(opacity="+(q.opacity*100)+");";q.opacity="opacity:"+q.opacity+";"+addf;}else q.opacity="";qm_ritem_add_rounds(a);}}};function qm_ritem_a_hide(a){if(a.idiv.hasritem&&qmad.ritem.sactive)a.idiv.hasritem.style.visibility="hidden";};function qm_ritem_a(a){if(a)qmad.ritem.a=a;else a=qmad.ritem.a;if(a.idiv.hasritem&&qmad.ritem.sactive)a.idiv.hasritem.style.visibility="inherit";if(a.ritemfixed)return;var aa=a.childNodes;for(var i=0;i<aa.length;i++){var b;if(b=aa[i].hasritem){if(!aa[i].offsetWidth){setTimeout("qm_ritem_a()",10);return;}else {b.style.top="0px";b.style.left="0px";b.style.width=aa[i].offsetWidth+"px";a.ritemfixed=1;}}}};function qm_ritem_add_rounds(a){var q=qmad.ritem;var atags,ist,isd,isp,gom,gos;if(q.apply.indexOf("titles")+1)ist=true;if(q.apply.indexOf("dividers")+1)isd=true;if(q.apply.indexOf("parents")+1)isp=true;if(q.apply.indexOf("sub")+1)gos=true;if(q.apply.indexOf("main")+1)gom=true;atags=a.childNodes;for(var k=0;k<atags.length;k++){if((atags[k].tagName!="SPAN"&&atags[k].tagName!="A")||(q.sactive&&!atags[k].cdiv))continue;var ism=qm_a(atags[k][qp]);if((isd&&atags[k].className.indexOf("qmdivider")+1)||(ist&&atags[k].className.indexOf("qmtitle")+1)||(gom&&ism&&atags[k].tagName=="A")||(atags[k].className.indexOf("qmrounditem")+1)||(gos&&!ism&&atags[k].tagName=="A")||(isp&&atags[k].cdiv)){var f=document.createElement("SPAN");f.className="qmritem";f.setAttribute("qmvbefore",1);var fs=f.style;fs.position="absolute";fs.display="block";fs.top="0px";fs.left="0px";fs.width=atags[k].offsetWidth+"px";if(q.sactive&&atags[k].cdiv.style.visibility!="inherit")fs.visibility="hidden";var size=q.size;q.mid=parseInt(size/2);q.ps=new Array(size+1);var t2=0;q.osize=q.size;if(!q.angle){for(var i=0;i<=size;i++){if(i==q.mid)t2=0;q.ps[i]=t2;t2+=Math.abs(q.mid-i)+1;}q.osize=1;}var fi="";var ctype="main";if(!ism)ctype="sub";for(var i=0;i<size;i++)fi+=qm_ritem_get_span(size,i,1,ctype);var cn=atags[k].cloneNode(true);var cns=cn.getElementsByTagName("SPAN");for(var l=0;l<cns.length;l++){if(cns[l].getAttribute("isibulletcss")||cns[l].getAttribute("isibullet"))cn.removeChild(cns[l]);}fi+='<span class="qmritemcontent" style="display:block;border-style:solid;border-width:0px 1px 0px 1px;'+q.opacity+'">'+cn.innerHTML+'</span>';for(var i=size-1;i>=0;i--)fi+=qm_ritem_get_span(size,i,null,ctype);f.innerHTML=fi;f=atags[k].insertBefore(f,atags[k].firstChild);atags[k].hasritem=f;}if(atags[k].cdiv)new qm_ritem_add_rounds(atags[k].cdiv);}};function qm_ritem_get_span(size,i,top,ctype){var q=qmad.ritem;var mlmr;if(i==0){var mo=q.ps[size]+q.mid;if(q.angle)mo=size-i;var fs="";if(qmad.str)fs="&nbsp;";mlmr=qm_ritem_get_corners(mo,null,top,ctype);return '<span style="border-width:1px 0px 0px 0px;border-style:solid;display:block;font-size:1px;overflow:hidden;line-height:0px;height:0px;margin-left:'+mlmr[0]+'px;margin-right:'+mlmr[1]+'px;'+q.opacity+'">'+fs+'</span>';}else {var md=size-(i);var ih=1;var bs=1;if(!q.angle){if(i>=q.mid)ih=Math.abs(q.mid-i)+1;else {bs=Math.abs(q.mid-i)+1;md=q.ps[size-i]+q.mid;}if(top)q.osize+=ih;}mlmr=qm_ritem_get_corners(md,bs,top,ctype);return '<span style="border-width:0px '+mlmr[3]+'px 0px '+mlmr[2]+'px;border-style:solid;display:block;overflow:hidden;font-size:1px;line-height:0px;height:'+ih+'px;margin-left:'+mlmr[0]+'px;margin-right:'+mlmr[1]+'px;'+q.opacity+'"></span>';}};function qm_ritem_get_corners(mval,bval,top,ctype){var q=qmad.ritem;var ml=mval;var mr=mval;var bl=bval;var br=bval;if(top){if(!q["corners_"+ctype][0]){ml=0;bl=1;}if(!q["corners_"+ctype][1]){mr=0;br=1;}}else {if(!q["corners_"+ctype][2]){mr=0;br=1;}if(!q["corners_"+ctype][3]){ml=0;bl=1;}}return new Array(ml,mr,bl,br);}/* ]]> */

 // 각페이지 메뉴 끝
 




//////////////////////////////////////
/**
* embed 패치 적용 컨테이너
* null인경우 document 값을 기본으로 합니다
* id값을 설정한경우 설정범위 내에만 적용이 됩니다
* 
* 본문이나 일부 노드에만 적용할경우 해당 노드의 id 값을 입력하실 수 있습니다
* 예)
* var __embed_target_id = "contents";
* 로 처리한경우 body 내에 <태그 id="contents">플래쉬,동영상...</태그>
* 안에 내용에만 패치가 적용됩니다
*/
if(typeof(__embed_target_id)=='undefined'){
	var __embed_target_id = null;
}

/**
* embed 패치를 적용할 태그를 설정합니다
* 기본값은 object,eembed,appelt 태그입니다
* false 값인경우 패치에서 제외됩니다
*/
if(typeof(__embed_tags)=='undefined'){
	var __embed_tags = {object:true,embed:true,applet:false}
}

/**
* 플래쉬파일중 flashvars 를 사용할경우 해당 플래쉬의 오브젝트아이디:true 값으로 object를 등록해 주세요
*/
var __flash_force_objs = {};

if(document.attachEvent){
	document.write('<style type="text/css">');
	document.write('object,embed{display:none;}');
	document.write('</style>');
	document.attachEvent('onreadystatechange',
		function (){
			
			if(__embed_target_id===null){
				var __target = document;
			}else{
				var __target = document.getElementById(__embed_target_id);
			}
			if (document.readyState == "complete"){
				function _replace(obj){
					var obj_re = document.createElement(obj.outerHTML);					
					obj_re.style.display='inline';
					obj.parentNode.replaceChild(obj_re,obj);
				}
				function _inner(obj){
					obj.style.display='inline';					
					var html = obj.outerHTML;
					var classid = obj.classid.toLowerCase();
					if(classid=='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' && typeof(__flash_force_objs[obj.id])=='undefined'){//flash 인경우
						obj.insertAdjacentHTML('beforeBegin',html);
						obj.parentNode.removeChild(obj);
					}else{						
						//변경하고자하는 ActiveX classid 를 추가하시기 바랍니다
						if(classid=='clsid:6bf52a52-394a-11d3-b153-00c04f79faa6' || //media 7
						classid=='clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95' || //6.4
						classid=='clsid:6bf52a52-394a-11d3-b153-00c04f79faa6' ||
						classid=='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'	
						){//media player 10
							embed_pos = html.indexOf('embed');
							if(embed_pos!=-1){//embed 가 존재하는경우
								var embed = '<'+html.substr(embed_pos);
								embed = embed.substr(0,embed.length-9);
								obj.insertAdjacentHTML('beforeBegin',embed);
								obj.parentNode.removeChild(obj);
							}else{
								//object로만 되어 있는경우 동영상 부분만 패치한다
								var embed = document.createElement('embed');
								var total = obj.childNodes.length;
								embed.setAttribute('autostart',0);
								if(obj.width){
									embed.setAttribute('width',obj.width);
								}
								if(obj.height){
									embed.setAttribute('height',obj.height);
								}
								for(var k=0;k<total;k++){
									n = obj.childNodes.item(k).getAttribute("name");
									v = obj.childNodes.item(k).getAttribute("value");
									if(n=='URL' || n=='url' || n=='FileName'){
										n = 'src';
									}
									embed.setAttribute(n,v);
								}
								if(embed.getAttribute('src')){
									embed.style.display = 'inline';
									obj.parentNode.replaceChild(embed,obj);
								}else{
									//파일엑세스 object가 아닌경우는 유지한다								
								}
							}
						}
					}
				}

				if(__embed_tags.object===true){
					var objs = __target.getElementsByTagName('object');
					var i = objs.length;
					while(i-->0){
						_inner(objs[i]);
					}
				}
				if(__embed_tags.embed===true){
					var objs = __target.getElementsByTagName('embed');
					var i = objs.length;
					while(i-->0){
						_replace(objs[i])
					}
				}

				if(__embed_tags.applet===true){
					var objs = __target.getElementsByTagName('applet');
					var i = objs.length;
					while(i-->0){
						_replace(objs[i])
					}
				}
			}
		}
	);
}
// ============================= EMBED 패치 끝 ==============================================//




// Old JAVA.JS <<<<<<<<<<<<=====================================================================//

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

function OpenPDF() {
      window.open("../../_PDF/new2.pdf", "_blank") ;
}

function OpenReg() {
      window.open("../../_PDF/Regulatory.pdf", "_blank") ;
}

function MagicTune() { 
var myWin1 = window.open("MagicTune.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=350,top=300,left=300 '); 
}

function natural() { 
var myWin1 = window.open("NaturalColor.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=360,height=160,top=300,left=300 '); 
}

function drive() { 
var myWin1 = window.open("Drive.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=330,top=300,left=300 '); 
}	

function ie_reader() {

	if (navigator.userAgent.indexOf('Win') == -1)
	{ window.open("../../../comfirm/eng/win.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=434,height=118,left=' + 400 + ',top=' + 450); }

	else if(navigator.userAgent.indexOf('MSIE') == -1)
	{ window.open("../../../comfirm/eng/ie_reader.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=453,height=341,left=' + 350 + ',top=' + 350); }

	else {launch.launch(6)}
}

function ie_auto() {
	if(navigator.userAgent.indexOf('Win') == -1)
	{ window.open("../../../comfirm/ko/win.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=434,height=118,left=' + 400 + ',top=' + 450); }

	else if(navigator.userAgent.indexOf('MSIE') == -1)
	{ window.open("../../../comfirm/ko/ie_auto.htm", "_blank",'toolbar=no,resizable=no,scrollbars=no,width=453,height=341,left=' + 350 + ',top=' + 350); }

	else {launch.launch(7)}
}

function MagicRotation() { 
var myWin2 = window.open("MagicRotation.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=280,top=300,left=300 '); 
}

function safety() {
    opener="";
	window.open("01.htm", "_blank",'fullscreen=no, menubar=yes, status=yes, directories=yes, location=yes, toolbar=yes, resizable=yes, scrollbars=yes'); 
	
	window.close();
	openter="";
	
	}	

function center(){
 if(document.layers){
   var sinist = screen.width / 2 - outerWidth / 2;
   var toppo = screen.height / 2 - outerHeight / 2 - 50;
   }
 else{
   var sinist = screen.width / 2 - document.body.offsetWidth / 2;
   var toppo = screen.height / 2 - document.body.offsetHeight / 2 - 50;
   }
 self.moveTo(sinist,toppo);  
 }

function help() { 
var W = screen.width-350;
var H = screen.height-250;
var myWin3 = window.open("help.htm",'pbml_win2','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=700,height=500'); 
}

function currentclose() {
	if (navigator.userAgent.indexOf('MSIE') == -1)
	{
	document.close(); }		// Nascape
	
	else 
	{
	self.close();	}		// Explorer
	
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
        lay.style.left = "276 px";
		
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

// OLD JAVA.JS End <<<<<=======================================================================//


//게시판그림 및 테두리용 자바스크립트 090212
function borderit(which,color){ 
if (document.all||document.getElementById){ 
which.style.borderColor=color 
} 
} 



// =============================================================================================//
// 메인페이지 상단 메뉴 나라별 TOC ================모델마다 확인할 것===========================//
// =============================================================================================//

// bul
function bul(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Основни мерки за безопасност </a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Преди да започнете </a></li>'
		str += '		<li><a href="ch01s02.htm">Грижи и поддръжка </a></li>'
		str += '		<li><a href="ch01s03.htm">рки за безопасност </a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Монтиране на уреда</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Съдържание на опаковката</a></li>'
		str += '		<li><a href="ch02s02.htm">Монтиране на стойката</a></li>'
		str += '		<li><a href="ch02s03.htm">Премахване на стойката</a></li>'
		str += '		<li><a href="ch02s04.htm">Монтиране на стенна конзола/настолна стойка</a></li>'
		str += '		<li><a href="ch02s05.htm">Свързване към компютър</a></li>'
		str += '		<li><a href="ch02s06.htm">Използване на телевизора</a></li>'
		str += '		<li><a href="ch02s07.htm">Свързване на HDMI кабел </a></li>'
		str += '		<li><a href="ch02s08.htm">Свързване с използване на кабел от DVI към HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Свързване на Component кабел</a></li>'
		str += '		<li><a href="ch02s10.htm">Свързване на Scart кабел</a></li>'
		str += '		<li><a href="ch02s11.htm">Свързване на СТАНДАРТЕН ИНТЕРФЕЙС</a></li>'
		str += '		<li><a href="ch02s12.htm">Свързване на усилвател</a></li>'
		str += '		<li><a href="ch02s13.htm">Свързване на слушалки</a></li>'
		str += '		<li><a href="ch02s14.htm">Заключалка Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Използване на уреда</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Опция Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Разглеждане на таблото за управление</a></li>'
		str += '		<li><a href="ch03s03.htm">Дистанционно управление</a></li>'
		str += '		<li><a href="ch03s04.htm">Функция телетекст</a></li>'
		str += '		<li><a href="ch03s05.htm">Използване на меню Регулиране на екрана (OSD: Екранно меню)</a></li>'
		str += '		<li><a href="ch03s06.htm">Инсталиране на драйвера за устройството</a></li>'
		str += '		<li><a href="ch03s07.htm">Таблица със стандартен режим на сигнала</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">сталиране на софтуера</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
//		str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
//		str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Отстраняване на неизправности</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Самодиагностика на монитор </a></li>'
		str += '		<li><a href="ch05s02.htm">Преди искане на услуга </a></li>'
		str += '		<li><a href="ch05s03.htm">Често задавани въпроси </a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Повече информация</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Спецификации</a></li>'
		str += '		<li><a href="ch06s02.htm">Функция за икономия на енергия</a></li>'
		str += '		<li><a href="ch06s03.htm">Свържете се със SAMSUNG WORLDWIDE (SAMSUNG ПО ЦЕЛИЯ СВЯТ)</a></li>'
		str += '		<li><a href="ch06s04.htm">лно изхвърляне </a></li>'
//		str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// cro
function cro(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Najvažnije mjere opreza</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Prije započinjanja </a></li>'
		str += '		<li><a href="ch01s02.htm">Čuvanje i održavanje</a></li>'
		str += '		<li><a href="ch01s03.htm">Mjere opreza</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Montiranje uređaja</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Sadržaj paketa</a></li>'
		str += '		<li><a href="ch02s02.htm">Montiranje postolja</a></li>'
		str += '		<li><a href="ch02s03.htm">Skidanje postolja</a></li>'
		str += '		<li><a href="ch02s04.htm">Pričvršćivanje zidnog nosača / stolnog podnožja</a></li>'
		str += '		<li><a href="ch02s05.htm">Spajanje s računalom</a></li>'
		str += '		<li><a href="ch02s06.htm">Korištenje monitora kao televizora</a></li>'
		str += '		<li><a href="ch02s07.htm">Priključivanje HDMI kabela</a></li>'
		str += '		<li><a href="ch02s08.htm">Povezivanje pomoću "DVI do HDMI" kabela</a></li>'
		str += '		<li><a href="ch02s09.htm">Priključivanje komponentnog kabela</a></li>'
		str += '		<li><a href="ch02s10.htm">Priključivanje Scart kabela</a></li>'
		str += '		<li><a href="ch02s11.htm">Spajanje za UOBIČAJENO SUČELJE</a></li>'
		str += '		<li><a href="ch02s12.htm">Povezivanje s pojačalom</a></li>'
		str += '		<li><a href="ch02s13.htm">Povezivanje slušalica</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington Lock</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Korištenje proizvoda</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Značajka "Plug & Play"</a></li>'
		str += '		<li><a href="ch03s02.htm">Pregled upravljačke ploče</a></li>'
		str += '		<li><a href="ch03s03.htm">Daljinski upravljač</a></li>'
		str += '		<li><a href="ch03s04.htm">Značajka teleteksta</a></li>'
		str += '		<li><a href="ch03s05.htm">Korištenje izbornika za podešavanje zaslona (OSD: prikaz parametara na zaslonu)</a></li>'
		str += '		<li><a href="ch03s06.htm">Instaliranje upravljačkog programa uređaja </a></li>'
		str += '		<li><a href="ch03s07.htm">Tablica standardnih načina rada signala</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Instaliranje softvera</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		//str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Rješavanje problema</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Samodijagnostika zaslona</a></li>'
		str += '		<li><a href="ch05s02.htm">Prije nego što zatražite servis</a></li>'
		str += '		<li><a href="ch05s03.htm">Često postavljana pitanja</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Dodatne informacije</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikacije </a></li>'
		str += '		<li><a href="ch06s02.htm">Funkcija uštede energije </a></li>'
		str += '		<li><a href="ch06s03.htm">Kontakti SAMSUNG U CIJELOM SVIJETU</a></li>'
		//str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// cze
function cze(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Nejdůležitější bezpečnostní opatření</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Než začnete</a></li>'
		str += '		<li><a href="ch01s02.htm">Péče a údržba</a></li>'
		str += '		<li><a href="ch01s03.htm">Bezpečnostní opatření</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Instalace výrobku</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Obsah balení</a></li>'
		str += '		<li><a href="ch02s02.htm">Instalace stojanu</a></li>'
		str += '		<li><a href="ch02s03.htm">Sejmutí stojanu</a></li>'
		str += '		<li><a href="ch02s04.htm">Montáž držáku na zeď/stolního stojanu</a></li>'
		str += '		<li><a href="ch02s05.htm">Připojení k počítači</a></li>'
		str += '		<li><a href="ch02s06.htm">Použití jako TV</a></li>'
		str += '		<li><a href="ch02s07.htm">Připojení kabelu HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Připojení pomocí kabelu DVI-HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Připojení kabelu Component</a></li>'
		str += '		<li><a href="ch02s10.htm">Připojení kabelu Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Připojení rozhraní COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Připojení k zesilovači</a></li>'
		str += '		<li><a href="ch02s13.htm">Připojení sluchátek</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensingtonský zámek</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Používání výrobku</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Funkce Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Seznámení s ovládacím panelem</a></li>'
		str += '		<li><a href="ch03s03.htm">Dálkové ovládání</a></li>'
		str += '		<li><a href="ch03s04.htm">Funkce Teletextu</a></li>'
		str += '		<li><a href="ch03s05.htm">Použití nabídky úprav nastavení obrazovky (OSD:On Screen Display neboli zobrazení na obrazovce)</a></li>'
		str += '		<li><a href="ch03s06.htm">Instalace ovladače zařízení</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabulka standardních režimů signálu</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Instalace softwaru</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		//str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Odstraňování potíží </a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Samodiagnostické funkce monitoru</a></li>'
		str += '		<li><a href="ch05s02.htm">Než se obrátíte na servisní středisko</a></li>'
		str += '		<li><a href="ch05s03.htm">Nejčastější dotazy</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Další informace</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikace</a></li>'
		str += '		<li><a href="ch06s02.htm">Funkce pro úsporu energie</a></li>'
		str += '		<li><a href="ch06s03.htm">Kontaktujte SAMSUNG WORLDWIDE (Samsung po celém světě)</a></li>'
		str += '		<li><a href="ch06s04.htm">Správná likvidace</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// dan
function dan(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Vigtige sikkerhedsforanstaltninger</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Inden du starter</a></li>'
		str += '		<li><a href="ch01s02.htm">Opbevaring og vedligeholdelse</a></li>'
		str += '		<li><a href="ch01s03.htm">Sikkerhedsforanstaltninger</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Installation af produktet</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Pakkens indhold</a></li>'
		str += '		<li><a href="ch02s02.htm">Installation af foden</a></li>'
		str += '		<li><a href="ch02s03.htm">Fjernelse af foden</a></li>'
		str += '		<li><a href="ch02s04.htm">Montering af vægbeslag/skrivebordssokkel</a></li>'
		str += '		<li><a href="ch02s05.htm">Tilslutning til en computer</a></li>'
		str += '		<li><a href="ch02s06.htm">Sådan bruges den som tv</a></li>'
		str += '		<li><a href="ch02s07.htm">Tilslutte et HDMI-kabel</a></li>'
		str += '		<li><a href="ch02s08.htm">Tilslutning med et DVI til HDMI-kabel</a></li>'
		str += '		<li><a href="ch02s09.htm">Tilslutte et komponentkabel</a></li>'
		str += '		<li><a href="ch02s10.htm">Tilslutte et Scart-kabel</a></li>'
		str += '		<li><a href="ch02s11.htm">Tilslutning af COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Tilslutning til forstærker</a></li>'
		str += '		<li><a href="ch02s13.htm">Tilslutning af hovedtelefoner</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington-lås</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Brug af produktet</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play-funktionen</a></li>'
		str += '		<li><a href="ch03s02.htm">Visning af kontrolpanelet</a></li>'
		str += '		<li><a href="ch03s03.htm">Fjernbetjening</a></li>'
		str += '		<li><a href="ch03s04.htm">kst-tv-funktion</a></li>'
		str += '		<li><a href="ch03s05.htm">Brug af skærmjusteringsmenuen (skærmmenuen)</a></li>'
		str += '		<li><a href="ch03s06.htm">Installation af enhedsdriveren</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabel vedr. standardsignaltilstand</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Installation af softwaren</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		//str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Fejlfinding</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Selvdiagnosticering af skærmen</a></li>'
		str += '		<li><a href="ch05s02.htm">Inden du anmoder om service</a></li>'
		str += '		<li><a href="ch05s03.htm">Ofte stillede spørgsmål (FAQ)</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Flere informationer</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikation</a></li>'
		str += '		<li><a href="ch06s02.htm">Strømbesparende funktion</a></li>'
		str += '		<li><a href="ch06s03.htm">Kontakt SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Korrekt bortskaffelse</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// dut
function dut(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Belangrijke veiligheidsvoorzorgen</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Voor u begint</a></li>'
		str += '		<li><a href="ch01s02.htm">Beheer en onderhoud</a></li>'
		str += '		<li><a href="ch01s03.htm">Veiligheidsvoorzorgen</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Het product installeren</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Inhoud van de verpakking</a></li>'
		str += '		<li><a href="ch02s02.htm">De voet installeren</a></li>'
		str += '		<li><a href="ch02s03.htm">De voet verwijderen</a></li>'
		str += '		<li><a href="ch02s04.htm">Muurbevestiging/bureauvoet monteren</a></li>'
		str += '		<li><a href="ch02s05.htm">Aansluiten op een computer</a></li>'
		str += '		<li><a href="ch02s06.htm">Als een tv gebruiken</a></li>'
		str += '		<li><a href="ch02s07.htm">Een HDMI-kabel aansluiten</a></li>'
		str += '		<li><a href="ch02s08.htm">Aansluiten met gebruik van een DVI naar HDMI-kabel</a></li>'
		str += '		<li><a href="ch02s09.htm">Een compenent-kabel aansluiten</a></li>'
		str += '		<li><a href="ch02s10.htm">Een SCART-kabel aansluiten</a></li>'
		str += '		<li><a href="ch02s11.htm">COMMON INTERFACE aansluiten</a></li>'
		str += '		<li><a href="ch02s12.htm">Aansluiten op de versterker</a></li>'
		str += '		<li><a href="ch02s13.htm">De hoofdtelefoon aansluiten</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington-slot</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Het product gebruiken</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play-functie</a></li>'
		str += '		<li><a href="ch03s02.htm">Overzicht van het bedieningspanee</a></li>'
		str += '		<li><a href="ch03s03.htm">Afstandsbediening</a></li>'
		str += '		<li><a href="ch03s04.htm">Teletekstfunctie</a></li>'
		str += '		<li><a href="ch03s05.htm">Het schermmenu gebruiken (OSD: On Screen Display)</a></li>'
		str += '		<li><a href="ch03s06.htm">Het stuurprogramma installeren</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabel Standaardsignaalmodi</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">De software installeren</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		//str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Problemen oplossen</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Zelfdiagnose van het beeldscherm</a></li>'
		str += '		<li><a href="ch05s02.htm">Voordat u om hulp vraagt</a></li>'
		str += '		<li><a href="ch05s03.htm">FAQ - veelgestelde vragen</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Meer informatie</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specificaties</a></li>'
		str += '		<li><a href="ch06s02.htm">Energiebesparingsfunctie</a></li>'
		str += '		<li><a href="ch06s03.htm">Contact opnemen met SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Correcte verwijdering</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// eng
function eng(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Major Safety Precautions</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Before You Start</a></li>'
		str += '		<li><a href="ch01s02.htm">Care and Maintenance</a></li>'
		str += '		<li><a href="ch01s03.htm">Safety Precautions</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Installing the Product</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Package Contents</a></li>'
		str += '		<li><a href="ch02s02.htm">Installing the Stand</a></li>'
		str += '		<li><a href="ch02s03.htm">Removing the Stand</a></li>'
		str += '		<li><a href="ch02s04.htm">Attaching a Wall Mount/Desktop Stand</a></li>'
		str += '		<li><a href="ch02s05.htm">Connecting to a Computer</a></li>'
		str += '		<li><a href="ch02s06.htm">Using it as a TV</a></li>'
		str += '		<li><a href="ch02s07.htm">Connecting an HDMI cable</a></li>'
		str += '		<li><a href="ch02s08.htm">Connecting Using a DVI to HDMI Cable</a></li>'
		str += '		<li><a href="ch02s09.htm">Connecting a Component cable </a></li>'		
		str += '		<li><a href="ch02s10.htm">Connecting a Scart cable</a></li>'
		str += '		<li><a href="ch02s11.htm">Connecting COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Connecting to an Amplifier</a></li>'
		str += '		<li><a href="ch02s13.htm">Connecting Headphones</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington Lock </a></li>'					
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Using the Product</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play Feature</a></li>'
		str += '		<li><a href="ch03s02.htm">Viewinig the Control panel</a></li>'
		str += '		<li><a href="ch03s03.htm">Remote Control</a></li>'
		str += '		<li><a href="ch03s04.htm">Teletext Feature</a></li>'
		str += '		<li><a href="ch03s05.htm">Using the Screen Adjustment Menu (OSD: On Screen Display)</a></li>'
		str += '		<li><a href="ch03s06.htm">Installing the Device Driver</a></li>'
		str += '		<li><a href="ch03s07.htm">Standard Signal Mode Table</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Installing the Software</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicTune</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Troubleshooting</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Monitor Self-Diagnosis</a></li>'
		str += '		<li><a href="ch05s02.htm">Before Requesting Service</a></li>'
		str += '		<li><a href="ch05s03.htm">FAQ</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">More Information</a>'
		str += '		<ul style="width:190px;">'
		str += '		<li><a href="ch06s01.htm">Specifications</a></li>'
		str += '		<li><a href="ch06s02.htm">Power Saving Function</a></li>'
		str += '		<li><a href="ch06s03.htm">SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Correct Disposal</a></li>'		
		//str += '		<li><a href="ch06s06.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s07.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// est
function est(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Tähtsamad ettevaatusabinõud</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Enne alustamist</a></li>'
		str += '		<li><a href="ch01s02.htm">Hoiustamine ja hooldamine</a></li>'
		str += '		<li><a href="ch01s03.htm">Ohutusjuhised</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Toote paigaldamine</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Pakendi sisu</a></li>'
		str += '		<li><a href="ch02s02.htm">Aluse paigaldamine</a></li>'
		str += '		<li><a href="ch02s03.htm">Aluse eemaldamine</a></li>'
		str += '		<li><a href="ch02s04.htm">Seinakronsteini/lauatoe kinnitamine</a></li>'
		str += '		<li><a href="ch02s05.htm">Arvutiga ühendamine</a></li>'
		str += '		<li><a href="ch02s06.htm">Telerina kasutamine</a></li>'
		str += '		<li><a href="ch02s07.htm">HDMI-kaabli ühendamine</a></li>'
		str += '		<li><a href="ch02s08.htm">Ühendamine DVI-HDMI-kaabli abil</a></li>'
		str += '		<li><a href="ch02s09.htm">Komponentkaabli ühendamine</a></li>'
		str += '		<li><a href="ch02s10.htm">Scart-kaabli ühendamine</a></li>'
		str += '		<li><a href="ch02s11.htm">COMMON INTERFACE-i ühendamine</a></li>'
		str += '		<li><a href="ch02s12.htm">Võimendi ühendamine</a></li>'
		str += '		<li><a href="ch02s13.htm">Kõrvaklappide ühendamine</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensingtoni lukk</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Toote kasutamine</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Isehäälestusfunktsioon Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Juhtpaneeli ülevaade</a></li>'
		str += '		<li><a href="ch03s03.htm">Kaugjuhtimine</a></li>'
		str += '		<li><a href="ch03s04.htm">TeletekstI funktsioon</a></li>'
		str += '		<li><a href="ch03s05.htm">Ekraanimenüü kasutamine</a></li>'
		str += '		<li><a href="ch03s06.htm">Seadme draiveri installimine</a></li>'
		str += '		<li><a href="ch03s07.htm">Standardsete signaalire˛iimide tabel</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Tarkvara installimine</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Tõrkeotsing</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Monitori diagnostikafunktsioon</a></li>'
		str += '		<li><a href="ch05s02.htm">Enne garantiiremonti pöördumist</a></li>'
		str += '		<li><a href="ch05s03.htm">KKK</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Lisateave</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Tehnilised andmed</a></li>'
		str += '		<li><a href="ch06s02.htm">Energiasäästufunktsioon</a></li>'
		str += '		<li><a href="ch06s03.htm">Võtke ühendust teeninduskeskusega SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Õige kõrvaldamisviis</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// fin
function fin(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Tärkeitä turvallisuusohjeita</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Ennen kuin aloitat</a></li>'
		str += '		<li><a href="ch01s02.htm">Hallinta ja hoito</a></li>'
		str += '		<li><a href="ch01s03.htm">Turvallisuusohjeita</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Laitteen asentaminen</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Pakkauksen sisältö</a></li>'
		str += '		<li><a href="ch02s02.htm">Jalustan asentaminen</a></li>'
		str += '		<li><a href="ch02s03.htm">Jalustan irrottaminen</a></li>'
		str += '		<li><a href="ch02s04.htm">Seinätelineen/pöytäjalustan kiinnittäminen</a></li>'
		str += '		<li><a href="ch02s05.htm">Kytkeminen tietokoneeseen</a></li>'
		str += '		<li><a href="ch02s06.htm">Käyttäminen televisiona</a></li>'
		str += '		<li><a href="ch02s07.htm">HDMI-kaapelin kytkeminen</a></li>'
		str += '		<li><a href="ch02s08.htm">Yhdistäminen DVI-HDMI-kaapelilla</a></li>'
		str += '		<li><a href="ch02s09.htm">Komponenttikaapelin kytkeminen</a></li>'
		str += '		<li><a href="ch02s10.htm">Scart-kaapelin kytkeminen</a></li>'
		str += '		<li><a href="ch02s11.htm">COMMON INTERFACE -liitännän kytkeminen</a></li>'
		str += '		<li><a href="ch02s12.htm">Vahvistimen kytkeminen</a></li>'
		str += '		<li><a href="ch02s13.htm">Kuulokkeiden kytkeminen</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington-lukko</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Laitteen käyttö</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Kytke ja käytä -toiminto</a></li>'
		str += '		<li><a href="ch03s02.htm">Ohjauspaneeli</a></li>'
		str += '		<li><a href="ch03s03.htm">Kaukosäädin</a></li>'
		str += '		<li><a href="ch03s04.htm">Tekstitelevisio</a></li>'
		str += '		<li><a href="ch03s05.htm">Näytön asetusvalikon käyttäminen (OSD: On Screen Display, kuvaruutuvalikko)</a></li>'
		str += '		<li><a href="ch03s06.htm">Laiteohjaimen asennus</a></li>'
		str += '		<li><a href="ch03s07.htm">Standardisignaalitilataulukko</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Ohjelmiston asennus</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Vianmääritys</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Näytön itsetestaus</a></li>'
		str += '		<li><a href="ch05s02.htm">Ennen kuin pyydät huoltoa</a></li>'
		str += '		<li><a href="ch05s03.htm">Usein kysyttyä</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Lisätietoja</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Tekniset tiedot</a></li>'
		str += '		<li><a href="ch06s02.htm">Virransäästötoiminto</a></li>'
		str += '		<li><a href="ch06s03.htm">Ota yhteys SAMSUNG WORLDWIDEEN</a></li>'
		str += '		<li><a href="ch06s04.htm">Oikea hävittäminen</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// fre
function fre(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Consignes de sécurité essentielles</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Avant de commencer</a></li>'
		str += '		<li><a href="ch01s02.htm">Conservation et entretien</a></li>'
		str += '		<li><a href="ch01s03.htm">Consignes de sécurité</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Installation de l\'appareil</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Contenu de l\'emballage</a></li>'
		str += '		<li><a href="ch02s02.htm">Installation du pied</a></li>'
		str += '		<li><a href="ch02s03.htm">Démontage du pied</a></li>'
		str += '		<li><a href="ch02s04.htm">Montage d\'un kit de fixation murale/support de bureau</a></li>'
		str += '		<li><a href="ch02s05.htm">Connexion à un ordinateur</a></li>'
		str += '		<li><a href="ch02s06.htm">Utilisation comme un téléviseur</a></li>'
		str += '		<li><a href="ch02s07.htm">Branchement d\'un câble HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Connexion grâce à un câble DVI vers HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Branchement d\'un câble Component</a></li>'		
		str += '		<li><a href="ch02s10.htm">Branchement d’un câble SCART </a></li>'
		str += '		<li><a href="ch02s11.htm">Connexion de COMMON INTERFACE (interface commune)</a></li>'
		str += '		<li><a href="ch02s12.htm">Connexion à l\'amplificateur</a></li>'
		str += '		<li><a href="ch02s13.htm">Connexion d\'un casque</a></li>'
		str += '		<li><a href="ch02s14.htm">Verrouillage Kensington</a></li>'					
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Utilisation de l\'appareil</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Fonction Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Présentation du panneau de commande</a></li>'
		str += '		<li><a href="ch03s03.htm">Télécommande</a></li>'
		str += '		<li><a href="ch03s04.htm">Fonction Télétexte</a></li>'
		str += '		<li><a href="ch03s05.htm">Utilisation du menu de réglage sur écran (OSD)</a></li>'
		str += '		<li><a href="ch03s06.htm">Installation du pilote de périphérique</a></li>'
		str += '		<li><a href="ch03s07.htm">Tableau des modes de signal standard</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Installation du logiciel</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicTune</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Résolution des problèmes</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Autodiagnostic du moniteur</a></li>'
		str += '		<li><a href="ch05s02.htm">Avant de contacter le service d\'assistance</a></li>'
		str += '		<li><a href="ch05s03.htm">Foire aux questions</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Informations complémentaires</a>'
		str += '		<ul style="width:190px;">'
		str += '		<li><a href="ch06s01.htm">Caractéristiques</a></li>'
		str += '		<li><a href="ch06s02.htm">Fonction d\'économie d’énergie</a></li>'
		str += '		<li><a href="ch06s03.htm">Comment contacter SAMSUNG dans le monde</a></li>'
		str += '		<li><a href="ch06s04.htm">Comment éliminer ce produit</a></li>'		
		//str += '		<li><a href="ch06s06.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s07.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// ger
function ger(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Wichtige Sicherheitshinweise</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Vor der ersten Verwendung</a></li>'
		str += '		<li><a href="ch01s02.htm">Pflege und Wartung</a></li>'
		str += '		<li><a href="ch01s03.htm">Sicherheitshinweise</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Installieren des Geräts</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Lieferumfang</a></li>'
		str += '		<li><a href="ch02s02.htm">Anbringen des Standfußes</a></li>'
		str += '		<li><a href="ch02s03.htm">Entfernen des Standfußes</a></li>'
		str += '		<li><a href="ch02s04.htm">Anbringen der/s Wandhalterung/Standfußes</a></li>'
		str += '		<li><a href="ch02s05.htm">Anschließen an einen Computer</a></li>'
		str += '		<li><a href="ch02s06.htm">Verwenden als Fernsehgerät</a></li>'
		str += '		<li><a href="ch02s07.htm">Anschließen eines HDMI-Kabels</a></li>'
		str += '		<li><a href="ch02s08.htm">Anschließen mit einem DVI/HDMI-Kabel</a></li>'
		str += '		<li><a href="ch02s09.htm">Anschließen eines Component-Kabels</a></li>'
		str += '		<li><a href="ch02s10.htm">Anschließen eines SCART-Kabels</a></li>'
		str += '		<li><a href="ch02s11.htm">Anschließen der CI-Schnittstelle</a></li>'
		str += '		<li><a href="ch02s12.htm">Anschluss für Verstärker</a></li>'
		str += '		<li><a href="ch02s13.htm">Kopfhörer anschließen</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington-Schloss</a></li>'
			
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Verwenden des Geräts</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play-Funktion</a></li>'
		str += '		<li><a href="ch03s02.htm">Bedienfeld</a></li>'
		str += '		<li><a href="ch03s03.htm">Fernbedienung</a></li>'
		str += '		<li><a href="ch03s04.htm">Videotextfunktion</a></li>'
		str += '		<li><a href="ch03s05.htm">Verwenden des Menüs für die Projektionseinstellungen (OSD: Bildschirmmenü)</a></li>'
		str += '		<li><a href="ch03s06.htm">Installieren des Gerätetreibers</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabelle der Standardanzeigemodi</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Installieren der Software</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Fehlerbehebung</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Eigendiagnose des Monitors</a></li>'
		str += '		<li><a href="ch05s02.htm">Ehe Sie sich an den Service wenden</a></li>'
		str += '		<li><a href="ch05s03.htm">FAQ</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Weitere Informationen</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Technische Daten</a></li>'
		str += '		<li><a href="ch06s02.htm">Stromsparfunktion</a></li>'
		str += '		<li><a href="ch06s03.htm">Kontakt zu SAMSUNG</a></li>'
		str += '		<li><a href="ch06s04.htm">Ordnungsgemäße Entsorgung</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// gre
function gre(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Κύρια μέτρα προφύλαξης</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Πριν ξεκινήσετε</a></li>'
		str += '		<li><a href="ch01s02.htm">Φύλαξη και συντήρηση</a></li>'
		str += '		<li><a href="ch01s03.htm">Μέτρα προφύλαξης</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Τοποθέτηση του προϊόντος</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Περιεχόμενα συσκευασίας</a></li>'
		str += '		<li><a href="ch02s02.htm">Τοποθέτηση της βάσης</a></li>'
		str += '		<li><a href="ch02s03.htm">Αφαίρεση της βάσης</a></li>'
		str += '		<li><a href="ch02s04.htm">Προσάρτηση μια βάσης στήριξης σε τοίχο/γραφείο</a></li>'
		str += '		<li><a href="ch02s05.htm">Σύνδεση σε υπολογιστή</a></li>'
		str += '		<li><a href="ch02s06.htm">Χρήση ως τηλεόραση</a></li>'
		str += '		<li><a href="ch02s07.htm">Σύνδεση ενός καλωδίου HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Σύνδεση με χρήση καλωδίου DVI σε HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Σύνδεση ενός καλωδίου συνιστωσών</a></li>'
		str += '		<li><a href="ch02s10.htm">Σύνδεση ενός καλωδίου Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Σύνδεση του COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Σύνδεση στον ενισχυτή</a></li>'
		str += '		<li><a href="ch02s13.htm">Σύνδεση ακουστικών</a></li>'
		str += '		<li><a href="ch02s14.htm">Κλειδαριά Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Χρήση του προϊόντος</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Δυνατότητα Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Επισκόπηση του πίνακα ελέγχου</a></li>'
		str += '		<li><a href="ch03s03.htm">Τηλεχειριστήριο</a></li>'
		str += '		<li><a href="ch03s04.htm">Δυνατότητα teletext</a></li>'
		str += '		<li><a href="ch03s05.htm">Χρήση του μενού ρύθμισης οθόνης (OSD: Ενδείξεις οθόνης)</a></li>'
		str += '		<li><a href="ch03s06.htm">Εγκατάσταση του προγράμματος οδήγησης συσκευής</a></li>'
		str += '		<li><a href="ch03s07.htm">Πίνακας τυπικών τρόπων λειτουργίας σήματος</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Εγκατάσταση του λογισμικού </a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Αντιμετώπιση προβλημάτων</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Αυτοδιαγνωστικός έλεγχος οθόνης</a></li>'
		str += '		<li><a href="ch05s02.htm">Προτού ζητήσετε σέρβις</a></li>'
		str += '		<li><a href="ch05s03.htm">Συνήθεις ερωτήσεις</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Επιπλέον πληροφορίες</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Προδιαγραφές</a></li>'
		str += '		<li><a href="ch06s02.htm">Λειτουργία εξοικονόμησης ενέργειας</a></li>'
		str += '		<li><a href="ch06s03.htm">Επικοινωνήστε με τηSAMSUNG ΣΕ ΟΛΟ ΤΟΝ ΚΟΣΜΟ</a></li>'
		str += '		<li><a href="ch06s04.htm">Σωστή απόρριψη</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}


// hun
function hun(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Főbb biztonsági óvintézkedések</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Üzembe helyezés előtt</a></li>'
		str += '		<li><a href="ch01s02.htm">Karbantartás és ápolás</a></li>'
		str += '		<li><a href="ch01s03.htm">Biztonsági óvintézkedések</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">A termék üzembe helyezése</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">A csomag tartalma</a></li>'
		str += '		<li><a href="ch02s02.htm">A talp összeszerelése</a></li>'
		str += '		<li><a href="ch02s03.htm">A talp eltávolítása</a></li>'
		str += '		<li><a href="ch02s04.htm">A fali konzol/asztali állvány felszerelése</a></li>'
		str += '		<li><a href="ch02s05.htm">Számítógéphez csatlakoztatás</a></li>'
		str += '		<li><a href="ch02s06.htm">A monitor használata tévéként</a></li>'
		str += '		<li><a href="ch02s07.htm">HDMI-kábel csatlakoztatása</a></li>'
		str += '		<li><a href="ch02s08.htm">Csatlakoztatás DVI-HDMI-kábel segítségével</a></li>'
		str += '		<li><a href="ch02s09.htm">Komponens kábel csatlakoztatása</a></li>'
		str += '		<li><a href="ch02s10.htm">Scart kábel csatlakoztatása</a></li>'
		str += '		<li><a href="ch02s11.htm">KÖZÖS INTERFÉSZ csatlakoztatása</a></li>'
		str += '		<li><a href="ch02s12.htm">Erősítő csatlakoztatása</a></li>'
		str += '		<li><a href="ch02s13.htm">Fejhallgató csatlakoztatása</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington zár</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">A készülék használata</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">A Plug & Play funkció</a></li>'
		str += '		<li><a href="ch03s02.htm">A vezérlőpanel áttekintése</a></li>'
		str += '		<li><a href="ch03s03.htm">Távirányító</a></li>'
		str += '		<li><a href="ch03s04.htm">Teletext funkció</a></li>'
		str += '		<li><a href="ch03s05.htm">A képernyő-beállítás menü használata (OSD: képernyőmenü)</a></li>'
		str += '		<li><a href="ch03s06.htm">Az illesztőprogram telepítése</a></li>'
		str += '		<li><a href="ch03s07.htm">Szabvány jelmód táblázat</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">A szoftver telepítése</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Hibaelhárítás</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Monitor öndiagnosztika</a></li>'
		str += '		<li><a href="ch05s02.htm">Mielőtt a szervizhez fordulna</a></li>'
		str += '		<li><a href="ch05s03.htm">Gyakran ismételt kérdések</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">További információ</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Műszaki leírás</a></li>'
		str += '		<li><a href="ch06s02.htm">Energiatakarékos funkció</a></li>'
		str += '		<li><a href="ch06s03.htm">Kapcsolatfelvétel: SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Megfelelő hulladékkezelés</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// ita
function ita(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Principali precauzioni di sicurezza</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Prima di iniziare</a></li>'
		str += '		<li><a href="ch01s02.htm">Custodia e manutenzione</a></li>'
		str += '		<li><a href="ch01s03.htm">Precauzioni di sicurezza</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Installazione del prodotto</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Contenuto della confezione</a></li>'
		str += '		<li><a href="ch02s02.htm">Installazione del piedistallo</a></li>'
		str += '		<li><a href="ch02s03.htm">Rimuovere il piedistallo</a></li>'
		str += '		<li><a href="ch02s04.htm">Installazione staffa a parete/piedistallo da tavolo</a></li>'
		str += '		<li><a href="ch02s05.htm">Collegamento a un computer </a></li>'
		str += '		<li><a href="ch02s06.htm">Uso come televisore</a></li>'
		str += '		<li><a href="ch02s07.htm">Collegare un cavo HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Collegamento mediante un cavo DVI a HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Collegare un cavo Component</a></li>'
		str += '		<li><a href="ch02s10.htm">Collegare un cavo Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Connessione COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Collegare un amplificatore</a></li>'
		str += '		<li><a href="ch02s13.htm">Collegamento delle cuffie</a></li>'
		str += '		<li><a href="ch02s14.htm">Blocco Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Uso del prodotto</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Funzioni Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Pannello di controllo</a></li>'
		str += '		<li><a href="ch03s03.htm">Telecomando</a></li>'
		str += '		<li><a href="ch03s04.htm">Funzione Teletext</a></li>'
		str += '		<li><a href="ch03s05.htm">Uso del menu Screen Adjustment (OSD: On Screen Display)</a></li>'
		str += '		<li><a href="ch03s06.htm">Installazione del driver del dispositivo</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabella delle modalità standard del segnale</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Installazione del software</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Risoluzione dei problemi</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Auto diagnosi del monitor</a></li>'
		str += '		<li><a href="ch05s02.htm">Prima di rivolgersi al servizio di assistenza</a></li>'
		str += '		<li><a href="ch05s03.htm">FAQ</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Maggiori informazioni</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifiche</a></li>'
		str += '		<li><a href="ch06s02.htm">Funzione di risparmio energetico</a></li>'
		str += '		<li><a href="ch06s03.htm">Contatta SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Corretto smaltimento</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// lat
function lat(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Galvenie drošības pasākumi</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Pirms darba uzsākšanas</a></li>'
		str += '		<li><a href="ch01s02.htm">Uzglabāšana un apkope</a></li>'
		str += '		<li><a href="ch01s03.htm">Drošības pasākumi</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Ierīces uzstādīšana</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Iepakojuma saturs</a></li>'
		str += '		<li><a href="ch02s02.htm">Statīva uzstādīšana</a></li>'
		str += '		<li><a href="ch02s03.htm">Statīva noņemšana</a></li>'
		str += '		<li><a href="ch02s04.htm">Sienas kronšteina/galda virsmas statīva pievienošana</a></li>'
		str += '		<li><a href="ch02s05.htm">Pievienošana datoram</a></li>'
		str += '		<li><a href="ch02s06.htm">Monitora izmantošana kā TV</a></li>'
		str += '		<li><a href="ch02s07.htm">HDMI kabeļa pievienošana</a></li>'
		str += '		<li><a href="ch02s08.htm">Savienojuma izveide, izmantojot DVI – HDMI kabeli</a></li>'
		str += '		<li><a href="ch02s09.htm">Komponentes kabeļa pievienošana</a></li>'
		str += '		<li><a href="ch02s10.htm">Scart kabeļa pievienošana</a></li>'
		str += '		<li><a href="ch02s11.htm">KOPĒJĀS SASKARNES pievienošana</a></li>'
		str += '		<li><a href="ch02s12.htm">Pastiprinātāja pievienošana</a></li>'
		str += '		<li><a href="ch02s13.htm">Austiņu pievienošana</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington Lock</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Izstrādājuma lietošana</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Funkcija Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Vadības paneļa pārlūkošana</a></li>'
		str += '		<li><a href="ch03s03.htm">Tālvadības pults</a></li>'
		str += '		<li><a href="ch03s04.htm">Teleteksta funkcija</a></li>'
		str += '		<li><a href="ch03s05.htm">Ekrāna regulēšanas izvēlnes lietošana (displejs ekrānā – OSD)</a></li>'
		str += '		<li><a href="ch03s06.htm">Ierīces draivera instalēšana</a></li>'
		str += '		<li><a href="ch03s07.htm">Standarta signāla režīmu tabula</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Programmatūras instalēšana</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Traucējummeklēšana</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Monitora pašdiagnoze</a></li>'
		str += '		<li><a href="ch05s02.htm">Pirms apkopes pieprasīšanas</a></li>'
		str += '		<li><a href="ch05s03.htm">Bieži uzdotie jautājumi</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Papildu informācija</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikācijas</a></li>'
		str += '		<li><a href="ch06s02.htm">Enerģijas taupīšanas funkcija</a></li>'
		str += '		<li><a href="ch06s03.htm">Sazinieties ar SAMSUNG WORLDWIDE (SAMSUNG VISĀ PASAULĒ)</a></li>'
		str += '		<li><a href="ch06s04.htm">Pareiza utilizācija</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// lit
function lit(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Svarbiausi saugos perspėjimai</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Prieš pradėdami</a></li>'
		str += '		<li><a href="ch01s02.htm">Laikymas ir priežiūra</a></li>'
		str += '		<li><a href="ch01s03.htm">Saugos atsargumo priemonės</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Produkto sumontavimas</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Pakuotės turinys</a></li>'
		str += '		<li><a href="ch02s02.htm">Stovo tvirtinimas</a></li>'
		str += '		<li><a href="ch02s03.htm">Stovo nuėmimas</a></li>'
		str += '		<li><a href="ch02s04.htm">Sieninio laikiklio / stalinio stovo tvirtinimas</a></li>'
		str += '		<li><a href="ch02s05.htm">Kompiuterio prijungimas</a></li>'
		str += '		<li><a href="ch02s06.htm">Naudojimas kaip televizoriaus</a></li>'
		str += '		<li><a href="ch02s07.htm">HDMI kabelio prijungimas</a></li>'
		str += '		<li><a href="ch02s08.htm">Prijungimas naudojant DVI į HDMI kabelį</a></li>'
		str += '		<li><a href="ch02s09.htm">Komponento kabelio prijungimas</a></li>'
		str += '		<li><a href="ch02s10.htm">"Scart" kabelio prijungimas</a></li>'
		str += '		<li><a href="ch02s11.htm">BENDROSIOS SĄSAJOS jungimas</a></li>'
		str += '		<li><a href="ch02s12.htm">Stiprintuvo prijungimas</a></li>'
		str += '		<li><a href="ch02s13.htm">Ausinių prijungimas</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensingtono užraktas</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Produkto naudojimas</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Įjunk ir žaisk ypatybė</a></li>'
		str += '		<li><a href="ch03s02.htm">Valdymo skydelio peržiūra</a></li>'
		str += '		<li><a href="ch03s03.htm">Nuotolinio valdymo pultas</a></li>'
		str += '		<li><a href="ch03s04.htm">Teleteksto funkcija</a></li>'
		str += '		<li><a href="ch03s05.htm">Ekrano reguliavimo meniu naudojimas (OSD: ekrano rodymas)</a></li>'
		str += '		<li><a href="ch03s06.htm">Įrenginio tvarkyklės diegimas</a></li>'
		str += '		<li><a href="ch03s07.htm">Standartinio signalo režimo lentelė</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Programinės įrangos diegimas</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Trikčių diagnostika</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Savaiminė monitoriaus diagnostika</a></li>'
		str += '		<li><a href="ch05s02.htm">Prieš kreipiantis į techninės priežiūros centrą</a></li>'
		str += '		<li><a href="ch05s03.htm">Dažnai klausiami klausimai ir atsakymai</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Daugiau informacijos</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikacijos</a></li>'
		str += '		<li><a href="ch06s02.htm">Energijos taupymo funkcija</a></li>'
		str += '		<li><a href="ch06s03.htm">Kreipkitės į SAMSUNG WORLDWIDE (SAMSUNG PASAULYJE)</a></li>'
		str += '		<li><a href="ch06s04.htm">Tinkamas išmetimas</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// nor
function nor(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Viktige sikkerhetsregler</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Før du starter</a></li>'
		str += '		<li><a href="ch01s02.htm">Juridisk ansvar og vedlikehold</a></li>'
		str += '		<li><a href="ch01s03.htm">Sikkerhetsregler</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Installere produktet</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Innholdet i pakken</a></li>'
		str += '		<li><a href="ch02s02.htm">Installere stativet</a></li>'
		str += '		<li><a href="ch02s03.htm">Slik fjerner du stativet</a></li>'
		str += '		<li><a href="ch02s04.htm">Feste et veggfeste/skrivebordsstativ</a></li>'
		str += '		<li><a href="ch02s05.htm">Koble til en datamaskin</a></li>'
		str += '		<li><a href="ch02s06.htm">Bruke den som en TV</a></li>'
		str += '		<li><a href="ch02s07.htm">Koble til en HDMI-kabel</a></li>'
		str += '		<li><a href="ch02s08.htm">Koble til ved hjelp av en DVI-til-HDMI-kabel</a></li>'
		str += '		<li><a href="ch02s09.htm">Koble til en komponentkabel</a></li>'
		str += '		<li><a href="ch02s10.htm">Koble til en Scart-kabel</a></li>'
		str += '		<li><a href="ch02s11.htm">Koble til COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Koble til forsterker</a></li>'
		str += '		<li><a href="ch02s13.htm">Tilkobling av hodetelefoner</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington-lås</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Bruke produktet</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play-funksjon</a></li>'
		str += '		<li><a href="ch03s02.htm">Oversikt over kontrollpanelet</a></li>'
		str += '		<li><a href="ch03s03.htm">Fjernkontroll</a></li>'
		str += '		<li><a href="ch03s04.htm">Tekst-TV-funksjon</a></li>'
		str += '		<li><a href="ch03s05.htm">Bruke skjermjusteringsmenyen (OSD: skjermmeny)</a></li>'
		str += '		<li><a href="ch03s06.htm">Installere enhetsdriveren</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabell for standard signalmodus</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Installere programvaren</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Feilsøking</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Egendiagnose for skjerm</a></li>'
		str += '		<li><a href="ch05s02.htm">Før du ber om service</a></li>'
		str += '		<li><a href="ch05s03.htm">Vanlige spørsmål</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Mer informasjon</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Spesifikasjoner</a></li>'
		str += '		<li><a href="ch06s02.htm">Strømsparingsfunksjon</a></li>'
		str += '		<li><a href="ch06s03.htm">Kontakt SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Korrekt avfallshåndtering</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// pol
function pol(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Ważne informacje o bezpieczeństwie</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Zanim rozpoczniesz</a></li>'
		str += '		<li><a href="ch01s02.htm">Nadzór i konserwacja</a></li>'
		str += '		<li><a href="ch01s03.htm">Zasady bezpieczeństwa</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Instalacja urządzenia</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Zawartość opakowania</a></li>'
		str += '		<li><a href="ch02s02.htm">Instalacja podstawy</a></li>'
		str += '		<li><a href="ch02s03.htm">Odłączanie podpórki</a></li>'
		str += '		<li><a href="ch02s04.htm">Mocowanie zestawu naściennego / podstawy na biurko</a></li>'
		str += '		<li><a href="ch02s05.htm">Podłączanie do komputera</a></li>'
		str += '		<li><a href="ch02s06.htm">Użytkowanie w charakterze telewizora</a></li>'
		str += '		<li><a href="ch02s07.htm">Podłączanie kabla HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Połączenie za pomocą kabla DVI to HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Podłączanie kabla Component</a></li>'
		str += '		<li><a href="ch02s10.htm">Podłączanie kabla Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Podłączanie złącza COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Podłączanie do wzmacniacza</a></li>'
		str += '		<li><a href="ch02s13.htm">Podłączanie słuchawek</a></li>'
		str += '		<li><a href="ch02s14.htm">Zabezpieczenie Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Obsługa urządzenia</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Funkcja Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Opis panelu sterowania</a></li>'
		str += '		<li><a href="ch03s03.htm">Pilot</a></li>'
		str += '		<li><a href="ch03s04.htm">Funkcje telegazety</a></li>'
		str += '		<li><a href="ch03s05.htm">Obsługa menu ekranowego</a></li>'
		str += '		<li><a href="ch03s06.htm">Instalowanie sterownika monitora</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabela Standardowe tryby sygnału</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Instalacja oprogramowania</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Rozwiązywanie problemów</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Automatyczna diagnostyka monitora</a></li>'
		str += '		<li><a href="ch05s02.htm">Przed zgłoszeniem się do serwisu</a></li>'
		str += '		<li><a href="ch05s03.htm">Najczęściej zadawane pytania</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Więcej informacji</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Dane techniczne</a></li>'
		str += '		<li><a href="ch06s02.htm">Funkcja oszczędzania energii</a></li>'
		str += '		<li><a href="ch06s03.htm">Kontakt z SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Zasady utylizacji</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// por
function por(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Principais precauções de segurança</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Antes de começar</a></li>'
		str += '		<li><a href="ch01s02.htm">Conservação e manutenção</a></li>'
		str += '		<li><a href="ch01s03.htm">Precauções de segurança</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Instalar o produto</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Conteúdo da embalagem</a></li>'
		str += '		<li><a href="ch02s02.htm">Instalar a base</a></li>'
		str += '		<li><a href="ch02s03.htm">Retirar a base</a></li>'
		str += '		<li><a href="ch02s04.htm">Instalar um suporte de montagem na parede/suporte de secretária</a></li>'
		str += '		<li><a href="ch02s05.htm">Ligação a um Computador</a></li>'
		str += '		<li><a href="ch02s06.htm">Utilizar o monitor como televisor</a></li>'
		str += '		<li><a href="ch02s07.htm">Ligar um cabo HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Ligar utilizando um cabo DVI a HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Ligar um cabo componente</a></li>'
		str += '		<li><a href="ch02s10.htm">Ligar um cabo Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Ligar a INTERFACE COMUM</a></li>'
		str += '		<li><a href="ch02s12.htm">Ligar um amplificador</a></li>'
		str += '		<li><a href="ch02s13.htm">Ligar os Auscultadores</a></li>'
		str += '		<li><a href="ch02s14.htm">Dispositivo de bloqueio Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Utilizar o produto</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Função Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Apresentação do painel de controlo</a></li>'
		str += '		<li><a href="ch03s03.htm">Telecomando</a></li>'
		str += '		<li><a href="ch03s04.htm">Função de teletexto</a></li>'
		str += '		<li><a href="ch03s05.htm">Utilizar o menu de ajuste do ecrã (OSD: On Screen Display)</a></li>'
		str += '		<li><a href="ch03s06.htm">Instalar o controlador do dispositivo</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabela do modo de sinal padrão</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Instalar o software</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Resolução de problemas</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Autodiagnóstico do monitor</a></li>'
		str += '		<li><a href="ch05s02.htm">Antes de solicitar assistência</a></li>'
		str += '		<li><a href="ch05s03.htm">FAQ</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Mais informações</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Especificações</a></li>'
		str += '		<li><a href="ch06s02.htm">Função de poupança de energia</a></li>'
		str += '		<li><a href="ch06s03.htm">Contacte SAMSUNG GLOBAL</a></li>'
		str += '		<li><a href="ch06s04.htm">Eliminação Correcta</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// rom
function rom(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Principalele măsuri de siguranţă</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Înainte de a începe</a></li>'
		str += '		<li><a href="ch01s02.htm">Păstrarea şi întreţinerea</a></li>'
		str += '		<li><a href="ch01s03.htm">Măsuri de siguranţă</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Instalarea produsului</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Conţinutul pachetului</a></li>'
		str += '		<li><a href="ch02s02.htm">Instalarea stativului</a></li>'
		str += '		<li><a href="ch02s03.htm">Demontarea stativului</a></li>'
		str += '		<li><a href="ch02s04.htm">Ataşarea unui suport de perete/stativ de birou</a></li>'
		str += '		<li><a href="ch02s05.htm">Conectarea la un computer</a></li>'
		str += '		<li><a href="ch02s06.htm">Utilizarea ca televizor</a></li>'
		str += '		<li><a href="ch02s07.htm">Conectarea unui cablu HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Conectarea folosind un cablu DVI la HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Conectarea unui cablu de semnal componentă</a></li>'
		str += '		<li><a href="ch02s10.htm">Conectarea unui cablu Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Conectarea COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Conectarea la amplificator</a></li>'
		str += '		<li><a href="ch02s13.htm">Conectarea căştilor</a></li>'
		str += '		<li><a href="ch02s14.htm">Dispozitivul de blocare Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Utilizarea produsului</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Caracteristica Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Vizualizarea panoului de control</a></li>'
		str += '		<li><a href="ch03s03.htm">Telecomanda</a></li>'
		str += '		<li><a href="ch03s04.htm">Funcţie Teletext</a></li>'
		str += '		<li><a href="ch03s05.htm">Utilizarea meniului de reglare a ecranului (OSD: Afişaj pe ecran)</a></li>'
		str += '		<li><a href="ch03s06.htm">Instalarea driverului pentru dispozitiv</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabelul cu modurile standard de semnal</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Instalarea software-ului</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Depanare</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Diagnosticarea automată a monitorului</a></li>'
		str += '		<li><a href="ch05s02.htm">Înainte de a solicita service</a></li>'
		str += '		<li><a href="ch05s03.htm">Întrebări frecvente</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Informaţii suplimentare</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specificaţii</a></li>'
		str += '		<li><a href="ch06s02.htm">Funcţia de economisire a energiei</a></li>'
		str += '		<li><a href="ch06s03.htm">Contact SAMSUNG WORLDWIDE (Samsung în întreaga lume)</a></li>'
		str += '		<li><a href="ch06s04.htm">Casarea corectă</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// rus
function rus(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Основные меры безопасности</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Перед началом использования</a></li>'
		str += '		<li><a href="ch01s02.htm">Хранение и обслуживание</a></li>'
		str += '		<li><a href="ch01s03.htm">Меры безопасности</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Установка устройства</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Содержимое упаковки</a></li>'
		str += '		<li><a href="ch02s02.htm">Установка подставки</a></li>'
		str += '		<li><a href="ch02s03.htm">Снятие подставки</a></li>'
		str += '		<li><a href="ch02s04.htm">Крепление к кронштейну для настенного монтажа/настольной подставке</a></li>'
		str += '		<li><a href="ch02s05.htm">Подключение к компьютеру</a></li>'
		str += '		<li><a href="ch02s06.htm">Использование монитора в качестве телевизора</a></li>'
		str += '		<li><a href="ch02s07.htm">Подключение кабеля HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Подключение к разъему DVI с использованием кабеля HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Подключение компонентного кабеля</a></li>'
		str += '		<li><a href="ch02s10.htm">Подключение кабеля Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Подключение общего интерфейса</a></li>'
		str += '		<li><a href="ch02s12.htm">Подключение к усилителю</a></li>'
		str += '		<li><a href="ch02s13.htm">Подсоединение наушников</a></li>'
		str += '		<li><a href="ch02s14.htm">Замок Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Использование устройства</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Функция Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Обзор панели управления</a></li>'
		str += '		<li><a href="ch03s03.htm">Пульт дистанционного управления</a></li>'
		str += '		<li><a href="ch03s04.htm">Функция телетекста</a></li>'
		str += '		<li><a href="ch03s05.htm">Использование меню настройки экрана (экранное меню )</a></li>'
		str += '		<li><a href="ch03s06.htm">Установка драйвера устройства</a></li>'
		str += '		<li><a href="ch03s07.htm">Таблица сигналов, посылаемых в стандартном режиме</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Установка программного обеспечения</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Поиск и устранение неисправностей</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Самодиагностика монитора</a></li>'
		str += '		<li><a href="ch05s02.htm">Перед обращением в центр обслуживания</a></li>'
		str += '		<li><a href="ch05s03.htm">Вопросы и ответы</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Дополнительная информация</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Технические характеристики</a></li>'
		str += '		<li><a href="ch06s02.htm">Функция экономии энергии</a></li>'
		str += '		<li><a href="ch06s03.htm">Контактная информация SAMSUNG WORLDWIDE</a></li>'
		//str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// SC
function SC(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">주요 안전 사항</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">사용설명서를 읽기 전에</a></li>'
		str += '		<li><a href="ch01s02.htm">보관 및 관리</a></li>'
		str += '		<li><a href="ch01s03.htm">안전을 위한 주의사항</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">설치하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">구성품 확인</a></li>'
		str += '		<li><a href="ch02s02.htm">받침대 조립하기</a></li>'
		str += '		<li><a href="ch02s03.htm">받침대 제거하기</a></li>'
		str += '		<li><a href="ch02s04.htm">걸이용 받침대 설치</a></li>'
		str += '		<li><a href="ch02s05.htm">PC와 연결</a></li>'
		str += '		<li><a href="ch02s06.htm">도난 방지용 잠금 장치</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">사용하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">최적해상도 설정</a></li>'
		str += '		<li><a href="ch03s02.htm">표준신호모드표</a></li>'
		str += '		<li><a href="ch03s03.htm">제품 드라이버 설치</a></li>'
		str += '		<li><a href="ch03s04.htm">제품 조작 버튼 설명</a></li>'
		str += '		<li><a href="ch03s05.htm">화면 조정 메뉴 사용하기</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">소프트웨어 설치</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">문제 해결</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">모니터 자체 진단하기</a></li>'
		str += '		<li><a href="ch05s02.htm">확인해 보세요</a></li>'
		str += '		<li><a href="ch05s03.htm">궁금해요</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">기타 정보</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">제품규격</a></li>'
		str += '		<li><a href="ch06s02.htm">절전 기능</a></li>'
		str += '		<li><a href="ch06s03.htm">고객 등록</a></li>'
		str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// ser
function ser(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Najvažnije mere predostrožnosti</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Pre početka</a></li>'
		str += '		<li><a href="ch01s02.htm">Briga i održavanje</a></li>'
		str += '		<li><a href="ch01s03.htm">Bezbednosne mere predostrožnosti</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Instaliranje proizvoda</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Sadržaj paketa</a></li>'
		str += '		<li><a href="ch02s02.htm">Instaliranje postolja</a></li>'
		str += '		<li><a href="ch02s03.htm">Uklanjanje postolja</a></li>'
		str += '		<li><a href="ch02s04.htm">Dodavanje zidnog nosača / stolnog postolja</a></li>'
		str += '		<li><a href="ch02s05.htm">Povezivanje sa računarom</a></li>'
		str += '		<li><a href="ch02s06.htm">Korišćenje monitora kao televizora</a></li>'
		str += '		<li><a href="ch02s07.htm">Povezivanje HDMI kabla</a></li>'
		str += '		<li><a href="ch02s08.htm">Povezivanje preko kabla DVI-do-HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Povezivanje komponentnog kabla</a></li>'
		str += '		<li><a href="ch02s10.htm">Povezivanje skart kabla</a></li>'
		str += '		<li><a href="ch02s11.htm">COMMON INTERFACE - povezivanje</a></li>'
		str += '		<li><a href="ch02s12.htm">Povezivanje pojačala</a></li>'
		str += '		<li><a href="ch02s13.htm">Priključivanje slušalica</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington Lock</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Korišćenje proizvoda</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Funkcija Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Prikaz kontrolne table</a></li>'
		str += '		<li><a href="ch03s03.htm">Daljinski upravljač</a></li>'
		str += '		<li><a href="ch03s04.htm">Funkcija teleteksta</a></li>'
		str += '		<li><a href="ch03s05.htm">Korišćenje menija za podešavanje ekrana (OSD: On Screen Display, meni na ekranu)</a></li>'
		str += '		<li><a href="ch03s06.htm">Instaliranje upravljačkog programa.</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabela standardnih signalnih režima</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Instalacija softvera</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Rešavanje problema</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Samo-dijagnostika monitora</a></li>'
		str += '		<li><a href="ch05s02.htm">Pre nego što zatražite servisiranje</a></li>'
		str += '		<li><a href="ch05s03.htm">Najčešća pitanja</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Dodatne informacije</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikacije</a></li>'
		str += '		<li><a href="ch06s02.htm">Funkcija uštede energije</a></li>'
		str += '		<li><a href="ch06s03.htm">Kontaktirajte SAMSUNG WORLDWIDE</a></li>'
		//str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// slk
function slk(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Dôležité bezpečnostné upozornenia</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Skôr než začnete</a></li>'
		str += '		<li><a href="ch01s02.htm">Starostlivosť a údržba</a></li>'
		str += '		<li><a href="ch01s03.htm">Bezpečnostné opatrenia</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Montáž výrobku</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Obsah balenia</a></li>'
		str += '		<li><a href="ch02s02.htm">Montáž stojana</a></li>'
		str += '		<li><a href="ch02s03.htm">Odstránenie stojanu</a></li>'
		str += '		<li><a href="ch02s04.htm">Upevnenie nástenného držiaka/stolový stojan</a></li>'
		str += '		<li><a href="ch02s05.htm">Pripojenie k počítaču</a></li>'
		str += '		<li><a href="ch02s06.htm">Používanie produktu ako TV</a></li>'
		str += '		<li><a href="ch02s07.htm">Pripojenie kábla HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Pripojenie pomocou kábla DVI do HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Pripojenie komponentného kábla</a></li>'
		str += '		<li><a href="ch02s10.htm">Pripojenie kábla Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Pripojenie BEŽNÉHO ROZHRANIA</a></li>'
		str += '		<li><a href="ch02s12.htm">Pripojenie k zosilňovaču</a></li>'
		str += '		<li><a href="ch02s13.htm">Pripájajú sa slúchadlá</a></li>'
		str += '		<li><a href="ch02s14.htm">Uzamknutie Kensington</a></li>'
				str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Používanie produktu</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Funkcia Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Pohľad na ovládací panel</a></li>'
		str += '		<li><a href="ch03s03.htm">Diaľkové ovládanie</a></li>'
		str += '		<li><a href="ch03s04.htm">nkcia teletext</a></li>'
		str += '		<li><a href="ch03s05.htm">Používanie ponuky Nastavenie obrazovky (OSD: Zobrazenie na obrazovke)</a></li>'
		str += '		<li><a href="ch03s06.htm">Inštalácia ovládača zariadenia</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabuľka režimu štandardného signálu</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Inštalácia softvéru</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Ťažkosti</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Vlastná diagnostika monitora</a></li>'
		str += '		<li><a href="ch05s02.htm">Skôr, než zavoláte do servisu</a></li>'
		str += '		<li><a href="ch05s03.htm">FAQ</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Viac informácií</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Špecifikácie</a></li>'
		str += '		<li><a href="ch06s02.htm">Funkcia šetrenie energiou</a></li>'
		str += '		<li><a href="ch06s03.htm">Skontaktujte SAMSUNG WORLDWIDE (Celosvetový Samsung)</a></li>'
		str += '		<li><a href="ch06s04.htm">Správna likvidácia</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// sln
function sln(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Najpomembnejši varnostni ukrepi</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Pred začetkom </a></li>'
		str += '		<li><a href="ch01s02.htm">Skrb za izdelek in njegovo vzdrževanje</a></li>'
		str += '		<li><a href="ch01s03.htm">Varnostni ukrepi</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Namestitev izdelka</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Vsebina paketa</a></li>'
		str += '		<li><a href="ch02s02.htm">Namestitev stojala</a></li>'
		str += '		<li><a href="ch02s03.htm">Odstranjevanje stojala</a></li>'
		str += '		<li><a href="ch02s04.htm">Namestitev opreme za pritrditev na steno/namiznega stojala</a></li>'
		str += '		<li><a href="ch02s05.htm">Povezovanje z računalnikom</a></li>'
		str += '		<li><a href="ch02s06.htm">Uporaba kot televizor</a></li>'
		str += '		<li><a href="ch02s07.htm">Priključitev kabla HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Povezava s kablom za povezavo vrat DVI in HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Priključitev komponentnega kabla</a></li>'
		str += '		<li><a href="ch02s10.htm">Priključitev kabla Scart</a></li>'
		str += '		<li><a href="ch02s11.htm">Priključitev splošnega vmesnika</a></li>'
		str += '		<li><a href="ch02s12.htm">Povezava z ojačevalnikom</a></li>'
		str += '		<li><a href="ch02s13.htm">Povezava slušalk</a></li>'
		str += '		<li><a href="ch02s14.htm">Ključavnica Kensington</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Uporaba izdelka</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Funkcija Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Ogled nadzorne plošče</a></li>'
		str += '		<li><a href="ch03s03.htm">Daljinski upravljalnik</a></li>'
		str += '		<li><a href="ch03s04.htm">Funkcija teleteksta</a></li>'
		str += '		<li><a href="ch03s05.htm">Uporaba menija prilagajanja slike (prikaz na sliki)</a></li>'
		str += '		<li><a href="ch03s06.htm">Namestitev gonilnika naprave</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabela načinov standardnega signala</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Namestitev programske opreme</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Odpravljanje težav</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Samodiagnoza monitorja</a></li>'
		str += '		<li><a href="ch05s02.htm">Preden se obrnete na servis</a></li>'
		str += '		<li><a href="ch05s03.htm">Pogosta vprašanja</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Dodatne informacije</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikacije</a></li>'
		str += '		<li><a href="ch06s02.htm">Funkcija varčevanja z energijo</a></li>'
		str += '		<li><a href="ch06s03.htm">Obrnite se na SAMSUNG WORLDWIDE (GLOBALNI SAMSUNG)</a></li>'
		str += '		<li><a href="ch06s04.htm">Pravilno odlaganje</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// spa
function spa(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Principales precauciones de seguridad</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Antes de comenzar</a></li>'
		str += '		<li><a href="ch01s02.htm">Conservación y mantenimiento</a></li>'
		str += '		<li><a href="ch01s03.htm">Precauciones de seguridad</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Instalación del producto</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Contenido del embalaje</a></li>'
		str += '		<li><a href="ch02s02.htm">Instalación del soporte</a></li>'
		str += '		<li><a href="ch02s03.htm">Extracción del soporte</a></li>'
		str += '		<li><a href="ch02s04.htm">Instalación del montaje mural/soporte de escritorio</a></li>'
		str += '		<li><a href="ch02s05.htm">Conexión a un ordenador</a></li>'
		str += '		<li><a href="ch02s06.htm">Utilización como televisor</a></li>'
		str += '		<li><a href="ch02s07.htm">Conexión de un cable HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Connecting Using a DVI to HDMI Cable</a></li>'
		str += '		<li><a href="ch02s09.htm">Conexión de un cable de componentes </a></li>'		
		str += '		<li><a href="ch02s10.htm">Conexión de dispositivos AV</a></li>'
		str += '		<li><a href="ch02s11.htm">Conexión de un amplificador</a></li>'
		str += '		<li><a href="ch02s12.htm">Conexión de los auriculares</a></li>'
		str += '		<li><a href="ch02s13.htm">Bloqueo Kensington  </a></li>'					
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Uso del producto</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Función Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Vista del panel de control</a></li>'
		str += '		<li><a href="ch03s03.htm">Mando a distancia</a></li>'
		str += '		<li><a href="ch03s04.htm">Función de teletexto</a></li>'
		str += '		<li><a href="ch03s05.htm">Uso del menú de ajuste de la pantalla (OSD: presentación en pantalla)</a></li>'
		str += '		<li><a href="ch03s06.htm">Instalación del controlador del dispositivo</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabla de los modos de señal estándar</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Instalación del software</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicTune</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Solución de problemas</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Autodiagnóstico de monitor</a></li>'
		str += '		<li><a href="ch05s02.htm">Antes de solicitar un servicio</a></li>'
		str += '		<li><a href="ch05s03.htm">Preguntas habituales</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Más información</a>'
		str += '		<ul style="width:190px;">'
		str += '		<li><a href="ch06s01.htm">Especificaciones</a></li>'
		str += '		<li><a href="ch06s02.htm">Función de ahorro de energía</a></li>'
		str += '		<li><a href="ch06s03.htm">Contacte con SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Eliminación correcta</a></li>'		
		//str += '		<li><a href="ch06s06.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s07.htm">재활용 정보</a></li>'
		str += '		</ul></li>'	

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// swe
function swe(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Huvudsäkerhetsföreskrifter</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Innan du börjar</a></li>'
		str += '		<li><a href="ch01s02.htm">Handhavande och underhåll</a></li>'
		str += '		<li><a href="ch01s03.htm">Säkerhetsföreskrifter</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Installera produkten</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Förpackningens innehåll</a></li>'
		str += '		<li><a href="ch02s02.htm">Montera stativet</a></li>'
		str += '		<li><a href="ch02s03.htm">Avlägsna stativet</a></li>'
		str += '		<li><a href="ch02s04.htm">Montera ett väggstativ/bordsstativ</a></li>'
		str += '		<li><a href="ch02s05.htm">Ansluta till en dator</a></li>'
		str += '		<li><a href="ch02s06.htm">Använda som en TV</a></li>'
		str += '		<li><a href="ch02s07.htm">Ansluta en HDMI-kabel</a></li>'
		str += '		<li><a href="ch02s08.htm">Anslutning med en DVI till HDMI-kabel</a></li>'
		str += '		<li><a href="ch02s09.htm">Ansluta en komponentkabel</a></li>'
		str += '		<li><a href="ch02s10.htm">Ansluta en skartkabel</a></li>'
		str += '		<li><a href="ch02s11.htm">Ansluta COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Ansluta en förstärkare</a></li>'
		str += '		<li><a href="ch02s13.htm">Ansluta hörlurar</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington-lås</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Använda produkten</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play-funktion</a></li>'
		str += '		<li><a href="ch03s02.htm">Visa kontrollpanelen</a></li>'
		str += '		<li><a href="ch03s03.htm">Fjärrkontroll</a></li>'
		str += '		<li><a href="ch03s04.htm">Text-tv-funktionen</a></li>'
		str += '		<li><a href="ch03s05.htm">Använda skärmmenyn (OSD: On Screen Display)</a></li>'
		str += '		<li><a href="ch03s06.htm">Installera enhetsdrivrutinen</a></li>'
		str += '		<li><a href="ch03s07.htm">Tabell för standardsignalläge</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Installera programmet</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Felsökning</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Självdiagnos för skärm</a></li>'
		str += '		<li><a href="ch05s02.htm">Innan du begär service</a></li>'
		str += '		<li><a href="ch05s03.htm">Vanliga frågor</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Mer information</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Specifikationer</a></li>'
		str += '		<li><a href="ch06s02.htm">Energisparfunktion</a></li>'
		str += '		<li><a href="ch06s03.htm">Kontakta SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s04.htm">Korrekt avfallshantering</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// TC
function TC(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">주요 안전 사항</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">사용설명서를 읽기 전에</a></li>'
		str += '		<li><a href="ch01s02.htm">보관 및 관리</a></li>'
		str += '		<li><a href="ch01s03.htm">안전을 위한 주의사항</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">설치하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">구성품 확인</a></li>'
		str += '		<li><a href="ch02s02.htm">받침대 조립하기</a></li>'
		str += '		<li><a href="ch02s03.htm">받침대 제거하기</a></li>'
		str += '		<li><a href="ch02s04.htm">걸이용 받침대 설치</a></li>'
		str += '		<li><a href="ch02s05.htm">PC와 연결</a></li>'
		str += '		<li><a href="ch02s06.htm">도난 방지용 잠금 장치</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">사용하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">최적해상도 설정</a></li>'
		str += '		<li><a href="ch03s02.htm">표준신호모드표</a></li>'
		str += '		<li><a href="ch03s03.htm">제품 드라이버 설치</a></li>'
		str += '		<li><a href="ch03s04.htm">제품 조작 버튼 설명</a></li>'
		str += '		<li><a href="ch03s05.htm">화면 조정 메뉴 사용하기</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">소프트웨어 설치</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">문제 해결</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">모니터 자체 진단하기</a></li>'
		str += '		<li><a href="ch05s02.htm">확인해 보세요</a></li>'
		str += '		<li><a href="ch05s03.htm">궁금해요</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">기타 정보</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">제품규격</a></li>'
		str += '		<li><a href="ch06s02.htm">절전 기능</a></li>'
		str += '		<li><a href="ch06s03.htm">고객 등록</a></li>'
		str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// tur
function tur(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Ana Güvenlik Önlemleri</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Başlamadan Önce</a></li>'
		str += '		<li><a href="ch01s02.htm">Denetim ve Bakım</a></li>'
		str += '		<li><a href="ch01s03.htm">Güvenlik Önlemleri</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Ürünün Montajı</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Paket içindekiler</a></li>'
		str += '		<li><a href="ch02s02.htm">Altlığın Takılması</a></li>'
		str += '		<li><a href="ch02s03.htm">Altlığın Çıkarılması</a></li>'
		str += '		<li><a href="ch02s04.htm">Bir Duvar Montajının/Masaüstü Altlığının Takılması</a></li>'
		str += '		<li><a href="ch02s05.htm">Bir Bilgisayara Bağlama</a></li>'
		str += '		<li><a href="ch02s06.htm">Bir TV olarak kullanma</a></li>'
		str += '		<li><a href="ch02s07.htm">Bir HDMI kablosu bağlama</a></li>'
		str += '		<li><a href="ch02s08.htm">DVI - HDMI Kablosu Kullanarak Bağlama</a></li>'
		str += '		<li><a href="ch02s09.htm">Bir Komponent kablosu bağlama</a></li>'
		str += '		<li><a href="ch02s10.htm">Bir Scart kablosu bağlama</a></li>'
		str += '		<li><a href="ch02s11.htm">COMMON INTERFACE\'e bağlanıyor</a></li>'
		str += '		<li><a href="ch02s12.htm">Amplifikatöre bağlama</a></li>'
		str += '		<li><a href="ch02s13.htm">Kulaklığı Bağlama</a></li>'
		str += '		<li><a href="ch02s14.htm">Kensington Kilidi</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Ürünün Kullanımı</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play Özelliği</a></li>'
		str += '		<li><a href="ch03s02.htm">Kontrol Panelinin görüntülenmesi</a></li>'
		str += '		<li><a href="ch03s03.htm">Uzaktan Kumanda</a></li>'
		str += '		<li><a href="ch03s04.htm">Teletekst Özelliği</a></li>'
		str += '		<li><a href="ch03s05.htm">Ekran Ayarlama Menüsünün Kullanılması (OSD:Ekran Menüsü)</a></li>'
		str += '		<li><a href="ch03s06.htm">Cihaz Sürücüsünün Yüklenmesi</a></li>'
		str += '		<li><a href="ch03s07.htm">Standart Sinyal Modu Tablosu</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Yazılımın Yüklenmesi</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Sorun Giderme</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Monitör Kendi Kendini Tanıma</a></li>'
		str += '		<li><a href="ch05s02.htm">Servis Talebinden Önce</a></li>'
		str += '		<li><a href="ch05s03.htm">SSS</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Daha Fazla Bilgi</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Teknik Özellikler</a></li>'
		str += '		<li><a href="ch06s02.htm">Güç Tasarruf İşlevi</a></li>'
		str += '		<li><a href="ch06s03.htm">Dünyanın her yerinden SAMSUNG\'a ulaşın.</a></li>'
		//str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// ukr
function ukr(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">Основні правила техніки безпеки</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">Перед тим як почати</a></li>'
		str += '		<li><a href="ch01s02.htm">Обслуговування та експлуатація</a></li>'
		str += '		<li><a href="ch01s03.htm">Правила техніки безпеки</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">Встановлення виробу</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">Вміст упаковки</a></li>'
		str += '		<li><a href="ch02s02.htm">Встановлення підставки</a></li>'
		str += '		<li><a href="ch02s03.htm">Від’єднання підставки</a></li>'
		str += '		<li><a href="ch02s04.htm">Прикріплення настінного кріплення/підставки для робочого столу</a></li>'
		str += '		<li><a href="ch02s05.htm">Підключення до комп’ютера</a></li>'
		str += '		<li><a href="ch02s06.htm">Використання виробу як телевізора</a></li>'
		str += '		<li><a href="ch02s07.htm">Під\'єднання кабелю HDMI</a></li>'
		str += '		<li><a href="ch02s08.htm">Під’єднання за допомогою кабелю DVI-HDMI</a></li>'
		str += '		<li><a href="ch02s09.htm">Під\'єднання компонентного кабелю </a></li>'
		str += '		<li><a href="ch02s10.htm">Під\'єднання кабелю Scart </a></li>'
		str += '		<li><a href="ch02s11.htm">Під’єднання до гнізда COMMON INTERFACE</a></li>'
		str += '		<li><a href="ch02s12.htm">Під\'єднання до підсилювача </a></li>'
		str += '		<li><a href="ch02s13.htm">Підключення навушників </a></li>'
		str += '		<li><a href="ch02s14.htm">Замок “Кенсінгтон”</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">Використання виробу</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Функція Plug & Play</a></li>'
		str += '		<li><a href="ch03s02.htm">Огляд панелі керування</a></li>'
		str += '		<li><a href="ch03s03.htm">Пульт дистанційного керування</a></li>'
		str += '		<li><a href="ch03s04.htm">Функція телетексту</a></li>'
		str += '		<li><a href="ch03s05.htm">Використання екранного меню налаштувань (екранне меню)</a></li>'
		str += '		<li><a href="ch03s06.htm">Встановлення драйвера пристрою</a></li>'
		str += '		<li><a href="ch03s07.htm">Таблиця стандартних режимів передачі сигналу</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">Встановлення програмного забезпечення </a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">Усунення несправностей</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">Самодіагностика монітора</a></li>'
		str += '		<li><a href="ch05s02.htm">Перед тим як звернутися по допомогу</a></li>'
		str += '		<li><a href="ch05s03.htm">ЧАСТІ ЗАПИТАННЯ</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">Додаткова інформація</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">Технічні характеристики</a></li>'
		str += '		<li><a href="ch06s02.htm">Функція енергозбереження</a></li>'
		str += '		<li><a href="ch06s03.htm">Як звернутись у компанію SAMSUNG у різних країнах світу</a></li>'
		//str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// vie
function vie(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">주요 안전 사항</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">사용설명서를 읽기 전에</a></li>'
		str += '		<li><a href="ch01s02.htm">보관 및 관리</a></li>'
		str += '		<li><a href="ch01s03.htm">안전을 위한 주의사항</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">설치하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">구성품 확인</a></li>'
		str += '		<li><a href="ch02s02.htm">받침대 조립하기</a></li>'
		str += '		<li><a href="ch02s03.htm">받침대 제거하기</a></li>'
		str += '		<li><a href="ch02s04.htm">걸이용 받침대 설치</a></li>'
		str += '		<li><a href="ch02s05.htm">PC와 연결</a></li>'
		str += '		<li><a href="ch02s06.htm">도난 방지용 잠금 장치</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">사용하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">최적해상도 설정</a></li>'
		str += '		<li><a href="ch03s02.htm">표준신호모드표</a></li>'
		str += '		<li><a href="ch03s03.htm">제품 드라이버 설치</a></li>'
		str += '		<li><a href="ch03s04.htm">제품 조작 버튼 설명</a></li>'
		str += '		<li><a href="ch03s05.htm">화면 조정 메뉴 사용하기</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">소프트웨어 설치</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">문제 해결</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">모니터 자체 진단하기</a></li>'
		str += '		<li><a href="ch05s02.htm">확인해 보세요</a></li>'
		str += '		<li><a href="ch05s03.htm">궁금해요</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">기타 정보</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">제품규격</a></li>'
		str += '		<li><a href="ch06s02.htm">절전 기능</a></li>'
		str += '		<li><a href="ch06s03.htm">고객 등록</a></li>'
		str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// jpn
function jpn(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">주요 안전 사항</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">사용설명서를 읽기 전에</a></li>'
		str += '		<li><a href="ch01s02.htm">보관 및 관리</a></li>'
		str += '		<li><a href="ch01s03.htm">안전을 위한 주의사항</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">설치하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">구성품 확인</a></li>'
		str += '		<li><a href="ch02s02.htm">받침대 조립하기</a></li>'
		str += '		<li><a href="ch02s03.htm">받침대 제거하기</a></li>'
		str += '		<li><a href="ch02s04.htm">걸이용 받침대 설치</a></li>'
		str += '		<li><a href="ch02s05.htm">PC와 연결</a></li>'
		str += '		<li><a href="ch02s06.htm">도난 방지용 잠금 장치</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">사용하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">최적해상도 설정</a></li>'
		str += '		<li><a href="ch03s02.htm">표준신호모드표</a></li>'
		str += '		<li><a href="ch03s03.htm">제품 드라이버 설치</a></li>'
		str += '		<li><a href="ch03s04.htm">제품 조작 버튼 설명</a></li>'
		str += '		<li><a href="ch03s05.htm">화면 조정 메뉴 사용하기</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">소프트웨어 설치</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s04.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">문제 해결</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">모니터 자체 진단하기</a></li>'
		str += '		<li><a href="ch05s02.htm">확인해 보세요</a></li>'
		str += '		<li><a href="ch05s03.htm">궁금해요</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">기타 정보</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">제품규격</a></li>'
		str += '		<li><a href="ch06s02.htm">절전 기능</a></li>'
		str += '		<li><a href="ch06s03.htm">고객 등록</a></li>'
		str += '		<li><a href="ch06s04.htm">서비스 센터 안내</a></li>'
		str += '		<li><a href="ch06s05.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}

// kor
function kor(){

str  = ''
		str += '<ul id="qm0" class="qmmc">'
		str += '	<li><a class="qmparent" href="ch01s01.htm">주요 안전 사항</a>'
		str += '		<ul>'
		str += '		<li><a href="ch01s01.htm">사용설명서를 읽기 전에</a></li>'
		str += '		<li><a href="ch01s02.htm">보관 및 관리</a></li>'
		str += '		<li><a href="ch01s03.htm">안전을 위한 주의사항</a></li>'		
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch02s01.htm">설치하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch02s01.htm">구성품 확인</a></li>'
		str += '		<li><a href="ch02s02.htm">Using the Stand</a></li>'
		str += '		<li><a href="ch02s03.htm">컴퓨터와 연결하기</a></li>'
		str += '		<li><a href="ch02s04.htm">TV로 사용하기</a></li>'
		str += '		<li><a href="ch02s05.htm">AV 장치와 연결하기</a></li>'
		str += '		<li><a href="ch02s06.htm">컴포넌트 단자와 연결하기 </a></li>'
		str += '		<li><a href="ch02s07.htm">HDMI 케이블로 연결하기</a></li>'		
		str += '		<li><a href="ch02s08.htm">HDMI - DVI 케이블로 연결하기 </a></li>'
		str += '		<li><a href="ch02s09.htm">앰프와 연결하기</a></li>'
		str += '		<li><a href="ch02s10.htm">헤드폰 연결하기</a></li>'
		str += '		<li><a href="ch02s11.htm">도난 방지용 잠금 장치</a></li>'					
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch03s01.htm">사용하기</a>'
		str += '		<ul>'
		str += '		<li><a href="ch03s01.htm">Plug & Play Feature</a></li>'
		str += '		<li><a href="ch03s02.htm">표준신호모드표</a></li>'
		str += '		<li><a href="ch03s03.htm">제품 드라이버 설치</a></li>'
		str += '		<li><a href="ch03s04.htm">제품 조작 버튼 설명</a></li>'
		str += '		<li><a href="ch03s05.htm">화면 조정 메뉴 사용하기</a></li>'
		str += '		<li><a href="ch03s06.htm">리모컨</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch04s01.htm">소프트웨어 설치</a>'
		str += '		<ul>'
		str += '		<li><a href="ch04s01.htm">Natural Color</a></li>'
		//str += '		<li><a href="ch04s02.htm">MagicTune</a></li>'
		//str += '		<li><a href="ch04s03.htm">MagicRotarion</a></li>'
		str += '		<li><a href="ch04s02.htm">MultiScreen</a></li>'
		str += '		</ul></li>'

		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch05s01.htm">문제 해결</a>'
		str += '		<ul>'
		str += '		<li><a href="ch05s01.htm">모니터 자체 진단하기</a></li>'
		str += '		<li><a href="ch05s02.htm">고장 신고 전 확인사항</a></li>'
		str += '		<li><a href="ch05s03.htm">궁금해요</a></li>'
		str += '		</ul></li>'
		
		str += '	<li><span class="qmdivider qmdividery" ></span></li>'
		str += '	<li><a class="qmparent" href="ch06s01.htm">기타 정보</a>'
		str += '		<ul>'
		str += '		<li><a href="ch06s01.htm">제품규격</a></li>'
		str += '		<li><a href="ch06s02.htm">절전 기능</a></li>'
		str += '		<li><a href="ch06s05.htm">Contact SAMSUNG WORLDWIDE</a></li>'
		str += '		<li><a href="ch06s06.htm">Correct Disposal of This Product</a></li>'		
		//str += '		<li><a href="ch06s06.htm">서비스 센터 안내</a></li>'
		//str += '		<li><a href="ch06s07.htm">재활용 정보</a></li>'
		str += '		</ul></li>'		

		str += '<li class="qmclear">&nbsp;</li></ul>'
document.write( str );
}


// Header Contents End =========================================================================//


// =============================================================================================//
// =============================================================================================//
// 메인페이지 상단 나라별  언어선택 | 메인페이지 | 차례보기 ========바뀌지않음 안건드려도 됨====//
// =============================================================================================//
// =============================================================================================//
// =============================================================================================//

//bul
function bul_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-left:26px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Език</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/bul/index.htm" target="_parent">Главна страница</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Съдържание</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//cro
function cro_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-left:26px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Jezik</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/cro/index.htm" target="_parent">Glavna stranica</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Sadržaj</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//cze
function cze_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-left:26px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Jazyk</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/cze/index.htm" target="_parent">Hlavní stránka</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Obsah</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//dan
function dan_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-left:26px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Sprog</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/dan/index.htm" target="_parent">Hovedside</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Indholdsfortegnelse</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//dut
function dut_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-left:26px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Taalkeuze</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/dut/index.htm" target="_parent">Hoofdpagina</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Inhoudsopgave</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//eng
function eng_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Language</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/eng/index.htm" target="_parent">Main page</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Table of contents</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//est
function est_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-left:26px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Keel</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/est/index.htm" target="_parent">Pealehekülg</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Sisukord</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//fin
function fin_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Kieli</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/fin/index.htm" target="_parent">Pääsivu</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Sisällysluettelo</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//fre
function fre_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Langue</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/fre/index.htm" target="_parent">Page d\'accueil</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Table des matières</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//ger
function ger_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Sprache</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/ger/index.htm" target="_parent">Startseite</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Inhaltsverzeichnis</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//gre
function gre_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Γλώσσα</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/gre/index.htm" target="_parent">Κεντρική σελίδα</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Πίνακας Περιεχομένων</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//hun
function hun_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Nyelv</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/hun/index.htm" target="_parent">Fooldal</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Tartalom</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//ita
function ita_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Lingua</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/ita/index.htm" target="_parent">Pagina principale</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Sommario</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//lat
function lat_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Valoda</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/lat/index.htm" target="_parent">Galvenā lapa</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Satura rādītājs</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//lit
function lit_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Kalba</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/lit/index.htm" target="_parent">Pagrindinis puslapis</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Turinys</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//nor
function nor_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Språk</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/nor/index.htm" target="_parent">Hovedside</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Innholdsfortegnelse</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//pol
function pol_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Język</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/pol/index.htm" target="_parent">Główna strona</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Spis treści</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//por
function por_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Idioma</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/por/index.htm" target="_parent">Página principal</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Índice</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//rom
function rom_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Limbă</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/rom/index.htm" target="_parent">Pagina principală</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Cuprins</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//rus
function rus_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Язык</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/rus/index.htm" target="_parent">Главная страница</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Содержание</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//sc
function sc_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">语言</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/sc/index.htm" target="_parent">主页</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">目录</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//ser
function ser_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Jezik</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/ser/index.htm" target="_parent">Glavna stranica</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Sadržaj</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//slk
function slk_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Jazyk</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/slk/index.htm" target="_parent">Hlavná strana</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Obsah</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//sln
function sln_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Jezik</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/sln/index.htm" target="_parent">Prva stran</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Kazalo</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//spa
function spa_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Idioma</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/spa/index.htm" target="_parent">Página principal</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Índice</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//swe
function swe_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Språk</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/swe/index.htm" target="_parent">Huvudsida</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Innehållsförteckning</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//tc
function tc_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">語言</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/tc/index.htm" target="_parent">回首頁</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">檢視目錄</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//tur
function tur_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Dil</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/tur/index.htm" target="_parent">Ana Sayfa</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">İçindekiler </a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//ukr
function ukr_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Мова</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/ukr/index.htm" target="_parent">Головна сторінка</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Зміст</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//vie
function vie_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">Ngôn ngữ</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/vie/index.htm" target="_parent">Trang Chính</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">Mục lục</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//jpn
function jpn_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-right:20px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../../monsetup.htm" target="_parent">メイン</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../_index/jpn/index.htm" target="_parent">メインページ</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">目次</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}

//kor
function kor_top(){
str  = ''
		str += '<p style="margin-top:5px; margin-left:26px;">'
		str += '<font color="#102189" style="font-size:11px;">'
		str += '<a href="../../_index/kor/index.htm" target="_parent">메인 페이지</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="bk01-toc.htm" target="_parent">차례 보기</a></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
document.write( str );
}


// footer Contents End =========================================================================//


// =============================================================================================//
// =============================================================================================//
// 메인페이지 하단 나라별  저작권 ========바뀌지않음 안건드려도 됨====//
// =============================================================================================//
// =============================================================================================//
// =============================================================================================//

//bul
function bul_foot(){
str  = ''
str += '<div align="right" class="style3">Цветът и обликът могат да се различават в зависимост от продукта, а спецификациите подлежат на промяна без предизвестие с оглед подобряване на работата.</div>'
str += '<div align="right" class="style1">      Съдържанието на това ръководство за потребителя не може да бъде частично или изцяло възпроизвеждано, разпространявано или използвано в каквато и да било форма, без писмено разрешение от Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Авторските права върху това ръководство са запазени от Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//cro
function cro_foot(){
str  = ''
str += '<div align="right" class="style3">Boja i izgled mogu se razlikovati ovisno o uređaju, a specifikacije su podložne promjeni bez prethodne obavijesti, radi poboljšanja performansi.</div>'
str += '<div align="right" class="style1">      Sadržaj ovog priručnika ili bilo kojeg njegovog dijela nije dopušteno reproducirati, distribuirati ili koristiti u bilo kojem obliku bez pisanog dopuštenja tvrtke Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Autorska prava na ovaj uređaj zadržava tvrtka Samsung Electronics, Co., Ltd</div>'
document.write( str );
}

//cze
function cze_foot(){
str  = ''
str += '<div align="right" class="style3">Barva a vzhled se mohou lišit podle výrobku. Specifikace mohou být změněny bez předchozího upozornění za účelem zlepšení výkonu výrobku.</div>'
str += '<div align="right" class="style1">      Obsah této příručky nesmí být žádnou formou reprodukován, distribuován ani používán, a to vcelku ani částečně, bez písemného svolení společnosti Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Autorska prava © 2009 Samsung Electronics, Co., Ltd. Autorská práva k této příručce náležejí společnosti Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//dan
function dan_foot(){
str  = ''
str += '<div align="right" class="style3">Farven og udseendet kan – afhængigt af produktet – være anderledes, og specifikationerne kan ændres uden forudgående varsel for at forbedre ydelsen.</div>'
str += '<div align="right" class="style1">      Indholdet i denne vejledning må ikke, hverken helt eller delvist, reproduceres, distribueres eller anvendes i nogen form uden skriftlig tilladelse fra Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Indholdet i denne vejledning må ikke, hverken helt eller delvist, reproduceres, distribueres eller anvendes i nogen form uden skriftlig tilladelse fra Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//dut
function dut_foot(){
str  = ''
str += '<div align="right" class="style3">De kleur en het uiterlijk kunnen afwijken, afhankelijk van het product. Ook kunnen de specificaties zonder voorafgaand bericht worden gewijzigd om de prestaties te verbeteren.</div>'
str += '<div align="right" class="style1">      De inhoud van deze handleiding mag niet worden verveelvoudigd, gedistribueerd of gebruikt, geheel of gedeeltelijk of in welke vorm dan ook, zonder geschreven toestemming van Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics Co., Ltd. Het auteursrecht op deze handleiding is voorbehouden door Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//eng
function eng_foot(){
str  = ''
str += '<div align="right" class="style3">The color and the appearance may differ depending on the product, and the specifications are subject to change without prior notice to improve the performance.</div>'
str += '<div align="right" class="style1">      The contents of this manual may not be partially or in whole reproduced, distributed or used in any form without the written permission of Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">     Copyright © 2009 Samsung Electronics, Co., Ltd. The copyright of this manual is reserved by Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//est
function est_foot(){
str  = ''
str += '<div align="right" class="style3">Värv ja välimus võivad tootest olenevalt varieeruda, samuti võidakse tehnilisi andmeid jõudluse parandamise eesmärgil eelneva etteteatamiseta muuta.</div>'
str += '<div align="right" class="style1">      Selle kasutusjuhendi sisu ei ole lubatud ilma ettevõtte Samsung Electronics, Co., Ltd kirjaliku loata osaliselt ega tervenisti kopeerida, levitada ega mis tahes viisil kasutada.</div>'
str += '<div align="right" class="style1">      Autoriõigused kaitstud © 2009 Samsung Electronics, Co., Ltd. Selle kasutusjuhendi autoriõiguste omanik on Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//fin
function fin_foot(){
str  = ''
str += '<div align="right" class="style3">Tuotteiden väri ja ulkoasu saattavat vaihdella ja teknisiä tietoja voidaan laitteen toiminnan parantamiseksi muuttaa ilman ennakkoilmoitusta.</div>'
str += '<div align="right" class="style1">      Tämän oppaan sisältöä tai sen osia ei saa jäljentää, jaella tai käyttää millään muullakaan tavoin ilman Samsung Electronics, Co., Ltd:n antamaa kirjallista lupaa.</div>'
str += '<div align="right" class="style1">      Tekijänoikeudet © 2009 Samsung Electronics, Co., Ltd. Tämän oppaan tekijänoikeudet kuuluvat Samsung Electronics, Co., Ltd:lle.</div>'
document.write( str );
}

//fre
function fre_foot(){
str  = ''
str += '<div align="right" class="style3">La couleur et l＇aspect du produit peuvent varier en fonction du modèle, et ses spécifications peuvent être modifiées sans préavis pour des raisons d＇amélioration des performances.</div>'
str += '<div align="right" class="style1">      Le contenu de ce manuel ne peut être reproduit, distribué ou utilisé, en tout ou en partie, sous quelque forme que ce soit, sans l＇autorisation écrite de Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Le copyright de ce manuel est détenu par Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//ger
function ger_foot(){
str  = ''
str += '<div align="right" class="style3">Farbe und Aussehen des Geräts sind geräteabhängig, und jederzeitige Änderungen der technischen Daten des Geräts zum Zweck der Leistungssteigerung sind vorbehalten.</div>'
str += '<div align="right" class="style1">Ohne ausdrückliche Genehmigung von Samsung Electronics Co., Ltd. darf kein Teil dieses Handbuchs vervielfältigt, verbreitet oder verwendet werden.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Samsung Electronics Co., Ltd. behält sich das Urheberrecht an diesem Handbuch vor.</div>'
document.write( str );
}

//gre
function gre_foot(){
str  = ''
str += '<div align="right" class="style3">Το χρώμα και η εμφάνιση ενδέχεται να διαφέρουν, ανάλογα με το προϊόν και οι προδιαγραφές ενδέχεται να τροποποιηθούν χωρίς προειδοποίηση, για τη βελτίωση της απόδοσης.</div>'
str += '<div align="right" class="style1">      Δεν επιτρέπεται η τμηματική ή συνολική αναπαραγωγή, διανομή ή χρήση των περιεχομένων αυτού του εγχειριδίου σε οποιαδήποτε μορφή, χωρίς έγγραφη άδεια από τη Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Πνευματικά δικαιώματα &copy; 2009 Samsung Electronics, Co., Ltd. Τα πνευματικά δικαιώματα αυτού του εγχειριδίου διατηρούνται από τη Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//hun
function hun_foot(){
str  = ''
str += '<div align="right" class="style3">A termék színe és kialakítása a típustól függően eltérhet, és a termék műszaki jellemzői a teljesítmény javítása céljából előzetes értesítés nélkül változhatnak.</div>'
str += '<div align="right" class="style1">      A használati útmutató a Samsung Electronics, Co., Ltd írásos engedélye nélkül sem részben, sem teljes egészében nem sokszorosítható, nem terjeszthető és semmilyen formában nem használható fel.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Jelen használati útmutató a Samsung Electronics, Co., Ltd. tulajdona.</div>'
document.write( str );
}

//ita
function ita_foot(){
str  = ''
str += '<div align="right" class="style3">Il colore e l’aspetto possono variare a seconda del prodotto, e le specifiche sono soggette a modifica senza preavviso allo scopo di migliorare le prestazioni del prodotto.</div>'
str += '<div align="right" class="style1">      Sono vietati la riproduzione parziale o totale, la distribuzione o l＇uso in qualsiasi forma dei contenuti di questo manuale senza il consenso scritto di Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Il copyright di questo manuale è riservato a Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//lat
function lat_foot(){
str  = ''
str += '<div align="right" class="style3">Krāsa un izskats var atšķirties atkarībā no izstrādājuma, lai uzlabotu veiktspēju, specifikācijas var tikt mainītas bez iepriekšējā brīdinājuma.</div>'
str += '<div align="right" class="style1">      Šīs rokasgrāmatas saturu nedrīkst jebkādā veidā ne atveidot, ne izplatīt, ne izmantot – ne daļēji, ne pilnībā bez rakstiskas Samsung Electronics, Co., Ltd atļaujas.</div>'
str += '<div align="right" class="style1">      Autortiesības © 2009 Samsung Electronics, Co., Ltd. Šīs rokasgrāmatas autortiesības ir Samsung Electronics, Co., Ltd īpašums.</div>'
document.write( str );
}

//lit
function lit_foot(){
str  = ''
str += '<div align="right" class="style3">Spalva ir išvaizda gali skirtis priklausomai nuo produkto, o specifikacijos gali būti keičiamos pagerinti veikimą iš anksto neįspėjus.</div>'
str += '<div align="right" class="style1">      Šio vadovo turinio iš dalies arba viso negalima atgaminti, platinti arba naudoti jokia forma be rašytinio „Samsung Electronics Co., Ltd.“ leidimo.</div>'
str += '<div align="right" class="style1">      Autoriaus teisės: © „Samsung Electronics, Co., Ltd.“, 2009. Visos šio vartotojo vadovo teisės saugomos „Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//nor
function nor_foot(){
str  = ''
str += '<div align="right" class="style3">Fargen og utseendet kan variere avhengig av produktet, og spesifikasjonene kan endres uten forvarsel for å forbedre ytelsen.</div>'
str += '<div align="right" class="style1">      Innholdet i denne håndboken må ikke reproduseres delvis eller helt, distribueres eller brukes i noen form uten skriftlig tillatelse fra Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Opphavsretten til denne håndboken er forbeholdt av Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//pol
function pol_foot(){
str  = ''
str += '<div align="right" class="style3">Kolor i wygląd może się różnić w zależności od urządzenia. Jego specyfikacja może bez wcześniejszego powiadomienia ulec zmianie, mającej na celu poprawę jakości pracy.</div>'
str += '<div align="right" class="style1">      Zawartość niniejszej instrukcji nie może być częściowo lub w całości reprodukowana, dystrybuowana lub używana w jakikolwiek sposób bez pisemnej zgody firmy Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Prawa autorskie do niniejszej instrukcji należą do firmy Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//por
function por_foot(){
str  = ''
str += '<div align="right" class="style3">A cor e o aspecto podem diferir consoante o produto e as especificações estão sujeitas a alterações sem aviso prévio para melhorar o desempenho.</div>'
str += '<div align="right" class="style1">      Os conteúdos deste manual não podem ser, em parte ou na sua totalidade, reproduzidos, distribuídos ou utilizados, sob qualquer forma, sem a autorização por escrito da Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Direitos de autor © 2009 Samsung Electronics, Co., Ltd. Os direitos de autor deste manual são reservados pela Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//rom
function rom_foot(){
str  = ''
str += '<div align="right" class="style3">Culoare şi aspectul pot fi diferite în funcţie de produs, iar specificaţiile se pot schimba fără notificare prealabilă pentru a îmbunătăţi performanţa.</div>'
str += '<div align="right" class="style1">      Conţinutul acestui manual nu poate fi reprodus, distribuit sau utilizat parţial sau în întregime, sub nicio formă, fără permisiunea scrisă a Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Drepturile de autor pentru acest manual sunt rezervate de Samsung Electronics, Co., Ltd</div>'
document.write( str );
}

//rus
function rus_foot(){
str  = ''
str += '<div align="right" class="style3">Цвет и дизайн изделия зависят от модели, характеристики изделия могут изменяться без предварительного уведомления с целью усовершенствования.</div>'
str += '<div align="right" class="style1">      Полное или частичное воспроизведение, распространение или любое использование содержимого данного руководства запрещено без письменного разрешения компании Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      © Samsung Electronics, Co., Ltd, 2009. Авторское право на данное руководство принадлежит Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//SC
function SC_foot(){
str  = ''
str += '<div align="right" class="style3">颜色和外观可能根据产品的不同而有所变化，并且出于性能提高对规格进行的更改，恕不另行通知。</div>'
str += '<div align="right" class="style1">      未经 Samsung Electronics, Co., Ltd. 的书面许可，不得以任何形式对本手册的部分或完整内容进行复制、散布或使用。</div>'
str += '<div align="right" class="style1">      版权所有 © 2009 Samsung Electronics, Co., Ltd。Samsung Electronics, Co., Ltd. 保留本手册的版权。</div>'
document.write( str );
}

//ser
function ser_foot(){
str  = ''
str += '<div align="right" class="style3">Boja i izgled proizvoda mogu se razlikovati u zavisnosti od proizvoda, a specifikacije podležu promenama bez prethodnog obaveštenja, radi poboljšanja performansi.</div>'
str += '<div align="right" class="style1">      Sadržaj ovog priručnika ne sme se delimično niti u celini reprodukovati, distribuirati ili koristiti u bilo kakvom obliku bez pisanog odobrenja kompanije Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Autorsko pravo nad ovim priručnikom zadržava kompanija Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//slk
function slk_foot(){
str  = ''
str += '<div align="right" class="style3">Farba a vzhľad sa môžu líšiť v závislosti od výrobku a technické údaje podliehajú zmenám bez predchádzajúceho upozornenia na zlepšenie výkonu.</div>'
str += '<div align="right" class="style1">      Obsah tejto príručky sa nesmie čiastočne, ani úplne reprodukovať, distribuovať alebo používať v akejkoľvek forme bez písomného súhlasu spoločnosti Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Autorské právo © 2009 spoločnosť Samsung Electronics, Co., Ltd. Autorské právo k tejto príručke si vyhradzuje spoločnosť Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//sln
function sln_foot(){
str  = ''
str += '<div align="right" class="style3">Barva in videz se lahko razlikujeta glede na izdelek, specifikacije pa se lahko spremenijo brez predhodnega obvestila z namenom izboljšave delovanja.</div>'
str += '<div align="right" class="style1">      Vsebine tega priročnika ni dovoljeno v kakršni koli obliki reproducirati, distribuirati ali uporabljati, ne v celoti in ne delno, brez pisnega dovoljenja podjetja Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Avtorske pravice za ta priročnik so last podjetja Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//spa
function spa_foot(){
str  = ''
str += '<div align="right" class="style3">El color y el aspecto pueden variar según el producto; las especificaciones están sujetas a cambios sin previo aviso para mejorar el rendimiento del producto.</div>'
str += '<div align="right" class="style1">      El contenido de este manual no se puede reproducir ni parcial ni completamente, ni distribuir ni utilizar en cualquier forma sin autorización por escrito de Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. El copyright de este manual está reservado por Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//swe
function swe_foot(){
str  = ''
str += '<div align="right" class="style3">Färgen och utseendet kan variera beroende på produkt. Specifikationerna kan ändras utan föregående meddelande.</div>'
str += '<div align="right" class="style1">      Innehållet i den här bruksanvisningen får inte reproduceras, delvis eller helt, distribueras eller användas i någon form utan skriftligt tillstånd från Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Upphovsrätten för den här bruksanvisningen tillhör Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//TC
function TC_foot(){
str  = ''
str += '<div align="right" class="style3">顏色和外觀可能因產品而異，產品規格可能由於產品效能增強而有所變更，恕不事先通知。</div>'
str += '<div align="right" class="style1">      未經 Samsung Electronics Co., Ltd. 的書面許可，嚴禁以任何方式複製、散佈或使用本手冊中的部份或全部內容。</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Samsung Electronics, Co., Ltd. 保留本手冊的著作權。</div>'
document.write( str );
}

//tur
function tur_foot(){
str  = ''
str += '<div align="right" class="style3">Renk ve görünüm ürüne bağlı olarak değişebilir ve teknik özellikler performansı arttırmak için haber verilmeksizin değiştirilebilir.</div>'
str += '<div align="right" class="style1">      Bu kılavuzun içeriği kısmen veya tamamen Samsung Electronics, Co., Ltd.’nin yazılı izni olmaksızın çoğaltılamaz, dağıtılamaz veya herhangi bir şekilde kullanılamaz.</div>'
str += '<div align="right" class="style1">      Copyright © 2009 Samsung Electronics, Co., Ltd. Bu kılavuzun telif hakkı Samsung Electronics, Co., Ltd.’ye aittir.</div>'
document.write( str );
}

//ukr
function ukr_foot(){
str  = ''
str += '<div align="right" class="style3">Колір і вигляд можуть відрізнятися залежно від виробу; технічні характеристики можуть бути змінені без попередження з метою покращення роботи виробу.</div>'
str += '<div align="right" class="style1">      Заборонено частково або повністю відтворювати, розповсюджувати або використовувати вміст цього посібника в будь-якій формі без письмового дозволу на таке компанії Samsung Electronics, Co., Ltd.</div>'
str += '<div align="right" class="style1">      Авторські права © 2009 Samsung Electronics, Co., Ltd. Авторські права на цей посібник належать компанії Samsung Electronics, Co., Ltd.</div>'
document.write( str );
}

//vie
function vie_foot(){
str  = ''
str += '<div align="right" class="style3">Màu sắc và hình dáng có thể khác nhau tùy theo sản phẩm và để cải tiến năng suất sản phẩm, các đặc tính có thể sẽ được thay đổi mà không cần báo trước.</div>'
str += '<div align="right" class="style1">      Không được in ấn, phân phát hoặc sử dụng từng phần hoặc toàn bộ nội dung trong hướng dẫn này dưới bất kỳ hình thức nào khi chưa nhận được sự chấp thuận bằng văn bản từ Công ty TNHH Điện tử Samsung.</div>'
str += '<div align="right" class="style1">      Bản quyền © 2009 Công ty TNHH Điện tử Samsung. Bản quyền của tài liệu hướng dẫn này đã được Công ty TNHH Điện tử Samsung đăng ký bảo hộ.</div>'
document.write( str );
}

//jpn
function jpn_foot(){
str  = ''
str += '<div align="right" class="style3">제품에 따라 색상 및 형상이 다를 수 있으며 규격내용은 성능개선을 위해 예고없이 변경될 수 있습니다.</div>'
str += '<div align="right" class="style1">      삼성전자(주)의 사전 허가 없이 설명서 내용의 일부 또는 전부를 무단 사용하거나 복제하는 것은 금지되어 있습니다.</div>'
str += '<div align="right" class="style1">      © 2009 삼성전자(주). 본 설명서의 저작권은 삼성전자(주)에 있습니다.</div>'
document.write( str );
}

//kor
function kor_foot(){
str  = ''
str += '<div align="right" class="style3">제품에 따라 색상 및 형상이 다를 수 있으며 규격내용은 성능개선을 위해 예고없이 변경될 수 있습니다.</div>'
str += '<div align="right" class="style1">      삼성전자(주)의 사전 허가 없이 설명서 내용의 일부 또는 전부를 무단 사용하거나 복제하는 것은 금지되어 있습니다.</div>'
str += '<div align="right" class="style1">      © 2009 삼성전자(주). 본 설명서의 저작권은 삼성전자(주)에 있습니다.</div>'
document.write( str );
}
