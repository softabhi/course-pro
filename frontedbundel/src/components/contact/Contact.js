import { Container, Heading, VStack, Box, Input, Button, FormLabel, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [massage ,setMassage] = useState('')
    return (
        <Container h={['90vh','90vh']} >

            <VStack h={'full'} justifyContent={'center'} spacing='13' >
                <Heading children='Contact Us' />
                <form style={{ width: "100%" }}>


                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children="Name" />
                        <Input
                            required
                            id='name'
                            value={email}
                            onChange={(e) => setName(e.target.value)}
                            type={'text'}
                            focusBorderColor={'yellow.500'}
                            colorScheme={"blue"}
                            placeholder={'enter your full name'}
                        />
                    </Box>


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
                        <FormLabel htmlFor='email' children="Massage" />
                        <Textarea
                            required
                            id='massage'
                            value={email}
                            onChange={(e) => setMassage(e.target.value)}
                            type={'massage'}
                            focusBorderColor={'yellow.500'}
                            colorScheme={"blue"}
                            placeholder={'enter your massage'}
                        />
                    </Box>


                    <Button fontSize={'sm'} variant='solid' colorScheme={'yellow'}>
                        Send Mail
                    </Button>

                    <Box my={'4'} >
                       Request for course? {' '}<Link to='/request'>
                       <Button >
                        Click here
                       </Button>{' '}here
                       </Link>
                    </Box>
                </form>
            </VStack>

        </Container>
    )
}

export default Contact