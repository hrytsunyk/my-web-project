import {NavLink} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './SimilarGenresListCard.module.css';

const SimilarGenresListCard = ({movie}) => {
    
    let {id,poster_path, original_title, vote_average} = movie;

    console.log(poster_path);

    return (
        <div className={css.MoviesListCard}>
            <NavLink to={`/movie/${id}`}>
                <PosterPreview poster={poster_path} title={original_title} vote={vote_average}/>
            </NavLink>
        </div>
    );
};

export {SimilarGenresListCard};