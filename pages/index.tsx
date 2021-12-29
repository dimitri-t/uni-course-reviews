import { Container, Box, Heading } from '@chakra-ui/react';
import Feed from '../components/Feed';

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Feed />
        </Box>
      </Box>
    </Container>
  )
}

export default Page;