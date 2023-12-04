import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import React from 'react';
//components
import MovieBoxContainer from 'components/MovieBoxContainer';
import SkeletonLoading from 'components/SkeletonLoading';
import Container from 'components/Container';
import Image from 'components/Image';
//queries
import { useMovieDetailQuery } from 'plugins/queries';

interface ThemeColors {
  [key: string]: string | ThemeColors;
}

interface Theme {
  colors?: ThemeColors;
}

interface StyledProps {
  theme?: Theme;
  inlineCss?: string;
}

const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 --15px;
`

const DetailItem = styled.div`
  width: 50%;
  padding: 0 15px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    width: 100%;
  }
`

const DetailParagraph = styled.p<StyledProps>`
  color: ${(props) => props.theme.colors.dark["80"]};
  margin-bottom: 10px;
`

function Detail() {
  const router = useRouter()
  const id = router.query.id

  const movieDetailQuery = useMovieDetailQuery(id as string)
  const movieDetailData = movieDetailQuery.data as any

  return (
    <Container>
      <MovieBoxContainer>
        <DetailContainer>
          <DetailItem>
            {
              movieDetailQuery.isLoading && (
                <SkeletonLoading
                  inlineCss={`
                    height: 40vw;
                  `}
                />
              )
            }
            <Image
              src={movieDetailData?.Poster}
              aspectRatio="148.34%"
            />
          </DetailItem>
          <DetailItem>
            {
              movieDetailQuery.isLoading &&
              Array(7)
                .fill('')
                .map((item, index) => (
                  <SkeletonLoading
                    key={index}
                    inlineCss={`
                  height: 23px;
                  margin-bottom: 5px;
                  width: ${Math.random() * 100 + 150}px;
                `}
                  />
                ))
            }
            {
              !movieDetailQuery.isLoading && (
                <>
                  <DetailParagraph>
                    Imdb Rating: {movieDetailData?.imdbRating}
                  </DetailParagraph>
                  <DetailParagraph>
                    Movie Release Date: {movieDetailData?.Year}
                  </DetailParagraph>
                  <DetailParagraph>
                    Movie Duration: {movieDetailData?.Runtime}
                  </DetailParagraph>
                  <DetailParagraph>
                    Genre: {movieDetailData?.Genre}
                  </DetailParagraph>
                  <DetailParagraph>
                    Director: {movieDetailData?.Director}
                  </DetailParagraph>
                  <DetailParagraph>
                    Writer: {movieDetailData?.Writer}
                  </DetailParagraph>
                  <DetailParagraph>
                    Actors: {movieDetailData?.Actors}
                  </DetailParagraph>
                  <DetailParagraph>
                    Language: {movieDetailData?.Language}
                  </DetailParagraph>
                  <DetailParagraph>
                    Country: {movieDetailData?.Country}
                  </DetailParagraph>
                </>
              )
            }
          </DetailItem>
        </DetailContainer>
      </MovieBoxContainer>
    </Container>
  )
}

export default Detail
