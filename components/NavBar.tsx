import {
  Box,
  Flex,
  Heading,
  Input,
  Container,
} from '@chakra-ui/react';
import ThemeToggleButton from './ThemeToggleBtn';
import SearchBar from './SearchBarComp';

export default function NavBar() {
  return (
      <Box
        as="nav" 
        position="fixed"
        w="100%"
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between" 
          alignItems="center"
        >
          <Heading as="h1" size="lg">
            ReviewR
          </Heading>

          <SearchBar />
          
          <ThemeToggleButton />

        </Container>
      </Box>
  );
}
