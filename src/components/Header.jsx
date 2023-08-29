import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return(
    <>
        <HStack p={'3'} shadow={'base'} bgColor={'whatsapp.700'}>
                <Button variant={'unstyled'} color={'white'}><Link to='/'>HOME</Link></Button>
                <Button variant={'unstyled'} color={'white'}p-right={'4'}><Link to='/exchanges'>EXCHANGES</Link></Button>
                <Button variant={'unstyled'} color={'white'}><Link to='/coins'>COINS</Link></Button>
        </HStack>
    </>
    )
};

export default Header