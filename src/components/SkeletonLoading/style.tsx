import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';

interface StyledProps {
  inlineCss?: string | null;
}

const SkeletonContainer = styled.div<StyledProps>`
  [aria-live] {
    display: flex;
  }
  br {
    display: none;
  }
`;

const SkeletonInner = styled(Skeleton)<StyledProps>`
  height: 42px;
  border-radius: 16px;
  margin-bottom: 12px;
  ${(props) => props.inlineCss}
`;

export {
  SkeletonContainer,
  SkeletonInner,
};
