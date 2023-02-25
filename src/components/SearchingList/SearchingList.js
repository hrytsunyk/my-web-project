import {useSelector} from "react-redux";

const SearchingList = () => {
const {searchResult}=useSelector(state => state.search);

    console.log(searchResult)

    return (
        <div>
            {searchResult.map(value => console.log(value))}
        </div>
    );
};

export {SearchingList};