import axios from 'axios';


const instance = axios.create({
    baseURL:'https://react-burger-builder-14875-default-rtdb.firebaseio.com/'
});


export default instance;