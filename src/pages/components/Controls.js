import React from 'react';
import { Box, Flex, HStack, Text, Spacer, Circle } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPause } from '@fortawesome/free-solid-svg-icons';

class Controls extends React.Component {
    render() {
        return (
            <Box w="60%" flex="1">
                {
                    //The flex attribute was added to Box
                }
                <Flex>
                    <Spacer />
                    <HStack mt="5px" spacing="32px" textStyle="controlIcons">
                        <Box h="24px">
                            <FontAwesomeIcon icon={faBackward} size="2x" />
                        </Box>
                        <Box h="24px">
                            <FontAwesomeIcon icon={faPause}  size="2x" />
                        </Box>
                        <Box h="24px">
                            <FontAwesomeIcon icon={faForward} size="2x" />
                        </Box>
                    </HStack>
                    <Spacer />
                </Flex>
                <Box marginTop="5px">
                    <Flex mb="4px">
                        <Box>
                            <Text textStyle="controlTime">1:06</Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Text textStyle="controlTime">2:00</Text>
                        </Box>
                    </Flex>
                    <Box w="100%" h="5px" bg="gray.400" borderRadius="full">
                        <Circle 
                            bg="white"
                            size="12px"
                            pos="relative"
                            top="-4px"
                            left="35%"
                        />
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default Controls;