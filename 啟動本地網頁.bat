@echo off
title 啟動泰拉學校本地網頁
echo ===================================================
echo   正在啟動泰拉學校地之校成果展本地網頁伺服器...
echo ===================================================
echo.
echo [*] 提示：由於 YouTube 安全防護政策（Referrer Policy 限制），
echo     直接以瀏覽器開本機檔案 (file://) 會導致影片出現「錯誤 153 播放器設定錯誤」。
echo     透過此本地網頁伺服器 (http://localhost:8080) 啟動，即可正常播放影片！
echo.
cd /d "%~dp0"
npx -y http-server dist/client -p 8080 -o
