@echo off
setlocal
title Bhumiputram Website

cd /d "%~dp0frontend"

where yarn >nul 2>&1
if errorlevel 1 (
    echo Yarn was not found. Please install Node.js from https://nodejs.org/ and run this file again.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installing website packages for the first time...
    call yarn install
    if errorlevel 1 (
        echo Installation failed.
        pause
        exit /b 1
    )
)

echo Starting Bhumiputram website...
echo It will open at http://localhost:3000
call yarn start
