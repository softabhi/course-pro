import { Box, Grid,Heading,video, VStack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import intro from '../../assest/videos/Intro.mp4'

const CoursePage = () => {

    const lecturetitle = "LECTURETITLES";
    const [lectureNumber ,setLectureNum]= useState(0);

    const lectures = [
     {
        _id: 'fsdfsdf',
        title:"sample",
        description:"hey why you are upset",
        video:{
            url:"dsfdf"
        },
     },
     {
        _id: 'fsdfsdf2',
        title:"sample2",
        description:"hey why you are upset",
        video:{
            url:"dsfdf"
        },
     },
     {
        _id: 'fsdfsdf3',
        title:"sample3",
        description:"hey why you are upset",
        video:{
            url:"dsfdf"
        },
     }

];
    return (
        <Grid templateColumns={['1fr', '3fr 1fr']} h="95vh">
            <Box>
                <video
                    width={'100%'}
                    controls
                    controlsList='nodownload  noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                    src={intro}
                >
                </video>


                <Heading m={'4'} children={`#${lectureNumber+1}  ${lectures[lectureNumber].title}`}/>
                <Heading m={'4'} children={lectures[lectureNumber].description}/>
            </Box>

            <VStack>
              {  lectures.map((element,index) =>
                (
                    <button
                    onClick={()=> setLectureNum(index)}
                    style={{
                        width:"100%",
                        padding:'1rem',
                        margin:'0',
                        borderBottom:"2px solid rgba(0, 0, 0,0.2)",
                    }}
                    >
                     <Text nuOfLine={'1'}>
                        #{index+1} {element.title}
                     </Text>
                   </button>
                ))}
                
            </VStack>
        </Grid>
    )
}

export default CoursePage