import {NavLink} from "react-router-dom";


import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MoviesListCard.module.css'


const MoviesListCard = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;


    const movieId = id.toString();


    return (
        <NavLink to={`/movie/${movieId}`}>

            {poster_path &&
                <div className={css.MoviesListCard}>
                    <PosterPreview poster={poster_path} title={title} id={id} vote={vote_average}/>
                </div>}

        </NavLink>
    );
};

export {MoviesListCard};