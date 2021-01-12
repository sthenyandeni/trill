import React from 'react';
import { Box } from '@chakra-ui/react';
//import Albums from '../Albums';
import ForYou from '../ForYou';

class Content extends React.Component {
    render() {
        return (
            <Box
                px="40px"
            >
                <ForYou />
                <Box w="100%" h="100px" />
            </Box>
        )
    }
}

export default Content;