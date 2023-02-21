import { Rating} from '@mui/material';
import {useSelector} from "react-redux";

const StarsRating = ({value}) => {

   // const{movies}= useSelector(state => state.movies)

    console.log(value)
    return (
        <div>

            <Rating
                name="text-feedback"
                value={value/2}
                readOnly
                precision={0.1}
            />
        </div>
    );
};

export {StarsRating};








