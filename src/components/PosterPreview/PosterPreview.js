import {imageURL} from "../../configs";

import css from './PosterPreview.module.css'
import {StarsRating} from "../StarsRating/StarsRating";


const PosterPreview = ({poster,title, vote_average}) => {
    
    return (
        <div>

            <div className={css.PosterPreview}>
                <img className={css.PostersImg} src={`${imageURL}${poster}`} alt={title}/>
            </div>

        </div>
    );
};

export {PosterPreview};