import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function ChangePassword() {

    const [oldPass , setOldPass] = useState('');
    const [newPass , setNewPass] = useState('');

    return (
        <Container minH={'90vh'} py='55'>
            <form my='20px'>
                <Heading children='Change Password' my={'17'}/>
                <VStack spacing={'8'}>
                    <Input
                        required
                        id='password'
                        value={oldPass}
                        onChange={(e) => setOldPass(e.target.value)}
                        type={'password'}
                        focusBorderColor={'yellow.500'}
                        colorScheme={"blue"}
                        placeholder={'enter your old password'}
                    />
                    <Input
                        required
                        id='password'
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        type={'password'}
                        focusBorderColor={'yellow.500'}
                        colorScheme={"blue"}
                        placeholder={'enter your new password'}
                    />

                    <Button width={'full'} colorScheme={'yellow'}>Submit</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword