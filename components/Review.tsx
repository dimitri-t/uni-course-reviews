import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

type reviewType = { date: string; author: string; review: string; }

const Review = ({date, author, review}) => {
  return (
    <Box>
      {date} {author} {review}
    </Box>
  )
}

export default Review;