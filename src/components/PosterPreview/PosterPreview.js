import {imageURL} from "../../configs";

import css from './PosterPreview.module.css'


const PosterPreview = ({poster,title}) => {
    
    return (
        <div>

            <div className={css.PosterPreview}>
                <img className={css.PostersList} src={`${imageURL}${poster}`} alt={title}/>
            </div>

        </div>
    );
};

export {PosterPreview};