import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {NavLink} from "react-router-dom";
import {Link} from "@mui/material";
import css from './SearchingListCard.module.css';


const SearchingListCards = ({value}) => {
    const {title, poster_path, vote_average, id} = value;

    const stringId= id.toString();

if (poster_path !==null) {
    return (
        <Link to={`search/movie/${stringId}`}>
            <div className={css.SearchingListCard}>
                <PosterPreview poster={poster_path} title={title}/>
                <StarsRating value={vote_average}/>
            </div>
        </Link>
    );
}



};

export {SearchingListCards};