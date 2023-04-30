import {
    View, Flex, Heading, Text, Link
} from '@adobe/react-spectrum'
import React from 'react';
import {Submissions} from '../data/submissions';
import Submission from '../components/Submission';

const Home = () => {
    const issue = {
        number: Submissions[0].issueNumber,
        date: Submissions[0].issueDate
    }
    return (
        <Flex id="wrapper" direction="column">
            <View id="submissions">
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

