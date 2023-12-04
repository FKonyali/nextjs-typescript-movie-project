import { useRouter } from 'next/router'
import React from 'react'
//components
import MovieBoxContainer from 'components/MovieBoxContainer'
import SkeletonLoading from 'components/SkeletonLoading'
import MovieBoxItem from 'components/MovieBoxItem'
import Container from 'components/Container'
import Header from 'components/Header'
import Button from 'components/Button'
//queries
import { useMovieQuery } from 'plugins/queries'

interface MovieData {
  Search?: Array<{
    Title: string;
    Year: string;
    Poster: string;
  }>;
}

function Home() {
  const router = useRouter()

  const moviewQuery = useMovieQuery()
  const moviesData = moviewQuery?.data as MovieData

  const handleClickMovieBox = (id: string) => {
    router.push(`/detail/${id}`)
  }

  const handleMoreButtonClick = () => {
    
  }

  return (
    <Container>
      <Header />
      <MovieBoxContainer>
        {
          moviewQuery.isLoading ?
            Array(3)
              .fill('')
              .map((item, index) => (
                <SkeletonLoading
                  key={index}
                  inlineCss={`
                  height: 305px;
                  margin-bottom: 20px;
                `}
                />
              )) : (
              <>
                {
                  moviesData?.Search?.map((item) => {
                    return (
                      <MovieBoxItem
                        title={item?.Title}
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum varius ultricies. Ut malesuada lobortis hendrerit. Aenean tincidunt cursus orci in auctor.'
                        point={item?.Year}
                        imageUrl={item?.Poster}
                        handleOnClick={() => handleClickMovieBox('id')}
                      />
                    )
                  })
                }
                <Button inlineCss={`margin: 0 auto; display: block`} onClick={handleMoreButtonClick}> More Movie (+10)</Button>
              </>
            )
        }
      </MovieBoxContainer>
    </Container>
  )
}

export default Home
