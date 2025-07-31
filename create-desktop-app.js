import fs from 'fs';
import path from 'path';

// Create a simplified desktop application
console.log('🏗️  إنشاء تطبيق سطح المكتب...');

// Create a batch file to run the application
const batchContent = `@echo off
title نظام إدارة الفندق - HotelPro
echo Starting HotelPro Management System...
echo نظام إدارة الفندق - بدء التشغيل...

cd /d "%~dp0"
start "" "http://localhost:5000"
npm run dev

pause`;

fs.writeFileSync('run-hotelpro.bat', batchContent);

// Create a PowerShell version
const powershellContent = `# نظام إدارة الفندق - HotelPro Desktop
Write-Host "Starting HotelPro Management System..." -ForegroundColor Green
Write-Host "نظام إدارة الفندق - بدء التشغيل..." -ForegroundColor Blue

Set-Location $PSScriptRoot
Start-Process "http://localhost:5000"
npm run dev

Read-Host "Press Enter to exit..."`;

fs.writeFileSync('run-hotelpro.ps1', powershellContent);

// Create an HTML launcher
const htmlContent = `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نظام إدارة الفندق - HotelPro</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 50px;
            margin: 0;
            direction: rtl;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        h1 { font-size: 2.5em; margin-bottom: 20px; }
        p { font-size: 1.2em; margin-bottom: 30px; }
        .button {
            display: inline-block;
            padding: 15px 30px;
            background: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 1.1em;
            margin: 10px;
            transition: background 0.3s;
        }
        .button:hover { background: #45a049; }
        .instructions {
            background: rgba(255,255,255,0.2);
            padding: 20px;
            margin-top: 30px;
            border-radius: 10px;
            text-align: right;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏨 نظام إدارة الفندق</h1>
        <p>مرحباً بك في نظام إدارة الفندق المتطور</p>
        
        <a href="#" onclick="startApp()" class="button">🚀 تشغيل التطبيق</a>
        <a href="http://localhost:5000" target="_blank" class="button">🌐 فتح في المتصفح</a>
        
        <div class="instructions">
            <h3>📋 تعليمات التشغيل:</h3>
            <ol>
                <li>تأكد من تثبيت Node.js على جهازك</li>
                <li>اضغط على "تشغيل التطبيق" لبدء الخادم</li>
                <li>انتظر حتى يتم تحميل التطبيق في المتصفح</li>
                <li>ابدأ في إدارة فندقك!</li>
            </ol>
        </div>
    </div>

    <script>
        function startApp() {
            alert('سيتم تشغيل التطبيق في نافذة طرفية جديدة...\\nيرجى انتظار تحميل الخادم ثم سيفتح المتصفح تلقائياً');
            // This would normally launch the batch file
            window.open('http://localhost:5000', '_blank');
        }
    </script>
</body>
</html>`;

fs.writeFileSync('desktop-launcher.html', htmlContent);

console.log('✅ تم إنشاء ملفات تطبيق سطح المكتب بنجاح!');
console.log('📁 الملفات المنشأة:');
console.log('   - run-hotelpro.bat (ويندوز)');
console.log('   - run-hotelpro.ps1 (PowerShell)');
console.log('   - desktop-launcher.html (متصفح)');