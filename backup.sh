#!/bin/bash

# Backup script for architectural portfolio
echo "🔄 Creating backup of your portfolio..."

# Create timestamp
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="../architectural-portfolio-backup-$TIMESTAMP"

# Copy all files to backup directory
cp -r . "$BACKUP_DIR"

echo "✅ Backup created: $BACKUP_DIR"
echo "📁 Your files are safely backed up!"
echo ""
echo "To restore from backup:"
echo "cp -r $BACKUP_DIR/* ." 