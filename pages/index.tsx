import { Container, Box, Button } from '@chakra-ui/react';
import Feed from '../components/Feed';
import React from "react";
import AddReviewModalForm from '../components/AddReviewModalForm';

import { useState } from 'react';
import prisma from '../helpers/client';
import { CourseReview } from '@prisma/client';

export async function getServerSideProps() {
  // Load first instance of DB
  // Filter by University
  const reviews = await prisma.courseReview.findMany();

  return {
    props: {
      initialReviews: reviews
    }
  }
}

// enum Uni {
//   MQC,
//   UNSW,
//   UTS,
//   USYD,
//   UWS
// }

const Page = ({ initialReviews }) => {
  const [reviews, setReviews] = useState<CourseReview[]>(initialReviews);

  return (
    <Container>

      <Box display={ { md: 'flex' } }> 
        <Box mt="5" flexGrow={ 1 }>

          <AddReviewModalForm reviews={reviews} setReviews={setReviews}/>
          <Feed reviews={ reviews } />

        </Box>
      </Box>
    </Container>
  )
}


export default Page;