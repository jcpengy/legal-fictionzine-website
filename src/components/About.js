import {
    Flex, Heading, View
} from '@adobe/react-spectrum'
import React from 'react';

const About = () => {
    return (
        <Flex id="wrapper" direction="column">
            <View id="content">
                <Heading id="about-title" level={1}>about the magazine</Heading>
            </View>
        </Flex>
    );
}

export default About;

