import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";


import {similarActions} from "../../redux/slices/similarSlice";
import {SimilarGenresListCard} from "../SimilarGenresListCard/SimilarGenresListCard";

import css from './SimilarGenresList.module.css';
import {CircularProgress} from "@mui/material";


const SimilarGenresList = () => {

    const dispatch = useDispatch();
    const [query] = useSearchParams();

    let {sortByGenres, loading} = useSelector(state => state.similar);


    const genreQuery = query.get('with_genres');


    useEffect(() => {
        dispatch(similarActions.getSimilar({genreQuery}))
    }, [dispatch, genreQuery])

    return (
        <div className={css.SimilarListFather}>
            <div className={css.SimilarList}>
                {sortByGenres &&
                    sortByGenres.map(
                        sortedByGenre => <SimilarGenresListCard key={sortedByGenre.id} movie={sortedByGenre}/>
                    )
                }
                {loading && <div className={css.loading}><CircularProgress disableShrink/></div>}

            </div>
        </div>
    );
};

export {SimilarGenresList};