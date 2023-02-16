import { Button, VStack} from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEye2Fill,  RiUserFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation();
    return (
        <VStack
            spacing={'8'}
            p='16'
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
                <LinkButton url={'dashboard'} Icon={RiDashboardFill} text='Dashboard' 
                 active={location.pathname === 'admin/dashboard'}/>

                <LinkButton url={'createcourse'} Icon={RiAddCircleFill} text='Create Courses' 
                active={location.pathname === 'admin/createcourse'}
                />

                <LinkButton url={'admincourses'} Icon={RiEye2Fill} text='AdminCourses' 
                active={location.pathname === 'admin/admincourses'}
                />
                <LinkButton url={'user'} Icon={RiUserFill} text='User'
                active={location.pathname === 'admin/user'}
                />

        </VStack>
    )
}

export default Sidebar

const LinkButton = ({url , Icon ,text ,active}) => {

    return(
    <Link to={`/admin/${url}`}>
        <Button fontSize={'larger'} variant='' colorScheme={active ? 'purple' : ''}>
            <Icon style={{ magin: '4px' }} />
            {text}
        </Button>
    </Link>
    )
}