import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import fileUploadStyle from '../../auth/Register'

const CourseModal = ({ isOpen, onClose, id, deleteButtonHandler, courseTitle, addLectureHandler, lectures = [] }) => {

  // console.log(courseTitle);



  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [preVideo, setPreVideo] = useState('');

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader;

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreVideo(reader.result);
      setVideo(file)
    }
  }

  const closeHandler = () =>{

      setTitle('');
      setDescription('');
      setVideo('');
      setPreVideo('');
      onClose();
  }

  return (
    <Modal isOpen={isOpen}  onClose={closeHandler} size='full' scrollBehavior='outside'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={'16'}>

          <Grid templateColumns={['ifr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size='sm' opacity={0.4} />
              </Box>

              <Heading children={"LECTURE"} />
              <VideoCard
                title="React Lecture"
                description="This is genuin react tutorial leactures"
                num={1}
                lectureId="12sdfds"
                courseId={id}
                deleteButtonHandler={deleteButtonHandler}
              />
            </Box>

            <Box>
              <form onSubmit={e => addLectureHandler(e, id, title, description, video)}>

                <VStack>
                  <Heading children='Add Lecture' size={'md'} textTransform='uppercase' />

                  <Input
                    placeholder='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    focusBorderColor='purple.300'
                  />
                  <Input
                    placeholder='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    focusBorderColor='purple.300'
                  />

                  <Input
                    required
                    accept='/video/mp4'
                    type={'file'}
                    placeholder={'upload image'}
                    textAlign='center'

                    focusBorderColor={'purple.300'}
                    css={{
                      ' &::file-selector-button': {
                        ...fileUploadStyle,
                        color: "purple"
                      }
                    }}
                    onChange={changeVideoHandler}
                  />

                  {
                    preVideo && (
                      <video
                        controlsList='nodownload'
                        controls
                        src={preVideo}
                      >
                      </video>
                    )
                  }
                  <Button w={'full'} colorScheme={'purple'} type='submit'>Upload</Button>
                </VStack>

              </form>
            </Box>

          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CourseModal

function VideoCard({ title, description, num, lectureId, courseId, deleteButtonHandler }) {
  return (
    <Stack direction={['column', 'row']}
      my='8'
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,93,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box><Heading children={`#${num} ${title}`} size='sm' />
        <Text children={description} />
      </Box>
      <Button color='purple.600' onClick={() => deleteButtonHandler(lectureId, courseId)}>
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  )
}