import {imageURL} from "../../configs";

import css from './PosterPreview.module.css'


const PosterPreview = ({poster,title, mainId}) => {
    
    return (

            <div className={css.PosterPreview}>
                <img className={css.PostersImg} src={`${imageURL}${poster}`} alt={title} id={mainId} />

            </div>


    );
};

export {PosterPreview};