const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

const exts = ['.jpg', '.jpeg', '.png'];

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outPath = filePath.replace(ext, '.webp');
  if (fs.existsSync(outPath)) {
    console.log('Skipping (exists):', outPath);
    return;
  }
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log('Converted:', path.basename(filePath), '->', path.basename(outPath));
  } catch (err) {
    console.error('Error converting', filePath, err.message);
  }
}

async function walkAndConvert(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      await walkAndConvert(full);
    } else if (stat.isFile()) {
      const ext = path.extname(full).toLowerCase();
      if (exts.includes(ext)) {
        await convertFile(full);
      }
    }
  }
}

walkAndConvert(imagesDir).then(() => {
  console.log('Done.');
}).catch((err) => {
  console.error('Failed:', err);
});
