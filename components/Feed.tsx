import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Review from "./Review";

// type reviewType = { date: string; author: string; review: string; }[]

const Feed = () => {
  // const [reviews, setReviews] = useState(null);
  const reviews = [
    {
      'date': '10-12-2021',
      'author': 'John',
      'review': 'Very good course, highly recommended'
    },
    {
      'date': '23-12-2021',
      'author': 'Maria',
      'review': 'Bad course, dont do it'
    },
    {
      'date': '21-12-2021',
      'author': 'Dim',
      'review': 'Recommended doing this course as an elective'
    }
  ];

  return (
    <Box bg="red">
      {reviews.map((r, i) => {
        return (
          <div key={i}>
            <Review {...r} />

          </div>
        )
        })
      }    

    </Box>
  );

}

export default Feed;