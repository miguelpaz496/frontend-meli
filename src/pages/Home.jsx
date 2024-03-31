import { Outlet } from "react-router-dom";
import { SearchField } from "../components/SearchField"

export const Home = () => {
    
    return (
        <div>
            <SearchField />
            <div className='container' >
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                        <Outlet />
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>

        </div>
    )
}