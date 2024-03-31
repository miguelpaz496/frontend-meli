import { useNavigate  } from "react-router-dom";
import { priceFormat, getCity } from "../utils/functions"
import iconShipping from '../assets/img/ic_shipping.png'
import '../styles/Item.scss'

export const Item = ({data}) => {

    const navigate = useNavigate();

    const showDetails =  () => {
        
        if (data) {
          return navigate(`/item/${data.id}`);
        }
        return null;
    };

    return (
        <div className='card-item'>
            <div className='card-image'>
                <img onClick={showDetails} className='item-image pointer' src={data.picture} alt={data.title} />
            </div>
            <div className='item-information'>
                <div className="row">
                    <p className='price'>$ {priceFormat(data.price.amount)}</p>
                    {
                        data.free_shipping && <img className='shipping-icon' src={iconShipping} alt="" />
                    }
                </div>
                <p onClick={showDetails} className='col-8 title pointer'>{data.title}</p>
            </div>
            <p className='col-1 city'>{getCity()}</p>
            <div className='col-2'></div>
        </div>
    )
}