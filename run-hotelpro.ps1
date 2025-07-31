# نظام إدارة الفندق - HotelPro Desktop
Write-Host "Starting HotelPro Management System..." -ForegroundColor Green
Write-Host "نظام إدارة الفندق - بدء التشغيل..." -ForegroundColor Blue

Set-Location $PSScriptRoot
Start-Process "http://localhost:5000"
npm run dev

Read-Host "Press Enter to exit..."