import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <p>Leave a review</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page;