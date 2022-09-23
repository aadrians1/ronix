// Header contents =============================================================//

function index_top(){
// Language, TOC Link
str  = ''
str += '<div id="toc_menu">'
str += '<a href="../../../monsetup.htm" target="_parent"><font color="#102189" style="font-size:13px; font-weight:bold;">Ngôn ngữ</font></a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../../vie/01_htm/bk01-toc.htm" target="_parent"><font color="#102189" style="font-size:13px; font-weight:bold;">Mục lục</a>'
str += '</font>'
str += '</div>'
document.write( str );

}


function index_middle1(){
// go TOC
str  = ''
str += '<ul>'
str += '<li>'
str += '<div>'
str += '<a href="../../vie/01_htm/bk01-toc.htm" target="_parent"><font style="font-size:16px; font-weight:bold;">'
str += '<script language="JavaScript">'
str += 'gradient("Xem mục lục", "0000FF", "FF0000");'
str += '</script>'
str += '</font></a>'
str += '<br><br>'
str += '</div>'
str += '</li>'
str += '</ul>'
document.write( str );
}
function index_middle2(){
// go TOC
str  = ''
str += '<font color="2e3c70" style="font-size:12px; font-weight:bold; background-color:#ffffff; padding:8px;">Cài đặt Phần mềm</font> '
document.write( str );

}

// Header Contents End =========================================================================//


