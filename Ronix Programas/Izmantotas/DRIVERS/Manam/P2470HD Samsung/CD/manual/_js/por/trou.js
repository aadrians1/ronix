﻿YOffset=300; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="#757575";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=170; // Must be a multiple of 10! no quotes!!
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
barText="MENU"; // <IMG> tag supported. Put exact html for an image to show.


// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Resolução de problemas"] //create header
ssmItems[1]=["Verificação da função Teste automático", "ch06s01.htm", ""]
ssmItems[2]=["Lista de verificação", "ch06s02.htm",""]
ssmItems[3]=["P & R", "ch06s03.htm", ""]
ssmItems[4]=["Menu Rápido"] //create header	
ssmItems[5]=["Cima", "#top", "_self"]
ssmItems[6]=["Principal", "index.htm", ""] //create two column row
ssmItems[7]=["Idioma", "../../../monsetup.htm", ""]

buildMenu();