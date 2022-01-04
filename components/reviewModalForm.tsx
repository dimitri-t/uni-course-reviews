import React  from "react"
import ResizeTextarea from "react-textarea-autosize";
import saveReview from "../pages/index"
import  { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
        ModalBody, FormControl, FormLabel, Input, Textarea, ModalFooter } from "@chakra-ui/react"

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
                            <Input id='username' ref={initialRef} placeholder='Enter your name...' />
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
                                author: 'username',
                                reviewText: 'userReview',
                                coursesId: 1
                              };
                              //saveReview(newReview); Error here
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

export default ModalForm;