import { SkeletonTheme } from 'react-loading-skeleton';
import React, { CSSProperties } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  SkeletonContainer,
  SkeletonInner,
} from './style';

interface SkeletonLoadingProps {
  className?: string | null;
  style?: CSSProperties;
  inlineCss?: string | null;
}

function SkeletonLoading({ className = null, style = {}, inlineCss = null }: SkeletonLoadingProps) {
  return (
    <SkeletonContainer>
      <SkeletonTheme>
        <SkeletonInner
          className={className}
          count={1}
          style={{
            ...style,
          }}
          inlineCss={inlineCss}
        />
      </SkeletonTheme>
    </SkeletonContainer>
  );
}

export default SkeletonLoading;
