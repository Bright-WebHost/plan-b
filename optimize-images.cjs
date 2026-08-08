const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images', 'optimized');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const basename = path.basename(file, path.extname(file));
        const outputFile = path.join(outputDir, basename + '.webp');
        
        sharp(path.join(inputDir, file))
            .resize({ width: 800, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputFile)
            .then(info => console.log(`Optimized: ${file} -> ${basename}.webp`))
            .catch(err => console.error(`Error optimizing ${file}:`, err));
    }
});
