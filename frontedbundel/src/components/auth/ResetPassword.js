import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password ,setPassword] = useState("");

  const params = useParams();
//   console.log(params.token);
  return (
    <Container py={'16'} h={['30vh' ,'85vh']}>
      <form>
        <Heading children={'Reset Password'} textAlign={['center', 'center']} textTransform={'uppercase'} my={'16'} />
        <VStack >
          <Input
            required
           
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={'password'}
            focusBorderColor={'yellow.500'}
            colorScheme={"blue"}
            placeholder={'enter your password'}
            borderColor={'black'}
          />

          <Button type='submit' width={'full'} colorScheme={'yellow'}  >Reset Password</Button>
        </VStack>

      </form>
    </Container>
  )
}



export default ResetPassword