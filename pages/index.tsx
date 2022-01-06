import { Container, Box } from '@chakra-ui/react';
import Feed from '../components/Feed';
import React  from "react"
import ModalForm from '../components/reviewModalForm'

import { useState } from 'react';
import { Prisma, PrismaClient, CourseReview } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  // Load first instance of DB
  // Filter by University
  const reviews = await prisma.courseReview.findMany();

  // Example query
  // const courses = await prisma.courses.findMany({
  // where: {
  //   }
  // });
  // console.log(courses);

  return {
    props: {
      initialReviews: reviews
    }
  }
}

enum Uni {
  MQC,
  UNSW,
  UTS,
  USYD,
  UWS
}

// TODO: Add types
const Page = ({ initialReviews }) => {
  const [reviews, setReviews] = useState(initialReviews);
  return (
    <Container>
      <Box display={ { md: 'flex' } }> 
        <Box mt="5" flexGrow={ 1 }>

          <ModalForm/>
          <Feed reviews={ reviews } />

        </Box>
      </Box>
    </Container>
  )
}


export default Page;