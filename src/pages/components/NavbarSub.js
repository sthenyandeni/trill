import React from 'react';
import { HStack, Text, Flex, Spacer, Box } from '@chakra-ui/react';

class NavbarSub extends React.Component {
    render() {
        return (
            <Flex textStyle="navbarSub">
                <Spacer />
                <HStack spacing="90px">
                    <Box>
                        <Text>Playlists</Text>
                    </Box>
                    <Box>
                        <Text>Albums</Text>
                    </Box>
                    <Box>
                        <Text>Songs</Text>
                    </Box>
                    <Box>
                        <Text>Artists</Text>
                    </Box>
                    <Box>
                        <Text>Podcasts</Text>
                    </Box>
                    
                </HStack>
                <Spacer />
            </Flex>
        )
    }
}

export default NavbarSub;