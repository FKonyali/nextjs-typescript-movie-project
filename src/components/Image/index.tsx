import React, { useEffect, useState, HTMLProps } from 'react';
// components
import SkeletonLoading from 'components/SkeletonLoading';
// assets
import { IconGallery } from 'components/Icon';
// styles
import { ImageErrorContainer, ImageContainer } from './style';

interface ImageProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  inlineCss?: string | null;
}

function Image({ src = '', alt = '', aspectRatio = '62.5%', inlineCss = null, ...props }: ImageProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setImageError(false);
  }, [src]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.setAttribute('style', 'opacity: 1');
    }
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    src && (
      <ImageContainer aspectRatio={aspectRatio} inlineCss={inlineCss}>
        {imageError ? (
          <ImageErrorContainer>
            <IconGallery />
          </ImageErrorContainer>
        ) : (
          <>
            {imageLoading && (
              <SkeletonLoading
                inlineCss={`
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                `}
              />
            )}
            <img
              src={src}
              alt={alt}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ opacity: '0' }}
              loading="lazy"
              {...props}
            />
          </>
        )}
      </ImageContainer>
    )
  );
}

export default Image;
