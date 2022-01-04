import { Box, Stack } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import { Review } from '@prisma/client';

const Feed = ({ reviews }) => {

  return (
    <Box>
      <Stack spacing={8}>
      {reviews.map((r: Review, i) => {
        return (
          <div key={i}>
            <ReviewCard {...r} />
          </div>
        )})
      }    
      </Stack>
    </Box>

  );
}

export default Feed;


// initialReviews: [
//   {
//     'date': '10-12-2021',
//     'author': 'John',
//     'dateCompleted': 'Term 3, 2021',
//     'lecturer': 'Bob Smith',
//     'difficulty': 3,
//     'rating': 3,
//     'review': 'Praesent sed cursus arcu, vel tincidunt metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed facilisis orci mauris, at cursus nisl sollicitudin quis. Proin et augue ut magna luctus venenatis in eget elit. Quisque mauris purus.'
//   },
//   {
//     'date': '23-12-2021',
//     'author': 'Maria',
//     'dateCompleted': 'Term 3, 2021',
//     'lecturer': 'Stacy Smith',
//     'difficulty': 5,
//     'rating': 1,
//     'review': 'Bad course, dont do it'
//   },
//   {
//     'date': '21-12-2021',
//     'author': 'Dim',
//     'dateCompleted': 'Term 3, 2021',
//     'lecturer': 'John Smith',
//     'difficulty': 1,
//     'rating': 5,
//     'review': 'Recommended doing this course as an elective'
//   }
// ]