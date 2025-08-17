# Conflict Prevention Script for Windows PowerShell
# Run this script to check for and remove conflicting directories

Write-Host "🔍 Checking for routing conflicts..." -ForegroundColor Cyan

$conflicts = $false

# Check for conflicting directories
if (Test-Path "pages") {
    Write-Host "❌ Found conflicting 'pages/' directory" -ForegroundColor Red
    $conflicts = $true
}

if ((Test-Path "components") -and !(Test-Path "src/components")) {
    Write-Host "❌ Found conflicting root 'components/' directory" -ForegroundColor Red
    $conflicts = $true
}

if ((Test-Path "styles") -and !(Test-Path "src/app/globals.css")) {
    Write-Host "❌ Found conflicting root 'styles/' directory" -ForegroundColor Red
    $conflicts = $true
}

if ($conflicts) {
    Write-Host ""
    Write-Host "🚨 ROUTING CONFLICTS DETECTED!" -ForegroundColor Red
    Write-Host ""
    Write-Host "This will cause the error:" -ForegroundColor Yellow
    Write-Host "'App Router and Pages Router both match path: /'" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To fix, run:" -ForegroundColor Green
    Write-Host "npm run clean" -ForegroundColor Green
    Write-Host ""
    
    $choice = Read-Host "Would you like to clean conflicting directories now? (y/n)"
    if ($choice -eq "y" -or $choice -eq "Y") {
        Write-Host "🧹 Cleaning conflicting directories..." -ForegroundColor Yellow
        
        Remove-Item -Recurse -Force "pages" -ErrorAction SilentlyContinue
        Remove-Item -Recurse -Force "components" -ErrorAction SilentlyContinue  
        Remove-Item -Recurse -Force "styles" -ErrorAction SilentlyContinue
        Remove-Item -Recurse -Force ".next" -ErrorAction SilentlyContinue
        
        Write-Host "✅ Conflicts resolved!" -ForegroundColor Green
        Write-Host "You can now run: npm run dev" -ForegroundColor Green
    }
    
    exit 1
} else {
    Write-Host "✅ No routing conflicts detected" -ForegroundColor Green
    Write-Host "✅ Project structure is clean" -ForegroundColor Green
}
