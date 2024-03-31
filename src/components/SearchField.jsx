import {useState} from 'react'
import { useNavigate  } from "react-router-dom";
import iconSearch from '../assets/img/ic_Search.png'
import logoMeli from '../assets/img/Logo_ML.png'

import '../styles/SearchField.scss'



export const SearchField = () => {

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    };

    const goHome =  () => {
        setSearchInput("")
        return navigate('/')
    };

    const searchInApi = async () => {
        if(searchInput.length){
            return navigate(`/item?search=${searchInput}`)
        }
    };

    const onKeyPressHandler = async e => {
        e.preventDefault();
        if (e.key === 'Enter') {
            await searchInApi()
        }
    };

    return (
        <div className='box'>
            <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10 search-box'>
                <img onClick={goHome} src={logoMeli} className='meli-icon pointer' alt="mercado-libre-logo" />
                    <div className='group-field'>
                        <input
                        type="text"
                        className='search-field'
                        placeholder="Nunca dejes de buscar"
                        onChange={handleChange}
                        onKeyUp={onKeyPressHandler}
                        value={searchInput} />
                        <button onClick={searchInApi} className='btn btn-search pointer'>
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