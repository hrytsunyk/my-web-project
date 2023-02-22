import css from './MoviesListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {NavLink} from "react-router-dom";


const MoviesListCard = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;


    const movieId = id.toString();



    return (
        <NavLink to={`/movie/${movieId}`}>
            <div className={css.MoviesListCard}>

                <div className={css.titleDiv}><h6>{title}</h6></div>
                <PosterPreview poster={poster_path} title={title}/>
                <StarsRating value={vote_average}/>
            </div>
        </NavLink>
    );
};

export {MoviesListCard};