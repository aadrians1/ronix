YOffset=300; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="#757575";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=150; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="Tahoma";
hdrFontSize="2";
hdrFontColor="white";
hdrBGColor="#757575";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="19";
linkFontFamily="Tahoma";
linkFontSize="2";
linkBGColor="white";
linkOverBGColor="#FFFF99";
linkTarget="_top";
linkAlign="Left";
barBGColor="#757575";
barFontFamily="Tahoma";
barFontSize="2";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="메 뉴"; // <IMG> tag supported. Put exact html for an image to show.

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["사용하기"] //create header
ssmItems[1]=["표준 신호모드표", "ch03s01.htm",""]
ssmItems[2]=["표준 신호모드표", "ch03s02.htm",""]
ssmItems[3]=["제품 드라이버 설치", "ch03s03.htm",""]
ssmItems[4]=["제품 조작 버튼 설명", "ch03s04.htm",""]
ssmItems[5]=["화면메뉴 사용하기", "ch03s05.htm",""]

ssmItems[6]=["빠른 메뉴"] //create header
ssmItems[7]=["TOP", "#top", "_self"]

	//ssmItems[6]=["Language", "../../../monsetup.htm", ""]

buildMenu();