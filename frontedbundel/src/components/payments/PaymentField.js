import { Container, VStack ,Text, Heading, Button} from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentField = () => {
  return (
    
    <Container h={'88vh'}>
      <VStack justifyContent={'center'} h='full'>
        <RiErrorWarningFill size={'5rem'}/>
       
       <Heading children='Payment field'/>
       <Link to='/subscribe'>
         <Button>
          Try again
         </Button>
       </Link>
        
      </VStack>
    </Container>
  )
}

export default PaymentField