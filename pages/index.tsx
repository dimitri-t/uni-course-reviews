import { Container, Box, Button } from '@chakra-ui/react';
import Feed from '../components/Feed';
import React  from "react"
import ModalForm from '../components/reviewModalForm'

import { useState } from 'react';
import prisma from '../helpers/client';

import getCourse from '../helpers/getCourse';

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
      <Button colorScheme='blue' onClick={ async () => {
        console.log('hey')
        console.log(await getCourse('COMP1511'));
      }}>Find Course</Button>
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