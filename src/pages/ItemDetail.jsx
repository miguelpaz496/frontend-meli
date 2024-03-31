import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from "../components/Breadcrumb"
import { Details } from "../components/Details"
import { getItem } from "../Services/ItemService"


export const ItemDetail = () => {
    
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getItem(id);
            setItem(data.data.item);
        }

        fetchData().catch(console.error);;
    }, [id])

    useEffect(() => {

        if(item){
            let list = [
                {
                    title : item.category,
                    to: ``
                },
                {
                    title : item.title,
                    to: `item/${item.id}`
                }
    
            ]
    
            setLinks(list)
        }

    }, [item])

    return (
        <div>
            {
                item && item && item.title &&
                <div>
                    <Breadcrumb data={links} />
                    <div className='paper'>
                        {
                            <Details data={item}/>
                        }
                    </div>
                </div>

            }

        </div>

    )
}