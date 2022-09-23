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
 // jjol ³¡





<!--
function start() {

if (flash.ver[6])
{
	// if Flash 6.0 or newer is installed, do Flash 6.0 stuff.
}
else if (flash.installed)
{
	// do older Flash stuff
	//document.write(flash.version);
}
else
{
	//alert("not installed~");
	// Flash is NOT installed.  Do something else.
	Endreload();
	launch.launch(27);
	//preload();
	//document.location.href="Index.htm";  
}
}

function Endreload() {
/*******************************************************
FLASH DETECT 3
All code by Ryan Parman and mjac, unless otherwise noted.
(c) 1997-2004 Ryan Parman and mjac
http://www.skyzyx.com
*******************************************************/

// This script will test up to the following version.
flash_versions = 20;

// Initialize variables and arrays
var flash = new Object();
flash.installed=false;
flash.version='0.0';

// Dig through Netscape-compatible plug-ins first.
if (navigator.plugins && navigator.plugins.length) {
	for (x=0; x < navigator.plugins.length; x++) {
		if (navigator.plugins[x].name.indexOf('Shockwave Flash') != -1) {
			flash.version = navigator.plugins[x].description.split('Shockwave Flash ')[1];
			flash.installed = true;
			break;
		}
	}
}

// Then, dig through ActiveX-style plug-ins afterwords
else if (window.ActiveXObject) {
	for (x = 2; x <= flash_versions; x++) {
		try {
			oFlash = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + x + "');");
			if(oFlash) {
				flash.installed = true;
				flash.version = x + '.0';
			}
		}
		catch(e) {}
	}
}

// Create sniffing variables in the following style: flash.ver[x]
// Modified by mjac
flash.ver = Array();
for(i = 4; i <= flash_versions; i++) {
	eval("flash.ver[" + i + "] = (flash.installed && parseInt(flash.version) >= " + i + ") ? true : false;");
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (flash.ver[6])
{
	location.reload();
	//document.location.href="index.htm";
	// if Flash 6.0 or newer is installed, do Flash 6.0 stuff.
}
else if (flash.installed)
{
	location.reload();
	//document.location.href="index.htm";
	// do older Flash stuff
	//document.write(flash.version);
}
else {

setTimeout('Endreload()', 3000); 
}

}

start();




















//-->