@echo off
title Windows Genuine Advantage Validation Crack Installer by Wocarson
if "%1"=="/u" GOTO uninstall
if "%1"=="/c" GOTO cleanup
cls
echo Windows Genuine Advantage Validation v1.8.32.1 Crack by Wocarson
echo ================================================================
echo.
pause
echo.
echo Killing wgatray.exe process...
taskkill /IM wgatray.exe
echo.
echo Deleting old backup files...
del %systemroot%\system32\legitcheckcontrol.dll.bak
del %systemroot%\system32\wgatray.exe.bak
del %systemroot%\system32\wgalogon.dll.bak
echo.
echo Deleting old cracked files...
del %systemroot%\system32\legitcheckcontrol.dll.crk
del %systemroot%\system32\wgatray.exe.crk
del %systemroot%\system32\wgalogon.dll.crk
echo.
echo Creating backup files...
ren %systemroot%\system32\legitcheckcontrol.dll legitcheckcontrol.dll.bak
ren %systemroot%\system32\wgatray.exe wgatray.exe.bak
ren %systemroot%\system32\wgalogon.dll wgalogon.dll.bak
echo.
echo Copying new cracked files...
copy LegitCheckControl.dll %systemroot%\system32\ /Y
copy WgaLogon.dll %systemroot%\system32\ /Y
copy WgaTray.exe %systemroot%\system32\ /Y
echo.
echo Done! Please reboot your computer to complete installation.
echo.
pause
exit

:uninstall
cls
echo Windows Genuine Advantage Validation v1.8.32.1 Crack Uninstaller
echo ================================================================
echo.
pause
echo.
echo Killing wgatray.exe process...
taskkill /IM wgatray.exe
echo.
echo Renaming cracked files...
ren %systemroot%\system32\legitcheckcontrol.dll legitcheckcontrol.dll.crk
ren %systemroot%\system32\wgatray.exe wgatray.exe.crk
ren %systemroot%\system32\wgalogon.dll wgalogon.dll.crk
echo.
echo Restoring backup files...
ren %systemroot%\system32\legitcheckcontrol.dll.bak legitcheckcontrol.dll
ren %systemroot%\system32\wgatray.exe.bak wgatray.exe
ren %systemroot%\system32\wgalogon.dll.bak wgalogon.dll
echo.
echo Done! Please reboot your computer to complete uninstallation.
echo After reboot run "installer.bat /c" to cleanup old files.
echo.
pause
exit

:cleanup
cls
echo Windows Genuine Advantage Validation v1.8.32.1 Crack Cleanup
echo ============================================================
echo.
pause
echo.
echo Deleting old cracked files...
del %systemroot%\system32\legitcheckcontrol.dll.crk
del %systemroot%\system32\wgatray.exe.crk
del %systemroot%\system32\wgalogon.dll.crk
echo.
echo Done!
echo.
pause
exit