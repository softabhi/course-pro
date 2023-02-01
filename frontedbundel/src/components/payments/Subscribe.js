import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h={'88vh'}>
      <Heading children="Welcome" my='8' textAlign={'center'} />
      <VStack boxShadow={'lg'}
        borderRadius=''
        alignItems={'stretch'}
        spacing='0'
      >
        <Box bg={'yellow.400'} p='4' css={{ borderRadius: '8px 8px 0 0' }} >
          <Text children='Pro Pack - $299.00' color={'black'} />
        </Box>

        <Box p='4'  >
          <VStack>
            <Box textAlign={'center'} my="5">
              <Text children='Join pro progrram get access all most valueable courses and content' color={''} />
            </Box>
            <Text children='$299.00 only' color={'black'} fontWeight="bold" />
          </VStack>

          <Button my={'4'} colorScheme={'yellow'} w='full'>Buy Now</Button>
        </Box>
         
        <Box bg={'blackAlpha.300'} p='2' css={{ borderRadius: '0 0 8px 8px' }} textAlign='center'>
          <Heading children='100% Refundable at cancelation' color={'black'} fontWeight="bold" fontSize={''} />
          <Text children='terms & condition apply' fontSize={'xs'} />
        </Box>
         
       
      </VStack>
    </Container>

  )
}

export default Subscribe