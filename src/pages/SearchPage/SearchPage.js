import {SearchForm} from "../../components/SearchForm/SearchForm";
import {useSelector} from "react-redux";
import {PosterPreview} from "../../components";
import {SearchingList} from "../../components/SearchingList/SearchingList";

const SearchPage = () => {



    return (
        <div>
            <SearchingList/>
        </div>
    );
}

export {SearchPage};