import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useParams} from "react-router-dom";
import {imageURL} from "../../configs";
import css from './MovieInfo.module.css';
import {StarsRating} from "../StarsRating/StarsRating";


const MovieInfo = () => {

    const {movieInfo} = useSelector(state => state.movies);


    const dispatch = useDispatch();
    const {movieId} = useParams();


    useEffect(() => {
        dispatch(movieActions.getInfo({movieId}))
    }, [dispatch])


    return (
        <div className={css.MovieInfoFather}>
            {movieInfo &&

                <div className={css.starsBottom}>

                    <div className={css.MovieInfo}>
                        <div>
                            <img className={css.PosterMovie}
                                 src={`${imageURL}${movieInfo.poster_path}`}
                                 alt={movieInfo.title}
                            />
                        </div>

                        <div className={css.description}>
                            <h3 className={css.PosterTitle}>{movieInfo.title}</h3>
                        </div>
                    </div>
                    <div className={css.RatingFather}>
                        <h4>Rating</h4>
                        <StarsRating value={movieInfo.vote_average}/>
                    </div>

                </div>


            }
        </div>
    );
};


export {MovieInfo};