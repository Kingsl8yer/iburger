import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://iburger-70f9c.firebaseio.com/'
});

export default instance;