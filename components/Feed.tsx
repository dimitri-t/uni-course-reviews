import { Box, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Review from "./Review";

// type reviewType = { date: string; author: string; review: string; }[]

const Feed = () => {
  // const [reviews, setReviews] = useState(null);
  const reviews = [
    {
      'date': '10-12-2021',
      'author': 'John',
      'dateCompleted': 'Term 3, 2021',
      'lecturer': 'Bob Smith',
      'difficulty': 3,
      'rating': 3,
      'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac fringilla libero. Nullam semper ultricies eleifend. Vestibulum a sodales velit. Etiam dictum metus ac odio posuere pulvinar eget ac sem. Nunc felis eros, scelerisque nec mauris sed, facilisis porttitor nisi. Donec id bibendum dolor, quis molestie purus. Proin quis facilisis lorem. Morbi ac felis at nunc volutpat maximus. Praesent sed cursus arcu, vel tincidunt metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed facilisis orci mauris, at cursus nisl sollicitudin quis. Proin et augue ut magna luctus venenatis in eget elit. Quisque mauris purus.'
    },
    {
      'date': '23-12-2021',
      'author': 'Maria',
      'dateCompleted': 'Term 3, 2021',
      'lecturer': 'Stacy Smith',
      'difficulty': 5,
      'rating': 5,
      'review': 'Bad course, dont do it'
    },
    {
      'date': '21-12-2021',
      'author': 'Dim',
      'dateCompleted': 'Term 3, 2021',
      'lecturer': 'John Smith',
      'difficulty': 1,
      'rating': 5,
      'review': 'Recommended doing this course as an elective'
    }
  ];

  return (
    <Box>
      <Stack spacing={8}>
      {reviews.map((r, i) => {
        return (
          <div key={i}>
            <Review {...r} />

          </div>
        )})
      }    
      </Stack>
    </Box>

  );

}

export default Feed;