import {
    View, Heading, Text, Flex, Link
} from '@adobe/react-spectrum'
import React from 'react';

export const NavigationBar = () => {
    return (
        <View id="fixed-header">
            <Flex id="navigation-row" direction="row">
                <View id="title">
                    <Heading level={1} id="main-title">Legal Fiction:<br/><span
                        id="subtitle">A Magazine</span></Heading>
                </View>
                <View id="navigation-links" alignSelf="center">
                    <Link id="navigation-link" to="/">Home</Link>
                </View>
            </Flex>
            <Flex id="issue-row" direction="row">
                {/*<Text id="issue-number">Issue {issue.number} | {issue.date}</Text>*/}
            </Flex>
        </View>
    );
}

export default NavigationBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// const NavigationBar = () => {
//     return (
//         <div className="App">
//             {/*<Link to="/" >  Home  </Link>*/}
//             {/*<Link to="/about" >  About </Link>*/}
//         </div>
//     );
// };
//
// export default NavigationBar;
