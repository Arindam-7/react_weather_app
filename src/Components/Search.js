import React from 'react';

const Search = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type='text' value={props.value} placeholder='Enter City' onChange={props.change} required />
            <input type="submit" value="Search" />
        </form>
    );
};

export default Search;