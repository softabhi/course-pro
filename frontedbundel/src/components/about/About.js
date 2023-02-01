import { Avatar, Container, Heading, Stack, VStack, Text, Button, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import intro from '../../assest/videos/Intro.mp4'

const Founder = () => {
    return (
        <Stack direction={['column', 'row']} spacing={['5', '16']} padding={['', '8']}>
            <VStack padding={['5', '8']}>
                <Avatar boxSize={['40', '40']} />
                <Text children='Co-Foudner' opacity={'0.7'} />
            </VStack>

            <VStack justifyContent='center'>
                <Heading children="Abhishek Agyat" size={['md', 'xl']} />
                <Text children='I am full stack devoloper and lerner of new technologies.' textAlign={['center', 'left']} />
            </VStack>
        </Stack>
    )
}

const VideoPlayer = () => (
    <video
        controls
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        src={intro}
    >
    </video>
)

const TanC = ({ termAndCondition }) => (
    <Box>
        <Heading
            size={'md'}
            children="Terms & Conditions"
            textAlign={['center', 'left']}
            my='4'
        />
        <Box h={'sm'} p={'4'}>
            <Text fontFamily={'heading'} letterSpacing={'widest'}>
                {termAndCondition}
            </Text>
            <Heading 
           children="Refund only applicable retun with in 7 days"
           size={'md'}
           textAlign={['center','left']}
           />
        </Box>
       
    </Box>
)

const About = () => {
    return (
        <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
            <Heading children='About Us' textAlign={['center', 'left']} />

            <Founder />

            <Stack m={['1', '8']} direction={['column', 'row']} alignItems="center">
                <Text my={'8'} textAlign={['center', 'left']} fontFamily={'cursive'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ducimus repudiandae
                    dolorum soluta fuga officia vel vitae? Odio error expedita accusamus fuga
                    voluptates quisquam culpa soluta, sunt velit debitis veniam.
                </Text>
                <Link to='subscribe' >
                    <Button colorScheme={'yellow'} variant="outline">Check out Plan</Button>
                </Link>
            </Stack>

            <VideoPlayer />

            <TanC termAndCondition={'TermAndCondition'} />

            <HStack>
                <RiSecurePaymentFill />
                <Heading
                    fontFamily={'sans-serif'}
                    children={"Payment is secure by Razorpay"}
                    size='xs'
                />
            </HStack>
        </Container>
    )
}

export default About