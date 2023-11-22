import axios from "axios";

const apiSocialSearch = axios.create({
    baseURL: 'https://api.social-searcher.com/v2/search?key=16c66efb34ffb1bd06ee0116db97147a&'
})

export default apiSocialSearch