import { useEffect, useState } from "react"
import { Item } from "../components/Item"
import { Breadcrumb } from "../components/Breadcrumb"
import { searchItems } from "../Services/ItemService"

export const SearchBox = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await searchItems();
            setItems(data.data.items);
        }

        fetchData().catch(console.error);;
    }, [])
    
    return (
        <div >
            <Breadcrumb/>
            <div className='paper'>
                { items && items.length > 0 && 
                    items.map( (item, i) =>{
                        return <Item key={i} data={item} />
                    })
                }
            </div>
        </div>
    )
}