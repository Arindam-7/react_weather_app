import React from 'react';

const FetchedResult = (props) => {
    return(
        <div>
            Fetching Data from the server...
            <p>
                Temperature: {props.weather.temperature}
            </p>
        </div>
    );
};

export default FetchedResult;