import styled from '@emotion/styled';

interface ThemeColors {
  [key: string]: string | ThemeColors;
}

interface Theme {
  colors?: ThemeColors;
}

interface ButtonProps {
  theme?: Theme;
  inlineCss?: string;
}

const ButtonContainer = styled.button<ButtonProps>`
  background: ${(props) => props.theme.colors.primary['100']};
  color: ${(props) => props.theme.colors.white['100']};
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  padding: 13px 88px;
  cursor: pointer;
  ${(props) => props.inlineCss};
  @media (max-width: 574px) {
    padding: 13px 34px;
  }
`;

export { ButtonContainer };
