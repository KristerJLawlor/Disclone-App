import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',  //url is server url http://localhost:3000
    
});

export default instance;