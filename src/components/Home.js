import {
    View, Flex, Text
} from '@adobe/react-spectrum'
import React from 'react';
import {Submissions} from '../data/submissions';
import Submission from '../components/Submission';

const Home = () => {
    return (
        <Flex id="wrapper" direction="column">
            <View id="content">
                {
                    Submissions[0].entries.map(entry => (
                            <Submission key={entry.id} submission={entry}/>
                        )
                    )
                }
            </View>
            <View id="footer">
                <Text>POEMS.PHOTOS.FICTION.ART.LAW.LOCAL NEWS.</Text>
            </View>
        </Flex>
    );
}

export default Home;

