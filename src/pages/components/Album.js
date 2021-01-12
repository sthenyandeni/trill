import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

class Album extends React.Component {
    render() {
        return (
            <Box width="200px" mb="20px" zIndex="10">
                <Image
                    src="https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/88/b9/b2/88b9b2ba-75b1-8ee8-5903-928ce707e20e/source/1200x1200bb-60.jpg"
                    alt="Edubot image"
                    width="100%"
                    height="200px"
                    mb="0px"
                />
                <Text textStyle="albumMain">Man On The Moon</Text>
                <Text textStyle="albumSub">Kid Cudi</Text>
            </Box>
        );
    }
}

export default Album;