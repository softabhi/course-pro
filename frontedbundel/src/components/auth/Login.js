import { Container, FormLabel, Heading, VStack, Input, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Form, Link } from 'react-router-dom'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent='center' spacing={'10'}>
                <Heading children="Wel Come To All Digital Solution" />

                <form style={{ width: "100%" }}>
                    <Box my={'4'}>
                        <FormLabel htmlFor='email' children="enter email" />
                        <Input
                            required
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type={'email'}
                            focusBorderColor={'yellow.500'}
                            colorScheme={"blue"}
                            placeholder={'enter your id or email address'}
                        />
                    </Box>



                    <Box my={'4'}>
                        <FormLabel htmlFor='password' children="enter password address" />
                        <Input
                            required
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={'password'}
                            focusBorderColor={'yellow.500'}
                            colorScheme={"blue"}
                            placeholder={'enter your id or email address'}
                        />
                    </Box>

                    <Box>
                    <Button colorScheme={'yellow'} my='4' type='submit'>
                        Login
                    </Button>

                        <Link to="/forgetpassword">
                        <Button fontSize={'sm'} variant='solid'>
                            Forget Password
                        </Button>
                        </Link>
                        
                    </Box>
                    
                    <Box my={'4'} >
                       New User? {' '}<Link to='/register'>
                       <Button colorScheme={'yellow'}>
                        SingUp
                       </Button>{' '}here
                       </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}
