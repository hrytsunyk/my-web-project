import axios from "axios";
import {baseURL} from "../configs";

const access_token = 'eyJhbGciOiJIUzI1NiJ9.' +
    'eyJhdWQiOiJiYjdhZDY4NjMzNTVmMjQ5Nj' +
    'c5MTE2MTFkZTEwOWJmMSIsInN1YiI6IjYzZ' +
    'WVhZjQ0MWM2YWE3MDA5MWUwYTliYSIsInNjb3' +
    'BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.' +
    'TYw7Vb_kXs4ll8hrXitKyu0kaEXmP1ZPlZp3nvNlq2o';

const axiosService = axios.create({baseURL});


axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${access_token}`
    return config
})


export {
    axiosService,
}