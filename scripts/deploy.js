const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, 'dist');
const graderDistDir = path.join(rootDir, 'apps', 'grader', 'dist');

if (fs.existsSync(distDir)) fs.rmSync(distDir, { recursive: true });
fs.mkdirSync(distDir);

fs.cpSync(graderDistDir, path.join(distDir, 'grader'), { recursive: true });
