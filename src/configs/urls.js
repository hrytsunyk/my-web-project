
const baseURL = 'https://api.themoviedb.org/3';
const imageURL = 'https://image.tmdb.org/t/p/w500/';

const discover= '/discover';
const movies= '/movie';
const genres= '/genre';
const search = '/search'

const urls = {
    movies: {
        moviesURL: `${discover}${movies}`,
        genresURL: `${genres}${movies}/list`,
        moviesID: `${movies}`
    },
    searchURL: search
}

export {
    baseURL,
    urls,
    imageURL
}