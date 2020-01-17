import React from 'react';

class RecordingsScreen extends React.Component {
	render() {

        let style = {
            textAlign: "left",
            padding: "8% 10%"
        }

		return(
			<div style={style}>
				<h1>Studio Recordings</h1>
                <h2><a href="https://drive.google.com/open?id=1yH__qFQq-LalBPwxsUGW5uHb5AwQaO0U" target="_blank">Click here for the Google Drive of studio recordings</a></h2>
                <p>Volunteer DJs have the ability to record their shows live in the studio 
                    as they're broadcasting. You can view them by clicking <a href="https://drive.google.com/open?id=1yH__qFQq-LalBPwxsUGW5uHb5AwQaO0U" target="_blank">here</a> or the link 
                    above. Keep in mind that each recording takes at most a few hours to be
                    uploaded online, so check back later if you can't find your recording.
                    Each recording is automatically named by '(Month_Day_Year) - (Hour_Minute)',
                    and can be downloaded or played back in the Google Drive link found above. 
                    Check out our schedule to see when certain shows are broadcasting!</p>

                <p> If you have any questions about recordings, or if they are not updated or broken,
                    send an email to our technology manager at <a href = "mailto: asuwrdtm@uw.edu">asuwrdtm@uw.edu</a>.</p>
			</div>
		)
	}
}

export default RecordingsScreen;