import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder-71f61.firebaseio.com/'
});

export default instance;