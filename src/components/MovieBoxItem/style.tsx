import styled from "@emotion/styled";

interface ThemeColors {
  [key: string]: string | ThemeColors;
}

interface Theme {
  colors?: ThemeColors;
}

interface StyledProps {
  theme?: Theme;
}

const MovieBoxItemContainer = styled.div<StyledProps>`
  background: ${(props) => props.theme.colors.white[100]};
  display: block;
  padding: 15px;
  max-width: 100%;
  margin: 0 auto 16px;
  box-shadow: 0 0 20px 10px ${(props) => props.theme.colors.dark['10']};
`;

const MovieBoxItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const MovieBoxItemTitle = styled.div<StyledProps>`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.dark['80']};
`;

const MovieBoxItemPoint = styled.div<StyledProps>`
  font: 700 20px Open Sans;
  color: ${(props) => props.theme.colors.yellow[100]};
`;

const MovieBoxItemBottom = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MovieBoxItemPoster = styled.div<StyledProps>`
  width: 150px;
  margin-right: 20px;
`;

const MovieBoxItemDetail = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
  @media (max-width: 574px) {
    width: 100%;
  }
`;

const MovieBoxItemParagraph = styled.div<StyledProps>`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.dark['80']};
  max-width: 100%;
  width: 345px;
  @media (max-width: 574px) {
    width: 100%;
    margin: 15px 0;
  }
`;

const MovieBoxItemButton = styled.div`
  align-self: flex-end;
`

export {
  MovieBoxItemContainer,
  MovieBoxItemTop,
  MovieBoxItemTitle,
  MovieBoxItemPoint,
  MovieBoxItemBottom,
  MovieBoxItemPoster,
  MovieBoxItemDetail,
  MovieBoxItemParagraph,
  MovieBoxItemButton,
};
