import { Container, Box, Heading, Button } from '@chakra-ui/react';
import Feed from '../components/Feed';

import { useState } from 'react';
import { Prisma, PrismaClient, Review } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps () {
  // Load first instance of DB
  const reviews = await prisma.review.findMany();

  return {
    props: {
      initialReviews: reviews
    }
  }
}

const saveReview = async (review: Prisma.ReviewCreateInput) => {
  const response = await fetch('/api/createreview', {
    method: 'POST',
    body: JSON.stringify(review)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

// TODO: Add types

const Page = ({ initialReviews }) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  return (
    <Container>
      <Box display={ { md: 'flex' } }>
        
        <Box mt="5" flexGrow={ 1 }>
          <Button colorScheme='blue'
            onClick={ async () => {
              try {
                // TODO: REMOVE THIS DUMMY DATA
                const newReview = {
                  author: 'new',
                  reviewText: 'Very good course',
                  coursesId: 1
                };
                await saveReview(newReview);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Add Review
          </Button>
          <Feed reviews={reviews} />
        </Box>
      </Box>
    </Container>
  )
}

export default Page;