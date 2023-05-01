import {
    View, Text, Flex, Heading
} from '@adobe/react-spectrum'
import React from 'react';
import { Link } from "react-router-dom";

export const NavigationBar = () => {
    return (
        <Flex id="navigation-bar" direction="row">
            {/*title and subtitle*/}
            <Link id="magazine-title-link" to="/">
                <Flex direction="column">
                    <Heading id="magazine-title" level={1}>LEGAL FICTION</Heading>
                    <Heading id="magazine-subtitle" level={3}>A Magazine</Heading>
                </Flex>
            </Link>
            {/*navigation links*/}
            <View id="navigation-links" alignSelf="center">
                <Link id="navigation-link" to="about">ABOUT</Link>
            </View>
        </Flex>
    );
}

export default NavigationBar;
