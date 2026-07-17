import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out — no Node server required.
  output: 'export',

  // A static export has no image optimization server. Instead of shipping images
  // as-is (unoptimized), next-image-export-optimizer runs sharp after the export
  // (see the build script) to generate resized WebP variants + srcset. The custom
  // loader points <ExportedImage> at those pre-generated files.
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  transpilePackages: ['next-image-export-optimizer'],

  env: {
    // All <ExportedImage> sources live under here; the optimizer walks it.
    nextImageExportOptimizer_imageFolderPath: 'public/assets/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },

  // Emit articles/<slug>/index.html rather than articles/<slug>.html so plain
  // static hosts resolve the routes without rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
