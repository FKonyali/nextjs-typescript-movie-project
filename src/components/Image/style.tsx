import styled from '@emotion/styled';

interface ThemeColors {
  [key: string]: string | ThemeColors;
}

interface Theme {
  colors?: {
    dark: ThemeColors;
  };
}

interface StyledProps {
  theme?: Theme;
  aspectRatio?: string;
  inlineCss?: string | null;
}

const ImageErrorContainer = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme?.colors.dark['10']};
  border-radius: 5px;
  svg {
    max-width: 48px;
    max-height: 48px;
  }
`;

const ImageContainer = styled.div<StyledProps>`
  position: relative;
  padding-top: ${(props) => props.aspectRatio};
  border-radius: 5px;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${(props) => props.inlineCss};
`;

export { ImageErrorContainer, ImageContainer };
