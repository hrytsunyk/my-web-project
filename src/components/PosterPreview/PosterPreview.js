import {imageURL} from "../../configs";

import css from './PosterPreview.module.css'
import {StarsRating} from "../StarsRating/StarsRating";


const PosterPreview = ({poster,title, mainId, vote}) => {
    
    return (

            <div className={css.PosterPreview}>
                <div className={css.titleDiv}><h6>{title}</h6></div>
                <img className={css.PostersImg} src={`${imageURL}${poster}`} alt={title} id={mainId} />
                <StarsRating value={vote?vote:4}/>

            </div>


    );
};

export {PosterPreview};