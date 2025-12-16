#!/bin/bash

# Script to push Kerzie AI website to GitHub
# Repository: https://github.com/wadekerzie/KerzieAIwebsite.git

cd "/Users/wadekerzie/Library/Mobile Documents/com~apple~CloudDocs/Kerzie Consulting/Zapier/Github/Kerzie-AI-official"

echo "🚀 Setting up Git repository..."

# Initialize git if not already done
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add remote (or update if exists)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/wadekerzie/KerzieAIwebsite.git
echo "✅ Remote repository configured"

# Add all files
git add .
echo "✅ Files staged"

# Commit
git commit -m "Initial commit: Electric Blue color scheme - modern, welcoming theme for young hustlers

- Updated from Retro-futurist Art Deco (red/cream) to Electric Blue + Warm Neutrals
- Primary color: Electric Blue (#3B82F6)
- Secondary color: Cyan (#06B6D4)
- Updated logo SVG to use Electric Blue
- All UI elements, gradients, and accents updated to match new scheme"
echo "✅ Changes committed"

# Set main branch
git branch -M main 2>/dev/null || git checkout -b main 2>/dev/null
echo "✅ Branch set to main"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code should now be at: https://github.com/wadekerzie/KerzieAIwebsite"

