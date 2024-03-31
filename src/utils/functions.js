export const priceFormat = (num) => {
    return new Intl.NumberFormat().format(num)
}

export const decimalFormat = (num) => {
    if(num <= 0){
        return "00"
    }
    if(num <= 10){
        return num + "0"
    }
    return num
}


export const getCity = () => {

    let city = ""
    let random = Math.floor((Math.random() * 4) + 1);

    switch (random) {
        case 1:
            city = "Cali"
            break;
        case 2:
            city = "Medellín"
            break;
        case 3:
            city = "Bogotá"
            break;
        case 4:
            city = "Cartagena"
            break;
    
        default:
            break;
    }
    return city
}