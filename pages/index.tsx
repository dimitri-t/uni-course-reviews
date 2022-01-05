import { Container, Box, Heading, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
  ModalBody, FormControl, FormLabel, Input, Textarea, ModalFooter } from '@chakra-ui/react';
import Feed from '../components/Feed';
import React  from "react"
import ResizeTextarea from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import ModalForm from '../components/reviewModalForm'

import { useState } from 'react';

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