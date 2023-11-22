import axios from "axios";

const apiSocialSearch = axios.create({
    baseURL: 'https://api.social-searcher.com/v2/search?key=eafb8f9238c71f590eefe3e4f0a5275c&'
})

export default apiSocialSearch