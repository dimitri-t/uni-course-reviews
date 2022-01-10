import React from "react"
import { Modal, Button, useDisclosure, Center, ModalOverlay, ModalContent, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
  return (
    <>
    <Center>
      <Button 
        leftIcon={<SearchIcon/>}
        justifyContent={'flex-start'}
        textAlign={'left'}
        width={'60%'}
        alignContent={'center'}
        size={'lg'}
        onClick={onOpen}
        > Begin Searching For A Course...
      </Button>
    </Center>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay/>
        <ModalContent>
          <InputGroup
          alignContent={'center'}
          alignItems={'center'}
          size='lg'
          >
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              children={<SearchIcon/>}
            />
            <Input
              placeholder='Search For a Course'
            />
          </InputGroup>
        </ModalContent>
      </Modal>
    </>
  )
}
export default LandingPage;