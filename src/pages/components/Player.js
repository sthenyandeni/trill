import React from 'react';
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import Controls from './Controls';
import PlayerOptions from './PlayerOptions';

class Player extends React.Component {
    render() {
        return (
            <Box 
                w="100%" 
                h="100px" 
                position="fixed" 
                bg="gray.700"
                bottom="0px"
                zIndex="10"
            >
                <Image
                    w="100%"
                    bg="green.300"
                    zIndex="10"
                    pos="absolute"
                    src="https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/88/a1/d9/88a1d9eb-3144-eebf-c1cb-1fed252042b6/source/1200x1200bb-60.jpg"
                    style={{filter: "blur(10px)"}}
                />

                <Box 
                    w="100%"
                    h="100%"
                    bg="gray.700"
                    zIndex="11"
                    pos="absolute"
                    opacity="0.5"
                />

                <Box
                    w="100%"
                    h="100%"
                    pos="absolute"
                    zIndex="20"
                >
                    <Flex align="center">
                        {
                        //The mr, flex and display attributes were added
                        }
                        <HStack justifyContent="center" mr="auto" flex="1" display="flex">
                            <Image 
                                src="https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/88/a1/d9/88a1d9eb-3144-eebf-c1cb-1fed252042b6/source/1200x1200bb-60.jpg"
                                alt="Edubot"
                                h="100%"
                                w="100px"
                            />
                            <Box 
                                w="360px" 
                                h="100px" 
                                py="20px"

                            >
                                <Text textStyle="playerSong">10% (feat. Kali Uchis)</Text>
                                <Text textStyle="playerArtist">KAYTRANADA, Kali Uchis</Text>   
                            </Box>
                        </HStack>
                        <Controls />
                        <PlayerOptions />
                    </Flex>
                </Box>
            </Box>
        )
    }
}

export default Player;