import {useSelector} from "react-redux";
import {SearchingListCards} from "../SearchingListCard/SearchingListCards";
import {useNavigate} from "react-router-dom";
import css from './SearchingList.module.css'
import {PagePagination} from "../PagePagination/PagePagination";

const SearchingList = () => {
const {searchResult,page,totalPages}=useSelector(state => state.search);

    console.log(searchResult)


    return (
        <div className={css.SearchingListFather}>

            <div className={css.SearchingList}>
                {searchResult && searchResult.map((value, index) => <SearchingListCards key={index} value={value}/>)}

            </div>


        </div>
    );
};

export {SearchingList};