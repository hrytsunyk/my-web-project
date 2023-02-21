import {imageURL} from "../../configs";

import css from './PosterPreview.module.css'
import {StarsRating} from "../StarsRating/StarsRating";

const MoviesListCard = ({movie}) => {
    const {title,poster_path, vote_average} = movie;

    return (
        <div>

            <div className={css.PosterPreview}>
                <div className={css.titleDiv}><h4>{title}</h4></div>
                <img src={`${imageURL}${poster_path}`} alt={title}/>
                <StarsRating value={vote_average}/>
            </div>

        </div>
    );
};

export {MoviesListCard};