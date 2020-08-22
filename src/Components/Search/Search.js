import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
    return(
        <form className='formClass' onSubmit={props.getWeather}>
            <input className='inputClass' type='text' value={props.value} placeholder='Enter City' onChange={props.change} required />
            <FontAwesomeIcon className='icon' icon={faSearch} />
        </form>
    );
};

export default Search;