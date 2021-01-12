import React from 'react';
import NavbarSub from './NavbarSub';
import { HStack, Text, Flex, Box, Spacer, Circle } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
    render() {
        return (
            <Box 
                zIndex="10"
                px="40px"
                mt="24px"
            >
                <Flex mb="10px">
                    <Box w="70px" h="40px" textStyle="navbarIcons">
                        <Flex>
                            <Box>
                                <FontAwesomeIcon icon={faAngleLeft} size="4x" />
                            </Box>
                            <Spacer />
                            <Box>
                                <FontAwesomeIcon icon={faAngleRight} size="4x"/>
                            </Box>
                        </Flex>
                    </Box>
                    <Spacer />
                    <HStack spacing="160px" textStyle="navbarMain">
                        <Box>
                            <Text>FOR YOU</Text>
                        </Box>
                        <Box>
                            <Text>LIBRARY</Text>
                        </Box>
                        <Box>
                            <Text>BROWSE</Text>
                        </Box>
                    </HStack>
                    <Spacer />
                    <Box w="100px" h="40px" textStyle="navbarIcons">
                        <Flex>
                            <Box mt="5px">
                                <FontAwesomeIcon icon={faSearch} size="3x" />
                            </Box>
                            <Spacer />
                            <Box>
                                <Circle 
                                    size="40px" 
                                    bgImage="url('https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/88/a1/d9/88a1d9eb-3144-eebf-c1cb-1fed252042b6/source/1200x1200bb-60.jpg')"
                                    bgSize="100%"
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <NavbarSub/>
                <Box w="100%" h="40px" />
            </Box>
        );
    }
}

export default Navbar;