#!/bin/bash

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

# Get Node.js version
NODE_VERSION=$(node --version)
print_status "Using Node.js version: $NODE_VERSION"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Clean previous build
print_status "Cleaning previous build..."
rm -rf .next
rm -rf out
print_success "Clean completed"

# Install dependencies
print_status "Installing dependencies..."
npm install
print_success "Dependencies installed"

# Run linting
print_status "Running linting..."
if npm run lint; then
    print_success "Linting passed"
else
    print_warning "Linting failed, but continuing with deployment..."
fi

# Build the application
print_status "Building the application..."
if npm run build; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Optional: Export static files (if needed for static hosting)
# Uncomment the following lines if you want to export static files
# print_status "Exporting static files..."
# npm run export
# print_success "Static export completed"

# Check build output
if [ -d ".next" ]; then
    print_success "Build output verified"
else
    print_error "Build output not found"
    exit 1
fi

# Optional: Run tests (if you have them)
# Uncomment the following lines if you have tests
# print_status "Running tests..."
# if npm test; then
#     print_success "Tests passed"
# else
#     print_error "Tests failed"
#     exit 1
# fi

# Optional: Deploy to Vercel (if using Vercel)
# Uncomment the following lines if deploying to Vercel
print_status "Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    vercel --prod
    print_success "Deployed to Vercel successfully"
else
    print_warning "Vercel CLI not found. Please install it with: npm i -g vercel"
fi

# Optional: Deploy to Netlify (if using Netlify)
# Uncomment the following lines if deploying to Netlify
# print_status "Deploying to Netlify..."
# if command -v netlify &> /dev/null; then
#     netlify deploy --prod --dir=.next
#     print_success "Deployed to Netlify successfully"
# else
#     print_warning "Netlify CLI not found. Please install it with: npm i -g netlify-cli"
# fi

# Optional: Deploy to GitHub Pages (if using GitHub Pages)
# Uncomment the following lines if deploying to GitHub Pages
# print_status "Deploying to GitHub Pages..."
# if [ -d "out" ]; then
#     git add out
#     git commit -m "Deploy to GitHub Pages"
#     git subtree push --prefix out origin gh-pages
#     print_success "Deployed to GitHub Pages successfully"
# else
#     print_warning "Static export not found. Run 'npm run export' first."
# fi

# Optional: Deploy to custom server
# Uncomment and modify the following lines for custom server deployment
# print_status "Deploying to custom server..."
# rsync -avz --delete .next/ user@your-server:/path/to/your/app/
# print_success "Deployed to custom server successfully"

print_success "🎉 Deployment process completed!"
print_status "Your application is ready to be deployed to your preferred platform."
print_status "Uncomment the relevant deployment section in this script for your hosting provider."

# Show next steps
echo ""
echo "📋 Next Steps:"
echo "1. Choose your hosting platform (Vercel, Netlify, GitHub Pages, etc.)"
echo "2. Uncomment the relevant deployment section in this script"
echo "3. Configure your hosting platform settings"
echo "4. Run this script again to deploy"
echo ""
echo "🔗 Popular hosting options:"
echo "- Vercel: https://vercel.com (recommended for Next.js)"
echo "- Netlify: https://netlify.com"
echo "- GitHub Pages: https://pages.github.com"
echo "- AWS Amplify: https://aws.amazon.com/amplify/" 