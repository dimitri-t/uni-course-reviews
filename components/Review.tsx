import { StarIcon, ChevronUpIcon, ChevronDownIcon, ChatIcon } from "@chakra-ui/icons";
import { Box, Text, Divider, SimpleGrid, Button, ButtonGroup, IconButton, Center, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";

type reviewType = { date: string; author: string; dateCompleted: string; lecturer: string; difficulty: number; rating: number; review: string; }

// TODO:
// When a user presses the "Comments" button, a modal will popup, allowing users to see and add comments to the review

const Review = ({date, author, dateCompleted, lecturer, difficulty, rating, review}) => {
  const boxBG = useColorModeValue('white', 'gray.600')
  return (
    <Box bg={boxBG} borderWidth='1px' borderRadius='lg' shadow='md'>
      <Box padding="3">
        <Box> <Text fontSize='2xl' fontWeight='bold'>{author}</Text> </Box>
        <Box> <Text fontSize='lg' fontWeight='bold'>Review Created: {date}</Text> </Box>
      </Box>
      <Divider orientation='horizontal'></Divider>

      <Box padding="3" alignContent={"center"}>
        <SimpleGrid columns={[2, null]} spacing={3}>
          <Box><Text fontWeight="bold">Term/Year Completed:</Text><Text>{dateCompleted}</Text></Box>
          <Box>
            <Text fontWeight="bold">Difficulty:</Text>
            {Array(5).fill('').map((_,i) => (<StarIcon key={i} color={i < difficulty ? 'yellow.400': 'gray.300'}></StarIcon>))}
          </Box>
          <Box><Text fontWeight='bold'>Lecturer:</Text><Text>{lecturer}</Text></Box>
          <Box>
              <Text fontWeight="bold">Overall Rating:</Text>
              {Array(5).fill('').map((_,i) => (<StarIcon key={i} color={i < rating ? 'yellow.400': 'gray.300'}></StarIcon>))}
          </Box>
        </SimpleGrid>
      </Box>
      <Divider orientation='horizontal'></Divider>

      <Box padding='3'>
        <Box ><Text>{review}</Text></Box>
      </Box>
      
      <Flex padding={3}>
        <Button leftIcon={<ChatIcon/>}>Comments</Button>
        <Spacer />
        <ButtonGroup isAttached>
          <IconButton aria-label='Upvote' icon={<ChevronUpIcon/>} variant='outline' colorScheme='green'></IconButton>
          <Center paddingLeft={3} paddingRight={3}><Text fontSize='md'>56</Text></Center>
          <IconButton aria-label='Downvote' icon={<ChevronDownIcon/>} variant='outline' colorScheme='red'></IconButton>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default Review;