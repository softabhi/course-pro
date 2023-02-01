import React from 'react'
import { Button, Heading, Stack, VStack,Text,Image, Box, HStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import "./home.css";
import vg from '../../assest/images/shin2.png'
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import intro from '../../assest/videos/Intro.mp4'



const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={"full"} alignItems={['center' ,'flex-end']} spacing="8">
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} textAlign={['center','left']} />
            <Text children="Find Valuable Content At Reasonable Price" fontFamily={'cursive'} textAlign={['center','left']} />
            <Link to="/courses">
              <Button size={'lg'} colorScheme={"yellow"}>
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image className='vg' boxSize={"md"} src={vg} />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800" >
        <Heading
        textAlign={'center'}
        fontFamily="body"
        color={"yellow.400"}
        children="OUR BRANDS"       
       />
       <HStack className='icons' justifyContent={'space-around'} marginTop='15px'>
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
       </HStack>
      </Box>

      <div className="container2">
        
        <video
        controls
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        src={intro}
        >
        </video>
      </div>
    </section>
  )
}

export default Home