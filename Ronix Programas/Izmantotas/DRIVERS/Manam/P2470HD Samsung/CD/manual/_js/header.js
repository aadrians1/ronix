loc = location.href.split("/"); 
loc.reverse();  
var answer;  
answer = loc[2]; 





// Header contents =============================================================//

str  = ''


str += '<table width="100%" border="0" cellpadding="0" cellspacing="0">'
  str += '<tr>'
    str += '<td width="935" height="48" colspan="6" valign="top" style="background-attachment: fixed; background: url(../../_IMG/Common/all/best_top.jpg); background-repeat: no-repeat; background-position: top">'



	str += '<table width="935" height="48" border="0" cellpadding="0" cellspacing="0">'
      str += '<tr>'
        str += '<td width="104" valign="middle" align="right"></td>'
		
    	str += '<td width="461" align="left" valign="middle">'	
		
////////////////////////////  main top text here //////////////////////////////		
		
        str += '<script language="JavaScript">'+answer+'_top();</script>'

////////////////////////////  main top text here //////////////////////////////	

		str += '</td>'	
		
		str += '<td width="330" align="right" valign="middle"><b><font color="#102189" style="font-size:18px;">SyncMaster </font></b>&nbsp;&nbsp;</td>	'	
// <font color="green" style="font-size:18px;">'+model1+' '+model2+'</font>		
      str += '</tr>'
    str += '</table>'




	str += '</td>'
  str += '</tr>'




		str += '<tr>'
        str += '<td colspan="6" height="40" align="center" valign="middle" style="background-color:#eeeeee; border-top:1px; 	border-top-color:#999999; 	border-top-style:solid; border-bottom:1px; 	border-bottom-color:#999999; 	border-bottom-style:solid;">'
		

		
		
////////////////////////////  main TOC here //////////////////////////////		
		
        str += '<script language="JavaScript">'+answer+'();</script>'

////////////////////////////  main TOC here //////////////////////////////	
	
	
	
		str += '</td>'      
        str += '</tr>'		


str += '</table>'


str += '<div id="divMenu" style="position:absolute; left:950px; top:300px; width:; height:; z-index:1; width: 96px;"> '
str += '  <table width="109" cellpadding="0" cellspacing="0" border="0">'
str += '    <tr> '
str += '      <td><a href="#top"><img src="../../_IMG/Common/icon/top0.jpg" border="0"></a></td>'
str += '    </tr>'
str += '  </table>'
str += '</div>'


document.write( str );

// Header Contents End =========================================================================//

<!-- Create Menu Settings: (Menu ID, Is Vertical, Show Timer, Hide Timer, On Click ('all' or 'lev2'), Right to Left, Horizontal Subs, Flush Left, Flush Top) -->
qm_create(0,false,0,250,false,false,false,false,false);

<!-- This script references optionally loads the MyCSSMenu visual interface, to run the menu stand alone remove the script.-->
if (window.name=="qm_launch_visual"){document.write('<scr'+'ipt type="text/javascript" src="http://www.mycssmenu.com/qmv6/qm_visual.js"></scr'+'ipt>')}


function drive() { 
var myWin1 = window.open("../../_index/"+answer+"/Drive.htm",'pbml_win','toolbar=no,location=no,directories=no, status=no,menubar=no,resizable=no,scrolling=yes,width=380,height=170,top=300,left=300 '); 
}