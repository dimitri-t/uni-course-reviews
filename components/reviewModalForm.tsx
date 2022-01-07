import React, { useState }  from "react"
import ResizeTextarea from "react-textarea-autosize";
import  { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
        ModalBody, FormControl, FormLabel, Input, Textarea, ModalFooter } from "@chakra-ui/react"
import createReview from "../helpers/createReview";

const ModalForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  // Form inputs
  const [review, setReview] = useState('');
  const [lecturer, setLecturer] = useState('');

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
              <FormLabel>Lecturer</FormLabel>
              <Input
                id='username'
                ref={ initialRef }
                placeholder='Enter lecturer...'
                onChange={event => setLecturer(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Review</FormLabel>
              <Textarea
                id='userReview'
                placeholder='Enter your review here...'
                as={ ResizeTextarea }
                onChange={event => setReview(event.currentTarget.value)}
              />
            </FormControl>
          </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' width='200px' align='center'
              onClick={ async () => {
                if (review === '') {
                  return;
                }
              try {
                const newReview = {
                  lecturer: lecturer,
                  review: review,
                  courseId: 1
                };
                createReview(newReview);
              } catch (err) {
                console.log(err);
              }
                onClose();
            }}
            >
              Submit
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalForm;