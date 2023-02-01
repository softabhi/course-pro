import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const ForgetPassword = () => {
  const [email ,setEmail] = useState("");
  return (
    <Container py={'16'} h={['30vh' ,'85vh']}>
      <form>
        <Heading children={'Forget Password'} textAlign={['center', 'center']} textTransform={'uppercase'} my={'16'} />
        <VStack >
          <Input
            required
           
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={'email'}
            focusBorderColor={'yellow.500'}
            colorScheme={"blue"}
            placeholder={'enter your id or email address'}
            borderColor={'black'}
          />

          <Button type='submit' width={'full'} colorScheme={'yellow'}  >Change Password</Button>
        </VStack>

      </form>
    </Container>
  )
}

export default ForgetPassword