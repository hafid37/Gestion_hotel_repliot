#!/bin/bash

echo "🏗️  بناء تطبيق سطح المكتب لنظام إدارة الفندق..."

# Build the web application
echo "📦 بناء التطبيق الويب..."
npm run build

# Build Electron app for Windows
echo "🖥️  بناء تطبيق ويندوز..."
npx electron-builder --win --config electron-builder.json

echo "✅ تم بناء التطبيق بنجاح!"
echo "📁 ستجد التطبيق في مجلد: release/"