@echo off
title نظام إدارة الفندق - HotelPro
echo Starting HotelPro Management System...
echo نظام إدارة الفندق - بدء التشغيل...

cd /d "%~dp0"
start "" "http://localhost:5000"
npm run dev

pause