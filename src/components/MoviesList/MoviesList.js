import {useSelector} from "react-redux";
import css from './MoviesList.module.css';
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PagePagination} from "../PagePagination/PagePagination";
import React from 'react';
import ReactLoading from 'react-loading';
import {CircularProgress} from "@mui/material";


const MoviesList = () => {

    const {movies, loading} = useSelector(state => state.movies);
    const {searchResult} = useSelector(state => state.search)


    return (
        <div className={css.MoviesListFather}>
            <div className={css.MoviesList}>
                {movies && movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)}

                {loading && <div className={css.loading}><CircularProgress disableShrink/></div>}
            </div>

            <PagePagination/>

        </div>
    );
};

export {MoviesList};