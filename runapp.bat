@echo off

REM Chạy Backend
echo Starting Backend...
cd BE
start cmd /k npm run start

REM Chờ một chút để Backend khởi động trước khi chạy Frontend
timeout /t 5 /nobreak

REM Chạy Frontend
echo Starting Frontend...
cd ../FE
start cmd /k npm run dev

REM Chờ một chút để FE khởi động và mở trình duyệt
timeout /t 10 /nobreak

REM Mở trình duyệt và truy cập vào localhost:3001
start "" "http://localhost:3001"
