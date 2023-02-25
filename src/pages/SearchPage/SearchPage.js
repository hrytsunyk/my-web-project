import {SearchForm} from "../../components/SearchForm/SearchForm";
import {useSelector} from "react-redux";
import {PosterPreview} from "../../components";

const SearchPage = () => {

    const {searchResult} = useSelector(state => state.search);

    console.log(searchResult)

    return (
        <div>
            {/*<PosterPreview poster={value}/>*/}
        </div>
    );
}

export {SearchPage};