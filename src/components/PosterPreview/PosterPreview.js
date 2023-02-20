import {imageURL} from "../../configs";

import css from './PosterPreview.module.css'

const MoviesListCard = ({movie}) => {
    const {title,poster_path} = movie;

    return (
        <div>

            <div className={css.PosterPreview}>
                <div className={css.titleDiv}><h4>{title}</h4></div>
                <img src={`${imageURL}${poster_path}`} alt={title}/>
            </div>

        </div>
    );
};

export {MoviesListCard};