import { Container, Box, Heading, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
  ModalBody, FormControl, FormLabel, Input, Textarea, ModalFooter } from '@chakra-ui/react';
import Feed from '../components/Feed';
import React  from "react"
import ResizeTextarea from "react-textarea-autosize";
import { useForm } from "react-hook-form";
//import ModalForm from '../components/reviewModalForm'

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
          <Feed reviews={reviews} />
        </Box>
      </Box>
    </Container>
  )
}

// Modal form component. Tried 
const ModalForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
      <>
          <Button colorScheme='blue' onClick={onOpen}>Add Review</Button>
          <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay/>
              <ModalContent>
                  <ModalHeader>Add a Review</ModalHeader>
                  <ModalCloseButton/>
                  <ModalBody pb={6}>
                      <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input 
                          ref={initialRef} 
                          placeholder='Enter your name...'
                          />
                      </FormControl>
                      <FormControl mt={4}>
                          <FormLabel>Review</FormLabel>
                          <Textarea id = 'userReview' placeholder='Enter your review here...' as={ResizeTextarea}/>
                      </FormControl>
                  </ModalBody>
                  <ModalFooter>
                      <Button colorScheme='blue' width='200px' align='center'
                      onClick={async () => {
                          try {
                            const newReview = {
                              author: 'userName',       // Change to correct text
                              reviewText: 'userReview', // Change to correct text
                              coursesId: 1
                            };
                            await saveReview(newReview);
                          } catch (err) {
                            console.log(err);
                          }
                        }}
                      >Submit</Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
      </>
  )
}

export default Page;