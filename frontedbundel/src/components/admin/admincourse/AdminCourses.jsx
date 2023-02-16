import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Td, Tbody, HStack, Button, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBack2Fill, RiDeleteBin7Fill } from 'react-icons/ri'
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal'

const AdminCourses = () => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    const courseDetailsHandler = (userId) => {
        console.log(userId);
        onOpen();
    }
    const deleteButtonHandler = (userId) => {
        console.log(userId);
    }

    const deleteLectureButtonHandler = (courseId, lectureId) => {
        console.log(courseId)
        console.log(lectureId)
    }

    const addLectureHandler = (e,courseId,title,description,video) => {
        e.preventDefault();
        console.log('hello');
    }

    const courses = [{
        id: 'a1',
        title: 'abhi',
        category: "web devolpment",
        poster: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukrj_JLycWh-YrCqXmkhMImNCsdvcowlaAwNpTk3F6pNXETsPKUV9Tp35CoI671VvUX8&usqp=CAU://www.google.com/imgres?imgurl=https%3A%2F%2Fimglarger.com%2FImages%2Fbefore-after%2Fai-image-enlarger-1-after-2.jpg&imgrefurl=https%3A%2F%2Fimglarger.com%2F&tbnid=ylJ3u-GCPxhicM&vet=12ahUKEwj165Gu7v78AhXB4nMBHQcMAjIQMyg7egQIARBK..i&docid=JN4kR0mqG41TvM&w=526&h=744&itg=1&q=image&client=firefox-b-d&ved=2ahUKEwj165Gu7v78AhXB4nMBHQcMAjIQMyg7egQIARBK"
        },
        cretor: "6 pack prog",
        views: "1200",
        lecture: '45',
    },
    {
        id: 'a2',
        title: 'abhi',
        category: "web devolpment",
        poster: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukrj_JLycWh-YrCqXmkhMImNCsdvcowlaAwNpTk3F6pNXETsPKUV9Tp35CoI671VvUX8&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU"
        },
        cretor: "6 pack prog",
        views: "1200",
        lecture: '45',
    },
    ]

    return (
        <Grid templateColumns={['1fr', '5fr 1fr']}
            height='100vh'
        >
            <Box p={['0', '8']} overflow='auto'>
                <Heading children='All Course'
                    textAlign={['center', 'left']}
                    my='16'
                    textTransform={'uppercase'}
                />

                <TableContainer w={['100wh', 'full']}>
                    <Table>
                        <TableCaption>ALL AVAILABLE COURSES IN DATABASE</TableCaption>

                        <Thead>
                            <Tr>
                                <Th>Id</Th>

                                <Th>Title</Th>
                                <Th>Category</Th>
                                <Th>Poster </Th>
                                <Th>Creator</Th>
                                <Th isNumeric>Views</Th>
                                <Th isNumeric>Lectures</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {courses.map(item =>
                                (<Row courseDetailsHandler={courseDetailsHandler} deletButtonHandler={deleteButtonHandler} key={item.id} item={item} />)
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
                <CourseModal
                    isOpen={isOpen}
                    onClose={onClose}
                    id={"sf2132"}
                    courseTitle="React Course"
                    addLectureHandler={addLectureHandler}
                    deleteButtonHandler={deleteLectureButtonHandler}
                />

            </Box>
            <Sidebar />
        </Grid>
    )
}

export default AdminCourses

export const Row = ({ item, courseDetailsHandler, deletButtonHandler }) => {
    return (
        <Tr>
            <Td>{item.id}</Td>
            <Td>{item.title}</Td>
            <Td>{item.category}</Td>
            <Td>
                <Image src={item.poster.url} /></Td>
            <Td>{item.cretor}</Td>
            <Td>{item.views}</Td>
            <Td>{item.lecture}</Td>
            {/* <Td>#{item.subscription.status === 'active' ? 'Active' : 'Active Not'}</Td> */}
            <Td isNumeric>
                <HStack>
                    <Button onClick={() => courseDetailsHandler(item.id)} variant={'outline'} color='purple.500'>View Lecture</Button>
                    <Button onClick={() => deletButtonHandler(item.id)}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}