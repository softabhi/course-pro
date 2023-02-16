import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Td, Tbody, HStack, Button, } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBack2Fill, RiDeleteBin7Fill } from 'react-icons/ri'
import Sidebar from '../Sidebar'

const User = () => {

    const updateHandler = (userId)=>{
        console.log(userId);
    }
    const deleteButtonHandler = (userId)=>{
        console.log(userId);
    }

    const users = [{
        id:'a1',
        name: 'abhi',
        email: "service@gmail.com",
        role: "student",
        subscription: {
            status: 'active'
        }
    },
    {
        id: 'a2',
        name: 'monu',
        email: "service@gmail.com",
        role: "admin",
        subscription: {
            status: 'active'
        }
    },
    ]

    return (
        <Grid templateColumns={['1fr', '5fr 1fr']}
            height='100vh'
        >
            <Box p={['0', '16']} overflow='auto'>
                <Heading children='Create Course'
                    textAlign={['center', 'left']}
                    my='16'
                    textTransform={'uppercase'}
                />

                <TableContainer w={['100wh','full']}>
                    <Table>
                        <TableCaption>ALL AVAILABLE USERS IN SYSTEM</TableCaption>

                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscriptions</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {users.map(item =>
                                (<Row updateHandler={updateHandler} deletButtonHandler={deleteButtonHandler} key={item.id} item={item} />)
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>

            </Box>
            <Sidebar />
        </Grid>
    )
}

export default User

export const Row = ({item,updateHandler,deletButtonHandler}) => {
    return (
        <Tr>
            <Td>#{item.id}</Td>
            <Td>#{item.name}</Td>
            <Td>#{item.email}</Td>
            <Td>#{item.role}</Td>
            <Td>#{item.subscription.status === 'active' ? 'Active' : 'Active Not'}</Td>
            <Td isNumeric>
                <HStack>
                    <Button onClick={()=>updateHandler(item.id)} variant={'outline'} color='purple.500'>Chnage role</Button>
                    <Button onClick={()=>deletButtonHandler(item.id)}><RiDeleteBin7Fill/></Button>
                </HStack>
            </Td>
        </Tr>
    )
}