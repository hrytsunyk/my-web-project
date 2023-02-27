import { Rating} from '@mui/material';

const StarsRating = ({value}) => {

    return (
        <div>

            <Rating
                name="text-feedback"
                value={value?value/2:4}
                readOnly
                precision={0.1}
            />
        </div>
    );
};

export {StarsRating};








