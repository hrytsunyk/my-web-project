import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {MoviesListCard} from "../PosterPreview/PosterPreview";
import {movieActions} from "../../redux/slices/movieSlice";
import css from './MoviesList.module.css';
import DayNightToggle from "react-day-and-night-toggle";



const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    const {page} = useSelector(state => state.movies);

    // console.log(page)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getMovies({page: query.get('page')}))
    }, [dispatch, query])




    // console.log(changeTheme)


    return (
        <div className={css.MoviesListFather}>
            {/*<GenreBadge/>*/}
            <div className={css.MoviesList}>
                {movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)}
            </div>
            <div className={css.Buttons}>
                <button>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        disabled={page <= 1}
                        onClick={() => setQuery(query => ({
                            page: +query.get('page') - 1
                        }))}
                    />
                </button>


                <button>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        disabled={page <= 0}
                        onClick={() => setQuery(query => ({
                            page: +query.get('page') + 1
                        }))}
                    />
                </button>
            </div>
        </div>
    );
};

export {MoviesList};