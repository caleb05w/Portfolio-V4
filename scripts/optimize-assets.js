#!/usr/bin/env node

/**
 * Asset Optimization Script for Mobile Performance
 * 
 * This script optimizes images and videos for mobile performance:
 * - Converts large GIFs to MP4 videos
 * - Compresses images to WebP/AVIF formats
 * - Generates responsive image sizes
 * - Creates optimized thumbnails
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const VIDEOS_DIR = path.join(PUBLIC_DIR, 'videos');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

// Create optimized directory
if (!fs.existsSync(OPTIMIZED_DIR)) {
    fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Large files that need immediate optimization
const CRITICAL_FILES = [
    '1.gif',           // 76MB
    'Axis2.gif',       // 39MB
    'Axis14.png',      // 27MB
    'sunset.gif',      // 28MB
];

// Image optimization function
function optimizeImage(inputPath, outputDir) {
    const filename = path.basename(inputPath, path.extname(inputPath));

    try {
        // Convert to WebP
        execSync(`cwebp -q 80 -m 6 "${inputPath}" -o "${outputDir}/${filename}.webp"`, { stdio: 'inherit' });

        // Convert to AVIF (if supported)
        try {
            execSync(`cavif -q 80 "${inputPath}" -o "${outputDir}/${filename}.avif"`, { stdio: 'inherit' });
        } catch (e) {
            console.log(`AVIF conversion not available for ${filename}`);
        }

        // Create responsive sizes
        const sizes = [640, 750, 828, 1080, 1200, 1920];
        sizes.forEach(size => {
            execSync(`cwebp -q 80 -resize ${size} 0 "${inputPath}" -o "${outputDir}/${filename}-${size}.webp"`, { stdio: 'inherit' });
        });

        console.log(`✅ Optimized ${filename}`);
    } catch (error) {
        console.error(`❌ Failed to optimize ${filename}:`, error.message);
    }
}

// Video optimization function
function optimizeVideo(inputPath, outputDir) {
    const filename = path.basename(inputPath, path.extname(inputPath));

    try {
        // Convert GIF to MP4 with high compression
        execSync(`ffmpeg -i "${inputPath}" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart "${outputDir}/${filename}.mp4"`, { stdio: 'inherit' });

        // Create WebM version for better compression
        execSync(`ffmpeg -i "${inputPath}" -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus -movflags +faststart "${outputDir}/${filename}.webm"`, { stdio: 'inherit' });

        console.log(`✅ Optimized video ${filename}`);
    } catch (error) {
        console.error(`❌ Failed to optimize video ${filename}:`, error.message);
    }
}

// Main optimization function
function optimizeAssets() {
    console.log('🚀 Starting asset optimization...\n');

    // Optimize critical large files first
    console.log('📁 Processing critical large files...');
    CRITICAL_FILES.forEach(filename => {
        const inputPath = path.join(IMAGES_DIR, filename);
        if (fs.existsSync(inputPath)) {
            const stats = fs.statSync(inputPath);
            const sizeMB = (stats.size / (1024 * 1024)).toFixed(1);
            console.log(`\n📄 Processing ${filename} (${sizeMB}MB)`);

            if (filename.endsWith('.gif')) {
                optimizeVideo(inputPath, OPTIMIZED_DIR);
            } else {
                optimizeImage(inputPath, OPTIMIZED_DIR);
            }
        }
    });

    // Process all other images
    console.log('\n📁 Processing remaining images...');
    const imageFiles = fs.readdirSync(IMAGES_DIR).filter(file =>
        /\.(png|jpg|jpeg|gif)$/i.test(file) && !CRITICAL_FILES.includes(file)
    );

    imageFiles.forEach(filename => {
        const inputPath = path.join(IMAGES_DIR, filename);
        const stats = fs.statSync(inputPath);
        const sizeMB = (stats.size / (1024 * 1024)).toFixed(1);

        // Only optimize files larger than 1MB
        if (stats.size > 1024 * 1024) {
            console.log(`📄 Processing ${filename} (${sizeMB}MB)`);
            optimizeImage(inputPath, OPTIMIZED_DIR);
        }
    });

    console.log('\n✅ Asset optimization complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Update your components to use optimized assets');
    console.log('2. Implement responsive image loading');
    console.log('3. Add preload hints for critical assets');
    console.log('4. Test on mobile devices');
}

// Check if required tools are installed
function checkDependencies() {
    const tools = ['cwebp', 'ffmpeg'];
    const missing = [];

    tools.forEach(tool => {
        try {
            execSync(`which ${tool}`, { stdio: 'ignore' });
        } catch (e) {
            missing.push(tool);
        }
    });

    if (missing.length > 0) {
        console.error('❌ Missing required tools:', missing.join(', '));
        console.log('\n📦 Install missing tools:');
        console.log('macOS: brew install webp ffmpeg');
        console.log('Ubuntu: sudo apt install webp ffmpeg');
        console.log('Windows: Download from official websites');
        process.exit(1);
    }
}

// Run optimization
if (require.main === module) {
    checkDependencies();
    optimizeAssets();
}

module.exports = { optimizeAssets, optimizeImage, optimizeVideo };
