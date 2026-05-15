import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const rootDir = path.resolve(import.meta.dirname, '..');

const assets = [
  {
    source: 'public/Profile.png',
    outputs: [
      { path: 'public/images/profile/profile-card.webp', width: 900, format: 'webp', quality: 82 },
      { path: 'public/images/profile/profile-og.jpg', width: 1200, height: 1200, fit: 'cover', format: 'jpeg', quality: 84 },
      { path: 'public/images/profile/icon-32.png', width: 32, height: 32, fit: 'cover', format: 'png' },
      { path: 'public/images/profile/icon-180.png', width: 180, height: 180, fit: 'cover', format: 'png' },
      { path: 'public/images/profile/icon-192.png', width: 192, height: 192, fit: 'cover', format: 'png' },
      { path: 'public/images/profile/icon-512.png', width: 512, height: 512, fit: 'cover', format: 'png' },
    ],
  },
  {
    source: 'public/Disposiitvo.png',
    outputs: [
      { path: 'public/images/projects/virtual-assistant-device.webp', width: 1280, format: 'webp', quality: 82 },
    ],
  },
  {
    source: 'public/SistemaFV.png',
    outputs: [
      { path: 'public/images/projects/photovoltaic-system.webp', width: 1280, format: 'webp', quality: 82 },
    ],
  },
  {
    source: 'public/General_arch.png',
    outputs: [
      { path: 'public/images/projects/virtual-assistant-architecture.webp', width: 1280, format: 'webp', quality: 86 },
    ],
  },
  {
    source: 'public/IA_Arq.png',
    outputs: [
      { path: 'public/images/projects/virtual-assistant-ai-flow.webp', width: 1280, format: 'webp', quality: 86 },
    ],
  },
  {
    source: 'public/iot_arq.png',
    outputs: [
      { path: 'public/images/projects/virtual-assistant-iot-flow.webp', width: 1280, format: 'webp', quality: 86 },
    ],
  },
  {
    source: 'public/images/projects/Diagrama electrico.png',
    outputs: [
      { path: 'public/images/projects/residential-electrical-diagram.webp', width: 1600, format: 'webp', quality: 84 },
    ],
  },
  {
    source: 'public/images/projects/despliegue.png',
    outputs: [
      { path: 'public/images/projects/residential-deployment.webp', width: 1280, format: 'webp', quality: 84 },
    ],
  },
  {
    source: 'public/images/projects/aplicacion1.png',
    outputs: [
      { path: 'public/images/projects/residential-app-dashboard.webp', width: 900, format: 'webp', quality: 84 },
    ],
  },
  {
    source: 'public/images/projects/aplicacion2.drawio.png',
    outputs: [
      { path: 'public/images/projects/residential-app-control.webp', width: 1280, format: 'webp', quality: 84 },
    ],
  },
  {
    source: 'public/images/projects/señal original.png',
    outputs: [
      { path: 'public/images/projects/eeg-original-signal.webp', width: 1600, format: 'webp', quality: 88 },
    ],
  },
  {
    source: 'public/images/projects/comparacion_filtros.png',
    outputs: [
      { path: 'public/images/projects/eeg-filter-comparison.webp', width: 1280, format: 'webp', quality: 88 },
    ],
  },
];

async function optimizeImage(source, output) {
  const sourcePath = path.join(rootDir, source);
  const outputPath = path.join(rootDir, output.path);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  let pipeline = sharp(sourcePath).rotate();

  if (output.width || output.height) {
    pipeline = pipeline.resize({
      width: output.width,
      height: output.height,
      fit: output.fit ?? 'inside',
      withoutEnlargement: true,
    });
  }

  if (output.format === 'webp') {
    pipeline = pipeline.webp({ quality: output.quality ?? 82 });
  } else if (output.format === 'jpeg') {
    pipeline = pipeline.jpeg({ quality: output.quality ?? 84, mozjpeg: true });
  } else if (output.format === 'png') {
    pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
  }

  await pipeline.toFile(outputPath);
  const { size } = await fs.stat(outputPath);
  console.log(`${output.path} ${(size / 1024).toFixed(1)} KB`);
}

for (const asset of assets) {
  for (const output of asset.outputs) {
    await optimizeImage(asset.source, output);
  }
}
