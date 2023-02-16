import { Grid, Box, Container, Heading, VStack, Input, Select, Button,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import fileUploadStyle from '../../auth/Register'

const CreateCourses = () => {

    const categorise = [
        "Data Science", "Data Structure", "Web Devolpment", "Artificial Intelegence", "App Devolepment", "Game Devolpment"
    ]

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [cretedBy, setCreatedBy] = useState();
    const [image, setImage] = useState();
    const [imagePrev, setImagePrev] = useState();

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader;

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file)
        }
    }


    return (
        <Grid templateColumns={['1fr', '5fr 1fr']}
            // css={{cursor:`url(${cursor}),default`,}}
            minH='100vh'
        >
            <Box>
                <Container py={'16'}>
                    <form >
                        <Heading children='Create Course'
                            textAlign={['center', 'left']}
                            my='16'
                            textTransform={'uppercase'}
                        />

                        <VStack m={'auto'} spacing='8'>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type={'text'}
                                focusBorderColor={'purple.300'}
                                colorScheme={"blue"}
                                placeholder={'Title'}
                            />
                            <Input
                                value={cretedBy}
                                onChange={(e) => setCreatedBy(e.target.value)}
                                type={'text'}
                                focusBorderColor={'purple.300'}
                                colorScheme={"blue"}
                                placeholder={'Cretor Name'}
                            />
                            <Input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type={'text'}
                                focusBorderColor={'purple.300'}
                                colorScheme={"blue"}
                                placeholder={'description'}
                            />

                            <Select value={category} focusBorderColor={'purple.300'}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option>Category</option>
                                {categorise.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </Select>

                            <Input
                                required
                                accept='/images/*'
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
                                onChange={changeImageHandler}
                            />
                           {
                            imagePrev && (
                                <Image src={imagePrev} boxSize='64' objectFit='contain' />
                            )
                           }

                           <Button w={'full'} colorScheme='purple' type='submit'>Submit</Button>
                        </VStack>
                    </form>
                </Container>

            </Box>
            <Sidebar />
        </Grid >
    )
}

export default CreateCourses