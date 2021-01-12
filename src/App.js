import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Navbar from './pages/components/Navbar';
import Player from './pages/components/Player';
import Content from './pages/components/Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bgImage: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/88/b9/b2/88b9b2ba-75b1-8ee8-5903-928ce707e20e/source/1200x1200bb-60.jpg"}
  }

  changeBackground(url) {
    this.setState({bgImage: url});
  }

  render() {
    return(
      <Box 
        w="100%" 
        h="100%"
      >
        <Box 
          w="100%" 
          h="100%" 
          bg="gray.700" 
          pos="fixed" 
          zIndex="0" 
          opacity="0.5"
        />
        <Image
          src={this.state.bgImage}
          alt="background image"
          w="100%"
          h="100%"
          pos="fixed"
          zIndex="-1"
          style={{filter: "blur(50px)"}}
        />
          <Flex direction="column">
            <Navbar />
            <Content />
            <Player />  
          </Flex>
      </Box>
    )
  }
}

export default App;
