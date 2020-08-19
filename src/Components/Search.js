import React from 'react';

const Search = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type='text' value={props.value} placeholder='Enter City' onChange={props.change} />
        </form>
    );
};

export default Search;