import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.2.108:33330'
});

export default api;