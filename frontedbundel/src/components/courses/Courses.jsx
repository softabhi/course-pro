import { Container, Heading, HStack, Input, Button, Text, Stack, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../home/home.css'

const Course = ({view, title, imageSrc, id, addPlayListHandler, cretor, description, lectureCount}) => {
    return (
        <VStack className='course' alignItems={['center','flex-start']}>
            <Image src={imageSrc} boxSize={60} objectFit={'contain'} />
            <Heading
                textAlign={['center', 'left']}
                maxW={'200px'}
                fontFamily={'sans-serif'}
                children={title}
                noOfLines={3}
                size={'sm'}
            />
            <Text noOfLines={2} children={description} />
            <HStack>
                <Text fontWeight={'bold'}
                    textTransform={'uppercase'}
                    children={"Cretor"}
                />

                <Text fontFamily={'body'}
                    textTransform={'uppercase'}
                    children={cretor}
                />
            </HStack>

            <Heading
                textAlign={'center'}
                size="xs"
                children={`Lectures - ${lectureCount}`}
                textTransform="uppercase"
            />
            <Heading
                textAlign={'center'}
                size="xs"
                children={`Views - ${view}`}
                textTransform="uppercase"
            />

            <Stack direction={['column', 'row']}>
                <Link to={'/course/${id}'}>
                  
                  <Button 
                //    variant={'ghost'}
                   colorScheme={'yellow'}
                   onClick={() => addPlayListHandler(id)}
                  >
                   Watch Now
                  </Button>

                  <Button 
                   variant={'ghost'}
                   colorScheme={'yellow'}
                   onClick={() => addPlayListHandler(id)}
                  >
                   Add To PlayList
                  </Button>

                </Link>

            </Stack>
        </VStack>
    )
}



const Courses = () => {
    const categorise = [
        "Data Science", "Data Structure", "Web Devolpment", "Artificial Intelegence", "App Devolepment", "Game Devolpment"
    ]

    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");


    return (
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading children="All Courses" m={'8'} />

            <Input value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Search your favorate course...."
                type={"text"}
            />

            <HStack overflowX={'auto'} paddingY={'8'}>
                {categorise.map((item, index) => {
                    return (
                        <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
                            <Text>{item}</Text>
                        </Button>
                    )
                })}
            </HStack>

            <Stack
                direction={['column', 'row']}
                flexWrap='wrap'
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}
                marginTop="5%"
            >
               
                <Course 
                  
                  view={'sample'}
                  title={'sample'} 
                  imageSrc={'sample'}
                  id={"sample"}
                  addPlayListHandler={'sample'} 
                  cretor={2}
                  description={'sample'}
                  lectureCount={5}
                />
            </Stack>
        </Container>
    )
}

export default Courses