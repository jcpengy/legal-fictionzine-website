import {
    View, Heading, Text
} from '@adobe/react-spectrum'
import React from 'react';

const Submission = ({submission}) => {
    return (
        <View>
            <Heading id="submission-title" level={1}>{submission.title}</Heading>
            <Heading id="submission-author" level={4}>{submission.author}</Heading>
            <div id="submission-text" style={{columnCount: submission.columnCount}}>
                {submission.text}
            </div>
            {
                submission.images.map(image => (
                    <img id={"submission-image-" + image.size} key={image.url} src={"/submission_images/" + image.url} alt={image.alt}/>
                ))
            }
            <div id="submission-footnote">{submission.footnote}</div>
        </View>
    );
}

export default Submission;

