
import css from './MoviesListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import {useNavigate} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {title, poster_path, vote_average,id} = movie;

    const toStringId = id.toString();

    const dispatch = useDispatch();
    const navigate = useNavigate();

const setMovieId = async (movieId) => {
  await dispatch(movieActions.getInfo({movieId}))
    navigate(`movie`)
}
    return (
            <div className={css.MoviesListCard} onClick={()=>setMovieId(toStringId)}>

                <div className={css.titleDiv}><h4>{title}</h4></div>
                <PosterPreview poster={poster_path} title={title}/>
                <StarsRating value={vote_average}/>

            </div>
    );
};

export {MoviesListCard};