import {useSelector} from "react-redux";
import css from './MoviesList.module.css';
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PagePagination} from "../PagePagination/PagePagination";
import React from 'react';
import ReactLoading from 'react-loading';
import {CircularProgress} from "@mui/material";
import {SearchingListCards} from "../SearchingListCard/SearchingListCards";
import {useNavigate} from "react-router-dom";


const MoviesList = () => {

    const {movies, loading} = useSelector(state => state.movies);
    const {searchResult} = useSelector(state => state.search)




    return (

        <div className={css.MoviesListFather}>
            <div className={css.MoviesList}>

                {/*{searchResult && searchResult.map((value,index) => <SearchingListCards key={index} value={value}/>)}*/}
                {searchResult?movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>):searchResult}

                {loading && <div className={css.loading}><CircularProgress disableShrink/></div>}

            </div>

            <PagePagination/>

        </div>
    );
};

export {MoviesList};