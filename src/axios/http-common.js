import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `http://pinchin-app.com/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})
