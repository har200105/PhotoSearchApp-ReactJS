import axios from 'axios';
const API = "20740307-6c3b147f94e9c5fb31f4b8137";
const URL = 'https://pixabay.com/api/';


export const getImages = async(text, count) => {
    try {
        const data = await axios.get(`${URL}/?key=${API}&q=${text}&image_type=photo&per_page=${count}&safesearch=false`);
        return data;
    } catch (e) {
        console.log(e);
    }
}