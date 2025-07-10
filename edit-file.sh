#!/bin/bash

# Script to open files in plain text mode
echo "📝 Opening file in plain text mode..."

# Check if file exists
if [ -f "$1" ]; then
    # Open in TextEdit with plain text mode
    open -a "TextEdit" "$1"
    echo "✅ File opened: $1"
    echo "💡 Tip: If you see RTFD conversion prompt, click 'Don't Convert'"
else
    echo "❌ File not found: $1"
    echo "Available files:"
    ls -la *.html *.css *.js *.md
fi 