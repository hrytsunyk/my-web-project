import {MoviesList} from "../../components";
import css from './MoviesPage.module.css';
import {Outlet} from "react-router-dom";

const MoviesPage = () => {


    return (
        <div className={css.MoviesPage}>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};