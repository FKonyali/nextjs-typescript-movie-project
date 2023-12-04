import styled from '@emotion/styled';


interface ThemeColors {
  [key: string]: string | ThemeColors;
}

interface Theme {
  colors?: ThemeColors;
}

interface StyledProps {
  theme?: Theme;
}

const HeaderContainer = styled.div<StyledProps>`
  background: url(${(props) => require('assets/img/header-bg.png').default.src}) center;
  position: relative;
  margin-bottom: 30px;
  background-size: 100%;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.13);
  }
`;

const HeaderInner = styled.div<StyledProps>`
  position: relative;
  width: 1250px;
  max-width: 100%;
  padding: 50px 21px;
  margin: 0 auto;

  @media (max-width: 600px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 28px 10px;
  }
`;

const HeaderTitle = styled.h1<StyledProps>`
  font-weight: 700;
  font-size: 2.25rem;
  color: ${(props) => props.theme.colors.dark[100]};
  margin-bottom: 2.375rem;
  max-width: 100%;
  width: 510px;

  @media (max-width: 850px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
    width: 400px;
  }

  @media (max-width: 660px) {
    width: 300px;
  }

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const HeaderDescription = styled.div<StyledProps>`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.dark[100]};
  max-width: 100%;
  width: 510px;

  @media (max-width: 850px) {
    font-size: 1rem;
    width: 400px;
  }

  @media (max-width: 660px) {
    width: 300px;
  }

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const HeaderParagraph = styled.p``;

const HeaderImage = styled.div<StyledProps>`
  width: 303px;
  position: absolute;
  right: 21px;
  bottom: 0;

  @media (max-width: 850px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    position: relative;
    width: 171px;
    max-width: 100%;
  }
`;

export {
  HeaderContainer,
  HeaderInner,
  HeaderTitle,
  HeaderDescription,
  HeaderParagraph,
  HeaderImage,
};
