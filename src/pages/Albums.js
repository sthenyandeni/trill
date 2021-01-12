import React from 'react';
import { Grid } from '@chakra-ui/react';
import Album from './components/Album';

class Albums extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid w="100%" templateColumns="repeat(auto-fit, 240px)">
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                    <Album/>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Albums;