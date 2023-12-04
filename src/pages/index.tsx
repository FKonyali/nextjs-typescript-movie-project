import React from 'react'
//components
import MovieBoxContainer from 'components/MovieBoxContainer'
import Container from 'components/Container'
import Header from 'components/Header'

function Home() {
  return (
    <Container>
      <Header />
      <MovieBoxContainer>
        movieBox...
      </MovieBoxContainer>
    </Container>
  )
}

export default Home
