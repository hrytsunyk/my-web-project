import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import {useNavigate} from "react-router-dom";
import {movieActions} from "../../redux/slices/movieSlice";
import {useEffect} from "react";
import {imageURL} from "../../configs";

const MovieInfo = ({movieInfo}) => {
    const {title, poster_path}  = movieInfo;

    return (
        <div>
            <div>
                <h4>{title}</h4>
                <img src={`${imageURL}.${poster_path}`} alt={title}/>
            </div>
        </div>
    );
};


export {MovieInfo};