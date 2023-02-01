import {
    Avatar, Button, Container,
    Heading, HStack, Stack, VStack, Text, Image, Modal,
    ModalOverlay, ModalContent, ModalCloseButton,
    ModalBody, Input, ModalFooter,
    useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useState } from 'react'
import fileUploadStyle from '../auth/Register'

const Profile = () => {

    const delteplaylist = (id) => {
        console.log(id);
    }

    const user = {
        name: "Abhishek kumar",
        email: "adfgdh@gmai.com",
        createat: String(new Date().toISOString()),
        role: "admi",
        subscreption: {
            status: "no active"
        },
        playlist: [
            {
                course: "dfdsfd",
                poster: "https://imgv3.fotor.com/images/homepage-feature-card/adjust-image.jpg"
            },
        ]

    }

    const ImageChangeSubmitHandler=(e,image)=>{
        e.preventDefault();
        console.log(image);
    };

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Container minH={'95vh'} maxW={'container.lg'} py='8'>
            <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
            <Stack
                justifyContent={'flex-start'}
                alignItems="center"
                direction={['column', 'row']}
                spacing={['8', '16']}
                padding='8'
            >
                <VStack>
                    <Avatar boxSize={'48'} />
                    <Button onClick={onOpen} colorScheme={'yellow'} variant='ghost'>
                        Change Photo
                    </Button>
                </VStack>

                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack >
                        <Text children="Name:" fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children="Name:" fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children="CreateAt:" fontWeight={'bold'} />
                        <Text children={user.createat.split('T')[0]} />
                    </HStack>

                    {
                        user.role !== 'admin' && (
                            <HStack>
                                <Text children='Subscreption' />

                                {
                                    user.subscreption.status === "active" ? (
                                        <Button colorScheme={'yellow'}>
                                            Cancle Subscreption
                                        </Button>
                                    ) : (<Link to={'/subscribe'}>
                                        <Button colorScheme={'yellow'}>Subscribe</Button>
                                    </Link>)
                                }
                            </HStack>
                        )
                    }

                    <Stack alignItems="center"
                        direction={['column', 'row']}>

                        <Link to='/updateprofile'>
                            <Button>UpdateProfile</Button>
                        </Link>
                        <Link to='/changepassword'>
                            <Button>ChangePassword</Button>
                        </Link>
                    </Stack>

                </VStack>



            </Stack>
            <Heading children='PlayList' />
            {
                user.playlist.length >= 0 && (
                    <Stack direction={['column', 'row']} alignItems='center' flexWrap={'wrap'} p='4'>
                        {
                            user.playlist.map((element, index) => (

                                <VStack w={'48'} m='2'>
                                    {<Image
                                        boxSize={'full'}
                                        objectFit="contain"
                                        src={element.poster} />}

                                    <HStack >


                                        <Link to={`/course/${element.course}`}>
                                            <Button>{element.course}</Button>
                                        </Link>

                                        <Button onClick={() => delteplaylist(element.course)}>
                                            <RiDeleteBin7Fill />
                                        </Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }

            <ChangePhotoBox 
            ImageChangeSubmitHandler={ImageChangeSubmitHandler}
            isOpen={isOpen} 
            onClose={onClose} />
        </Container>
    )
}

export default Profile

function ChangePhotoBox({ isOpen, onClose, ImageChangeSubmitHandler }) {

    const [image, setImage] = useState();
    const [imgpre, setImgprev] = useState();

    const ChangeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        // console.log(file);


        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgprev(reader.result);
            setImage(file)
        }
    }

    const onCloseHandler = ()=>{
        onClose();
        setImgprev("");
        setImage("");
    }

    return(
        <Modal isOpen={isOpen} onClose={onCloseHandler}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={e =>ImageChangeSubmitHandler(e,image)}>
                            <VStack spacing={'8'}>
                                {
                                    imgpre && <Avatar src={imgpre} boxSize={'48'} />
                                }
                                <Input
                                    type={'file'}
                                    css={{ '&::file-selector-button': fileUploadStyle }}
                                    onChange={e=>ChangeImage(e)}
                                />

                                <Button type='submit' width={'full'} colorScheme={'yellow'}>Submit</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'3'} onClick={onCloseHandler}>
                        Cancle
                    </Button>
                </ModalFooter>

            </ModalContent>
        </Modal>
    )
}