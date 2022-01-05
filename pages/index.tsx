import { Container, Box, Heading, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
  ModalBody, FormControl, FormLabel, Input, Textarea, ModalFooter } from '@chakra-ui/react';
import Feed from '../components/Feed';
import React  from "react"
import ResizeTextarea from "react-textarea-autosize";
import { useForm } from "react-hook-form";
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

const saveReview = async (reviewData: object) => {
  // Handles the add review button by sending a post request to the api route
  // Add a type to the data to avoid errors
  const response = await fetch('/api/createreview', {
    method: 'POST',
    body: JSON.stringify(reviewData)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
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
  return (
    <Container>
      <Box display={ { md: 'flex' } }> 
        <Box mt="5" flexGrow={ 1 }>
{/*           {<Button colorScheme='green'
                         onClick={ async () => {
              try {
                // TODO: REMOVE THIS DUMMY DATA
                const newReview = {
                  author: 'Martin',
                  reviewText: 'Testing',
                  coursesId: 1
                };
                await saveReview(newReview);
              } catch (err) {
                console.log(err);
              }
            }}
            >Add Review
          </Button>} */}
          <ModalForm/>
          {/* <Feed reviews={reviews} /> */}
        </Box>
      </Box>
    </Container>
  )
}


export default Page;