#!/bin/bash

# VHLabs Production Deployment Script
# Run this on a fresh Ubuntu DigitalOcean droplet

set -e

echo "🚀 Starting VHLabs production deployment..."

# Update system
echo "📦 Updating system packages..."
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js
echo "📦 Installing Node.js 20.x..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
sudo apt-get install -y nginx

# Clone repository
echo "📦 Cloning repository..."
cd /home
sudo git clone https://github.com/chatgptiv4/vhlabs-website.git
cd vhlabs-website

# Set permissions
sudo chown -R $USER:$USER /home/vhlabs-website

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file
echo "⚙️  Creating .env file..."
cp .env.example .env.local
echo ""
echo "⚠️  IMPORTANT: Edit .env.local with your configuration:"
echo "   - MongoDB URI"
echo "   - SMTP settings"
echo "   - API keys"
echo ""
read -p "Press enter once you've updated .env.local..."

# Build project
echo "🔨 Building Next.js project..."
npm run build

# Start with PM2
echo "🚀 Starting application with PM2..."
pm2 start ecosystem.config.json
pm2 startup
pm2 save

# Configure Nginx
echo "⚙️  Configuring Nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl restart nginx

# Install SSL with Let's Encrypt
echo "🔒 Setting up SSL with Let's Encrypt..."
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot certonly --nginx -d vhlabs.dev -d www.vhlabs.dev

# Reload Nginx with SSL
sudo systemctl reload nginx

# Create log directory
echo "📁 Creating log directory..."
mkdir -p /home/vhlabs-website/logs

# Enable firewall
echo "🔐 Configuring firewall..."
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site is live at: https://vhlabs.dev"
echo "📊 Monitor with: pm2 monit"
echo "📜 View logs with: pm2 logs vhlabs"
echo ""
