import {useSelector} from "react-redux";

import {SearchingListCards} from "../SearchingListCard/SearchingListCards";
import css from './SearchingList.module.css'
import {CircularProgress} from "@mui/material";


const SearchingList = () => {
const {searchResult,loading}=useSelector(state => state.search);


    return (
        <div className={css.SearchingListFather}>

            <div className={css.SearchingList}>
                {searchResult && searchResult.map((value, index) => <SearchingListCards key={index} value={value}/>)}
                {loading && <div className={css.loading}><CircularProgress disableShrink/></div>}
            </div>

        </div>
    );
};

export {SearchingList};