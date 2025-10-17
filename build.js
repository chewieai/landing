const fs = require('fs');
const path = require('path');

// Clean and create public directory
if (fs.existsSync('public')) {
  fs.rmSync('public', { recursive: true });
}
fs.mkdirSync('public');

// Files to copy
const files = [
  'index.html',
  'privacy-policy.html',
  'preview-social.html',
  'logo.png',
  'og-image.png'
];

// Copy files
files.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('public', file));
    console.log(`Copied ${file}`);
  }
});

// Copy favicons directory
if (fs.existsSync('favicons')) {
  fs.cpSync('favicons', path.join('public', 'favicons'), { recursive: true });
  console.log('Copied favicons directory');
}

console.log('Build completed successfully!');
