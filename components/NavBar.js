import {
  Box,
  Flex,
  Button,
  Heading,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box as="nav" bg={useColorModeValue('#ffffff40', '#20202380')} px={80}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
