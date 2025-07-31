@echo off
echo Building HotelPro Desktop Application...

echo Building web application...
call npm run build

echo Building Windows executable...
call npx electron-builder --win --config electron-builder.json

echo Build completed successfully!
echo You can find the application in the 'release' folder.
pause