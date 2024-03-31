import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import { Item } from "../components/Item"
import { Breadcrumb } from "../components/Breadcrumb"
import { searchItems } from "../Services/ItemService"

export const SearchBox = () => {

    const [searchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [links, setLinks] = useState([]);
    const value = searchParams.get("search")

    useEffect(() => {
        const fetchData = async () => {
            if(value){
                const data = await searchItems(value);
                setItems(data.data.items);
                setCategories(data.data.categories);
            }

        }
        fetchData().catch(console.error);
    }, [value])

    useEffect(() => {
        const createLinks = () => {
            let list = [
                {
                    title : categories[0],
                    to: `/item?search=${searchParams}`
                }
            ]
    
            setLinks(list)
        }
        createLinks()

    }, [categories, searchParams])
    
    return (
        <div >
            <Breadcrumb data={links} />
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