import { Container, VStack ,Text, Heading, Button} from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NoteFound = () => {
  return (
    
    <Container h={'88vh'}>
      <VStack justifyContent={'center'} h='full'>
        <RiErrorWarningFill size={'5rem'}/>
       
       <Heading children='Page Not Found'/>
       <Link to='/'>
         <Button>
          Go to Home
         </Button>
       </Link>
        
      </VStack>
    </Container>
  )
}

export default NoteFound