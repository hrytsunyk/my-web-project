import { Rating} from '@mui/material';
import {useSelector} from "react-redux";

const StarsRating = ({value}) => {

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








