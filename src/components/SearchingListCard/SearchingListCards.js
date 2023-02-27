import {PosterPreview} from "../PosterPreview/PosterPreview";
import {Link} from "@mui/material";
import css from './SearchingListCard.module.css';
import {NavLink} from "react-router-dom";


const SearchingListCards = ({value}) => {
    const {title, poster_path, vote_average, id} = value;

    const stringId= id.toString();

if (poster_path !==null) {
    return (
        <NavLink to={`/movie/${stringId}`}>
            <div className={css.SearchingListCard}>
                <PosterPreview poster={poster_path} title={title} vote={vote_average}/>
            </div>
        </NavLink>
    );
}



};

export {SearchingListCards};