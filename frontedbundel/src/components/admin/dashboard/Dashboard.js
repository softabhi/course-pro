import { Grid, Box, Text, Heading, Stack, HStack, Progress } from '@chakra-ui/react'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import Sidebar from '../Sidebar'
import { DoughnutChart, LineChart } from './Chart'

const Databox = ({ title, qty, qtyPercentage, profit }) => (
    <Box
        w={['full', '20%']}
        p='8'
        borderRadius={'lg'}
        boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
        <Text children={title} />
        <HStack spacing={'6'}>
            <Text fontWeight={'bold'} children={qty} />
            <HStack >
                <Text children={`${qtyPercentage}%`} />
                {profit ? (<RiArrowUpLine color='green' />) :
                    (<RiArrowDownLine color='red' />)
                }
            </HStack>
        </HStack>
        <Text opacity={0.6} children={'Since Last Month'} />
    </Box>
)

const Bar = ({ title, value, profit }) => (
    <Box py={4} px={['0', '20']}>
        <Heading size={'sm'} mb='2' children={title} />

        <HStack
            alignItems={'center'}
            w='full'
        >
            <Text children={profit ? `${value}%` : `-${value}%`} />
            <Progress w={'full'} value={profit ? value : 0} colorScheme='purple' />
            <Text children={`${value > 100 ? value : 100}%`} />
        </HStack>

    </Box>
)

const Dashboard = () => {
    return (
        <Grid templateColumns={['1fr', '5fr 1fr']}
            height='100%'
        >
            <Box boxSizing='border-box' py={'16'} px={['4', '0']}>
                <Text textAlign={'center'}

                    children={`Last change was on ${String(new Date()).split('G')[0]}`} />

                <Heading
                    children='Dashboard'
                    ml={['0', '16']}
                    mb="16"
                    textAlign={['center', 'left']}

                />

                <Stack
                    direction={['column', 'row']}
                    minH='24'
                    justifyContent={'space-evenly'}
                >
                    <Databox title="Views" qty={12132} qtyPercentage={45} profit={true} />
                    <Databox title="Users" qty={132} qtyPercentage={25} profit={true} />
                    <Databox title="Subscriptions" qty={121} qtyPercentage={65} profit={false} />
                </Stack>

                <Box
                    m={['0', '16']}
                    borderRadius='lg'
                    p={['0', '16']}
                    mt={['4', '16']}
                    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
                >
                    <Heading
                        textAlign={['center', 'left']}
                        size='md'
                        children='Views Graph'
                        pt={['8', '0']}
                        ml={['0', '16']}
                    />
                    <LineChart />
                </Box>
                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box

                        p='4'
                    >
                        <Heading textAlign={['center', 'left']}
                            size='md'
                            children={'Progress Bar'}
                            my='8'
                            ml={['0', '16']}
                        />

                        <Box>
                            <Bar title="Views" value={45} profit={true} />
                            <Bar title="Views" value={25} profit={true} />
                            <Bar title="Views" value={20} profit={false} />
                        </Box>


                    </Box>

                    <Box boxSizing='border-box' p={['0', '16']} py='4'>
                        <Heading children='Users' textAlign={'center'} size='md' mb={'4'} />
                        <DoughnutChart/>
                    </Box>

                </Grid>
            </Box>
            <Sidebar />
        </Grid>
    )
}

export default Dashboard