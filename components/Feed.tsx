import { Box, Stack } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import { CourseReview } from '@prisma/client';

const Feed = ({ reviews }) => {
  return (
    <Box>
      <Stack spacing={8}>
        {reviews.length !== 0 ?
          reviews.map((r: CourseReview) => {
            return (
              <div key={r.id}>
                <ReviewCard {...r} />
              </div>
            )
          })
          : <p>No reviews</p>}
      </Stack>
    </Box>

  );
}

export default Feed;
