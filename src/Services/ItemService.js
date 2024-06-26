import axios from "axios";

const baseUrl = process.env.REACT_APP_API_MELI + "items"

export const searchItems = async (value) => {
    try {
        const response = await axios.get(baseUrl + `?search=${value}`);
        return response
    } catch (error) {
        console.error(error);
    }
}

export const getItem = async (id) => {
    try {
        const response = await axios.get(baseUrl + `/${id}`);
        return response
    } catch (error) {
        console.error(error);
    }
}