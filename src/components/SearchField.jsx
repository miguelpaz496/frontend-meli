import {useState} from 'react'
import iconSearch from '../assets/img/ic_Search.png'
import logoMeli from '../assets/img/Logo_ML.png'

import '../styles/SearchField.scss'



export const SearchField = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div className='box'>
            <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10 search-box'>
                <img src={logoMeli} className='meli-icon' alt="mercado-libre-logo" />
                    <div className='group-field'>
                        <input
                        type="text"
                        className='search-field'
                        placeholder="Nunca dejes de buscar"
                        onChange={handleChange}
                        value={searchInput} />
                        <button className='btn btn-search'>
                            <img src={iconSearch} alt="search-icon" />
                        </button>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
            </div>
        </div>

    )
}