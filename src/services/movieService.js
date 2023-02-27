import {axiosService} from "./axiosService";
import {urls} from "../configs";


const movieService = {
    getMovies: (page=1)=>axiosService.get(urls.movies.moviesURL, {params:page}),
    getGenres: ()=> axiosService.get(urls.movies.genresURL),
    getMovieId:(movieId)=> axiosService.get(`${urls.movies.moviesID}/${movieId}`),
    searchMovie:(name)=> axiosService.get(urls.searchURL, {params:{query:name}})
}


export {
    movieService
}