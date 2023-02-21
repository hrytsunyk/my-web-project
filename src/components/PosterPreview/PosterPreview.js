import {imageURL} from "../../configs";

import css from './PosterPreview.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
import {useEffect} from "react";

const MoviesListCard = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const stringId = id.toString()


    const dispatch = useDispatch();
    const navigate = useNavigate();



    const getMovieInfo = (movieId) => {
        dispatch(movieActions.getInfo({movieId}))
        navigate('/movie')
    };


    return (
        <div>

            <div className={css.PosterPreview} onClick={() => getMovieInfo(stringId)}>
                <div className={css.titleDiv}>
                    <h4>{title}</h4>
                </div>
                <img src={`${imageURL}${poster_path}`} alt={title}/>
                <StarsRating value={vote_average}/>
            </div>

        </div>
    );
};

export {MoviesListCard};