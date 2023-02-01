import React from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
const UpdateProfile = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    return (

        <Container minH={'90vh'} py='55'>
            <form my='20px'>
                <Heading children='Change Profile' my={'17'} />
                <VStack spacing={'8'}>
                    <Input

                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type={'text'}
                        focusBorderColor={'yellow.500'}
                        colorScheme={"blue"}
                        placeholder={'enter your new name'}
                    />


                    <Input

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={'email'}
                        focusBorderColor={'yellow.500'}
                        colorScheme={"blue"}
                        placeholder={'enter your new email'}
                    />
                    
            

                         <Button width={'full'} colorScheme={'yellow'}>Submit</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default UpdateProfile