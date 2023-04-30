import {
    View, Text, Flex
} from '@adobe/react-spectrum'
import React from 'react';
import { Link } from "react-router-dom";

export const NavigationBar = ({issue}) => {
    return (
        <View id="fixed-header">
            <Flex id="fixed-header-top" direction="row">
                {/*title and subtitle*/}
                {/*navigation links*/}
                <View id="navigation-links" alignSelf="center">
                    <Link id="navigation-link" to="/">Home</Link>
                    <Link id="navigation-link" to="about">About</Link>
                </View>
            </Flex>
            <Flex id="fixed-header-bottom" direction="row">
                <Text id="issue-number-and-date">Issue {issue.number} | {issue.date}</Text>
            </Flex>
        </View>
    );
}

export default NavigationBar;
