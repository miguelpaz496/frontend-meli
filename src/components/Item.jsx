import { priceFormat, getCity } from "../utils/functions"
import iconShipping from '../assets/img/ic_shipping.png'
import '../styles/Item.scss'

export const Item = ({data}) => {

    return (
        <div className='card-item'>
            <div className='card-image'>
                <img className='item-image' src={data.picture} alt={data.title} />
            </div>
            <div className='item-information'>
                <div className="row">
                    <p className='price'>$ {priceFormat(data.price.amount)}</p>
                    {
                        data.free_shipping && <img className='shipping-icon' src={iconShipping} alt="" />
                    }
                </div>
                <p className='col-8 title'>{data.title}</p>
            </div>
            <p className='col-1 city'>{getCity()}</p>
            <div className='col-2'></div>
        </div>
    )
}