import {useSelector} from "react-redux";
import css from './MoviesList.module.css';
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PagePagination} from "../PagePagination/PagePagination";



const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);



    return (
        <div className={css.MoviesListFather}>

            <div className={css.MoviesList}>
                {movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)}
            </div>

            <PagePagination/>

        </div>
    );
};

export {MoviesList};