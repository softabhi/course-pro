import { Container, FormLabel, Heading, VStack, Input, Box, Button, Avatar, border } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Form, Link } from 'react-router-dom'


const fileUploadStyle = {
    "&::file-selector-button":{
        cursor:"pointer" ,
        marginLeft:"-5p%",
        width:"120%",
        border:"none",
        height:"100%",
        color:"#ECC95B",
        backgroundcolor:"white",
    }
}

 function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [imgprev, setImgprev] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");

    const changeImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader;

        reader.readAsDataURL(file);
        reader.onloadend=()=>{
            setImgprev(reader.result);
            setImage(file)
        }
    }
    return (
        <Container h={''}>
            <VStack h={'full'} justifyContent='center' spacing={'10'} my={'50'}>
                <Heading children="REGISTER" />
                <form style={{ width: "100%" }}>
                   <Box display={'flex'} justifyContent='center'>
                    <Avatar src={imgprev} size={'2xl'}/>
                   </Box>


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
                        <FormLabel htmlFor='chooseAvatar' children="Choose Avatar"/>
                        <Input
                            required
                            id='chooseAvatar'
                            accept='/images/*'
                            type={'file'}
                            focusBorderColor={'yellow.500'} 
                            css={fileUploadStyle}
                            onChange={changeImageHandler}
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

                  
                  
                        <Button fontSize={'sm'} variant='solid'>
                            Sing Up
                        </Button>
                     
                     
                    <Box my={'4'} >
                       Arlready Register User? {' '}<Link to='/login'>
                       <Button colorScheme={'yellow'}>
                        Login
                       </Button>{' '}Here
                       </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Register