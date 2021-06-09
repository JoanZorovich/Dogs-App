import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { searchBreedName} from '../../actions/actions'
import './searchbar.css'
import lupa2 from './lupa2.png'



function SearchBar () {

    const [search, setSearch] = useState(" ")

    const dispatch = useDispatch();

    function handleInputChange(event) {
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        dispatch(searchBreedName(search))
    }

  



    return (  
        <div>
            <form className="formStyle" onSubmit={handleSubmit}>
                <div className="searchContainer">
                    <input 
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Type to search a breed"
                        className="inputStyle"
                    ></input>
                    <button className="searchButton" type="submit">
                    <img src={lupa2} className="lupa" alt='lupa' />
                    </button>
                </div>
            </form>
        </div>
    )
}
 
export default SearchBar;