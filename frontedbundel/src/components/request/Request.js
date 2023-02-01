import { Container, Heading, VStack, Box, Input, Button, FormLabel, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [course ,setCourse] = useState('')
    return (
        <Container h={'90vh'}>

            <VStack h={'full'} justifyContent={'center'} spacing='13'>
                <Heading children='Request Your Favorate Courses' />
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
                        <FormLabel htmlFor='email' children="Enter Email" />
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
                        <FormLabel htmlFor='course' children="Course" />
                        <Textarea
                            required
                            id='course'
                            
                            onChange={(e) => setCourse(e.target.value)}
                            type={'massage'}
                            focusBorderColor={'yellow.500'}
                            colorScheme={"blue"}
                            placeholder={'please explain courses'}
                        />
                    </Box>


                    <Button fontSize={'sm'} variant='solid' colorScheme={'yellow'}>
                        Send Mail
                    </Button>

                    <Box my={'4'} >
                       See Available Courses? {' '}<Link to='/courses'>
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

export default Request