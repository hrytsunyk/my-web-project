import {useSelector} from "react-redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const MovieListCard = () => {

    const {movieInfo} = useSelector(state => state.movies);

    console.log(movieInfo);

    return (
        <div>
            {<MovieInfo movieInfo={movieInfo}/>}
        </div>
    );
};

export {MovieListCard};