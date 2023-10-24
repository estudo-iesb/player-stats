import axios from "axios";

const apiTheSports = axios.create({
    baseURL: 'https://www.thesportsdb.com/api/v1/json'
})

export default apiTheSports