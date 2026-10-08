@echo off
title Upload ke GitHub - Aplikasi Pembelajaran Ang
echo ======================================================================
echo   MENGUNGGAH APLIKASI PEMBELAJARAN KE REPOSITORI GITHUB
echo   Target Repo: origin main (GitHub)
echo ======================================================================
echo.

cd /d "%~dp0"

echo [1/3] Menyiapkan berkas terbaru...
git add .
git commit -m "feat: Progressive Dictation Studio (EVC ESL LibreTexts 2023) & Computer Architecture Fox Ch 1"

echo.
echo [2/3] Memastikan cabang utama adalah 'main'...
git branch -M main

echo.
echo [3/3] Mengunggah (push) ke GitHub...
echo Jendela browser atau login GitHub mungkin akan muncul untuk konfirmasi akunmu.
echo Mohon tunggu sebentar...
echo.

git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ======================================================================
    echo   BERHASIL! Seluruh aplikasi telah terunggah ke akun GitHub kamu!
    echo ======================================================================
) else (
    echo ======================================================================
    echo   CATATAN: Jika kamu belum login GitHub di komputer ini,
    echo   silakan login terlebih dahulu via PowerShell dengan mengetik:
    echo     gh auth login
    echo   Lalu jalankan file ini kembali.
    echo ======================================================================
)

echo.
pause
