import {axiosService} from "./axiosService";
import {urls} from "../configs";


const movieService = {
    getMovies: (page = 1) => axiosService.get(urls.movies.moviesURL, {params: page}),
    getMovieId: (movieId) => axiosService.get(`${urls.movies.moviesID}/${movieId}`),
    searchMovie: (name) => axiosService.get(urls.search.searchURL, {params: {query:name}}),
    getGenres: () => axiosService.get(urls.genres.genresURL),
    getByGenres: (genreId) => axiosService.get(urls.genres.similarURL, {params:{with_genres:genreId}})
}


export {
    movieService
}