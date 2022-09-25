import axios from "axios";

const instance = axios.create({
    baseURL: "https://casa-hackernews-api.herokuapp.com/"
})

export default instance;