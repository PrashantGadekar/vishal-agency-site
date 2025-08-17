#!/bin/bash
# Conflict Prevention Script
# Run this script to check for and remove conflicting directories

echo "🔍 Checking for routing conflicts..."

# Check for conflicting directories
CONFLICTS=false

if [ -d "pages" ]; then
    echo "❌ Found conflicting 'pages/' directory"
    CONFLICTS=true
fi

if [ -d "components" ] && [ ! -d "src/components" ]; then
    echo "❌ Found conflicting root 'components/' directory"
    CONFLICTS=true
fi

if [ -d "styles" ] && [ ! -d "src/app/globals.css" ]; then
    echo "❌ Found conflicting root 'styles/' directory"
    CONFLICTS=true
fi

if [ "$CONFLICTS" = true ]; then
    echo ""
    echo "🚨 ROUTING CONFLICTS DETECTED!"
    echo ""
    echo "This will cause the error:"
    echo "'App Router and Pages Router both match path: /'"
    echo ""
    echo "To fix, run:"
    echo "npm run clean"
    echo ""
    exit 1
else
    echo "✅ No routing conflicts detected"
    echo "✅ Project structure is clean"
fi
