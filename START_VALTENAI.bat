@echo off
title Valten AI — Dev Server
color 1F

echo.
echo  ========================================
echo   VALTEN AI — Starting Dev Server
echo  ========================================
echo.

:: Check if Node is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo  ERROR: Node.js is not installed.
    echo.
    echo  Please install it from: https://nodejs.org
    echo  Then double-click this file again.
    echo.
    pause
    exit /b
)

echo  [1/3] Installing pnpm...
call npm install -g pnpm --silent
echo  Done.
echo.

echo  [2/3] Installing project dependencies...
call pnpm install
echo  Done.
echo.

echo  [3/3] Starting dev server...
echo.
echo  ========================================
echo   Opening at: http://localhost:5173
echo  ========================================
echo.

:: Open browser after 3 second delay
start "" cmd /c "timeout /t 3 >nul && start http://localhost:5173"

:: Start the dev server
call pnpm dev

pause
