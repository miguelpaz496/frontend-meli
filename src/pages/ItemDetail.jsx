import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from "../components/Breadcrumb"
import { Details } from "../components/Details"
import { getItem } from "../Services/ItemService"


export const ItemDetail = () => {
    
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getItem(id);
            setItem(data.data.item);
        }

        fetchData().catch(console.error);;
    }, [])

    return (
        <div>
            <Breadcrumb/>
            <div className='paper'>
                {
                    item && item.title ? 
                    <Details data={item}/>
                    : 
                    <div>no encontrado</div>
                }
            </div>
        </div>

    )
}