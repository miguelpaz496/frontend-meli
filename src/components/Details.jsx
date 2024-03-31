import { priceFormat, decimalFormat } from "../utils/functions"
import '../styles/Details.scss'

export const Details = ({data}) => {

    return (
        <div>
            <div className='row'>
                <div className='details-image-box col-8'>
                    <img className='details-image' src={data.picture} alt={data.title} />
                </div >
                <div className='details-image-box info col-4'>
                    <p className='details-condition'>{data.condition} - {data.sold_quantity} vendidos</p>
                    <p className='details-title'>{data.title}</p>
                    <div className='row details-price-box'>
                        <p className='details-price'>$ {priceFormat(data.price.amount)} </p>
                        <p className='details-price-decimals'>{decimalFormat(data.price.decimals)}</p> 
                    </div>
                    <div className='btn-box'>
                        <button className='btn-comprar'>Comprar</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='description-box col-8'>
                    <p className='description-title'>Descripción del producto</p>
                    <p className='description-text'>
                        {data.description ? 
                            data.description 
                        : 
                            "No tiene descripcion"}
                    </p>
                </div >
                <div  className='col-4'>
                </div>

            </div>
        </div>

    )
}