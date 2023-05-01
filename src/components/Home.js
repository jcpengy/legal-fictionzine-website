import {
    View, Flex, Text
} from '@adobe/react-spectrum'
import React from 'react';
import {Submissions} from '../data/submissions';
import Submission from '../components/Submission';

const Home = () => {
    const currentIssue = {
        number: Submissions[0].issueNumber,
        date: Submissions[0].issueDate
    }
    return (
        <Flex id="wrapper" direction="column">
            <div id="sticky">
                <div id="issue-number-and-date">
                    Issue
                    <span>
                        <select name="issue-number" id="issue-number">
                            {
                                Submissions.map(issue => (
                                    <option value={issue.issueNumber}>{issue.issueNumber}</option>
                                ))
                            }
                        </select>
                    </span>
                    | {currentIssue.date}</div>
            </div>
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

