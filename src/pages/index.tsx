import { useQueryClient } from 'react-query'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
//components
import MovieBoxContainer from 'components/MovieBoxContainer'
import SkeletonLoading from 'components/SkeletonLoading'
import MovieBoxItem from 'components/MovieBoxItem'
import Container from 'components/Container'
import Button from 'components/Button'
//queries && mutations && plugins
import { useMoreMoviesMutation } from 'plugins/mutations'
import { useMovieQuery } from 'plugins/queries'
import useStore from 'store/useStore'

interface MovieData {
  Search?: Array<{
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  }>;
}

function Home() {
  const router = useRouter()

  const queryClient = useQueryClient()

  const moviewQuery = useMovieQuery({
    callbacks: {
      onSuccess: (data: any) => {
        const dataSearch = data?.Search
        let activePage = movieActivePage

        setMovieActivePage(activePage++)
        setAllMovieData([
          ...allMovieData,
          ...dataSearch,
        ])
      }
    }
  })

  const movieActivePage = useStore((state) => state.movieActivePage)
  const setMovieActivePage = useStore((state) => state.setMovieActivePage)

  const allMovieData = useStore((state) => state.allMovieData)
  const setAllMovieData = useStore((state) => state.setAllMovieData)

  const homeScrollOffset = useStore((state) => state.homeScrollOffset)
  const setHomeScrollOffset = useStore((state) => state.setHomeScrollOffset)

  const getMoreMovies = useMoreMoviesMutation({
    queryClient,
    callbacks: {
      onSuccess: (data: any) => {
        const dataSearch = data?.Search

        let activePage = movieActivePage + 1

        if (data?.totalResults !== activePage) {
          setMovieActivePage(activePage)

          setAllMovieData([
            ...allMovieData,
            ...dataSearch,
          ])
        }

      }
    }
  })

  const handleClickMovieBox = (id: string) => {
    router.push(`/detail/${id}`)

    setHomeScrollOffset(document.documentElement.scrollTop)
  }

  const handleMoreButtonClick = () => {
    let activePage = movieActivePage + 1

    getMoreMovies.mutate({
      s: 'movie',
      page: activePage,
    })
  }

  useEffect(() => {
    window.scrollTo(0, homeScrollOffset);
  }, [])

  return (
    <Container>
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
                  allMovieData?.map((item) => {
                    return (
                      <MovieBoxItem
                        title={item?.Title}
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum varius ultricies. Ut malesuada lobortis hendrerit. Aenean tincidunt cursus orci in auctor.'
                        point={item?.Year}
                        imageUrl={item?.Poster}
                        handleOnClick={() => handleClickMovieBox(item?.imdbID)}
                      />
                    )
                  })
                }
                {
                  (getMoreMovies.isSuccess || getMoreMovies.status === 'idle') ? (
                    <Button
                      inlineCss={`
                        margin: 0 auto; 
                        display: block;
                      `}
                      onClick={handleMoreButtonClick}
                    >
                      More Movie (+10)
                    </Button>
                  ) : (
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
                      ))
                  )
                }
              </>
            )
        }
      </MovieBoxContainer>
    </Container>
  )
}

export default Home
