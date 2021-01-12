import React from 'react';
import { Box, Spacer, HStack, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faList, faRandom, faRetweet, faComment } from '@fortawesome/free-solid-svg-icons';
//import { faVolumeDown, faVolumeDown, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

class PlayerOptions extends React.Component {
    render() {
        return (
            <Box pl="10px" textStyle="playerOptionsIcons" mr="30px" ml="auto" flex="1">
                {
                    //The ml and flex attributes were added to Box
                }
                <Flex>
                    <Spacer />
                    <HStack spacing="40px">
                        <Box h="27px">
                            <FontAwesomeIcon icon={faVolumeUp} size="2x" />
                        </Box>
                        <Box h="27px">
                            <FontAwesomeIcon icon={faList} size="2x" />
                        </Box>
                        <Box h="27px">
                            <FontAwesomeIcon icon={faRandom} size="2x" />
                        </Box>
                        <Box h="27px">
                            <FontAwesomeIcon icon={faRetweet} size="2x" />
                        </Box>
                        <Box h="27px">
                            <FontAwesomeIcon icon={faComment} size="2x" />
                        </Box>
                    </HStack>
                    <Spacer />
                </Flex>
            </Box>
        );
    }
}

export default PlayerOptions;