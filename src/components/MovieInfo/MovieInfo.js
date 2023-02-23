import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice";
import {useParams} from "react-router-dom";
import {imageURL} from "../../configs";
import css from './MovieInfo.module.css';
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadges} from "../GenreBadge/GenreBadges";


const MovieInfo = () => {

    const {movieInfo} = useSelector(state => state.movies);
    // let {title} =movieInfo;
    console.log(movieInfo)

    const dispatch = useDispatch();
    const {movieId} = useParams();


    useEffect(() => {
        dispatch(movieActions.getInfo({movieId}))
    }, [dispatch])

    const genres = []

    for (const key in movieInfo) {
        if (key==='genres'){
            for (const genre of movieInfo[key]) {
                genres.push(genre.name)
            }
        }

    }


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
                            <div className={css.Budges}><h5>{genres}</h5></div>
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