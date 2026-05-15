import type { ImgHTMLAttributes } from 'react';
import type { ImageAsset } from '../config/assets';

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  asset: ImageAsset;
};

export function OptimizedImage({
  asset,
  loading = 'lazy',
  decoding = 'async',
  ...props
}: OptimizedImageProps) {
  return (
    <picture>
      <source srcSet={asset.src} type={asset.src.endsWith('.webp') ? 'image/webp' : undefined} />
      <img
        src={asset.fallback ?? asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading={loading}
        decoding={decoding}
        {...props}
      />
    </picture>
  );
}
