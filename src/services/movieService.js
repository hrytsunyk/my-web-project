import {axiosService} from "./axiosService";
import {urls} from "../configs";


const movieService = {
    getMovies: (page=1)=>axiosService.get(urls.movies.moviesURL, {params:page})
}


export {
    movieService
}