import { Box, Container, Heading, VStack, Text, Link, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'}>
      <Heading

        textAlign='center'
        my={'8'}
      >You have pro pack</Heading>
      <VStack
        boxShadow={'lg'}
        textAlign='center'
        borderRadius={'lg'}
        pb='16'
      >
        <Box w={'full'} bg={'yellow.400'} p='4'>
          <Text>Payment Successfull</Text>
        </Box>

        <Box>
          <Text>
            Congratualations,Now you are a pro member. you can access all premiuam courses and content.
          </Text>

          <VStack>
            <Heading size={'4xl'} my='5'>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to="/profile">
          <Button>Go To Profile</Button>
        </Link>
        <Heading size={'xs'}>
          Reference: sdkfjkdsjf54564564effdf
        </Heading>
      </VStack>
    </Container>
  )
}

export default PaymentSuccess