import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'
const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH="10vh">
        <Stack  direction={['column','row']}>
            <VStack alignItems={['center','flex-start']}>
                <Heading children="All Right Reserved" color={'white'}/>
                <Heading children="All Digital Solutions" color={'yellow'} fontFamily={'body'} size='sm'/>
            </VStack>

            <HStack
            spacing={['2','10']}
            justifyContent="center"
            fontSize='50'
            color={'white'}
            >
                <a href="https:www.youtube.com" target={"_blank"}>
                    <TiSocialYoutubeCircular/>
                </a>
                <a href="www.instagram.com" target={"_blank"}>
                    <TiSocialInstagramCircular/>
                </a>
                <a href="www.githum.com" target={"_blank"}>
                    <DiGithub/>
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer