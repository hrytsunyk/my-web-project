import {useSelector} from "react-redux";


import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PagePagination} from "../PagePagination/PagePagination";

import {CircularProgress} from "@mui/material";
import css from './MoviesList.module.css';


const MoviesList = () => {

    const {movies, loading} = useSelector(state => state.movies);
    const {searchResult} = useSelector(state => state.search)


    return (

        <div className={css.MoviesListFather}>
            <div className={css.MoviesList}>

                {searchResult?movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>):searchResult}
                {loading && <div className={css.loading}><CircularProgress disableShrink/></div>}

            </div>

            <PagePagination/>

        </div>
    );
};

export {MoviesList};