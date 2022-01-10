import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NavBar from '../NavBar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dimitri" />
        <title>Uni Course Reviews</title>
      </Head>

      <NavBar />

      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main