import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "../../../store/store";

const useListHooks = () => {
    const listDriverReducer = useSelector((state: RootState) => {
        return state.driverList;
    });
    let currentPage = 0;
    let dataList = [];
    const isOnSearch = listDriverReducer.onSearch;
    if (listDriverReducer) {
        currentPage = listDriverReducer.currentPage;
        const isOnSearch = listDriverReducer.onSearch;
        const usedDataSource = isOnSearch ? listDriverReducer.filteredData : listDriverReducer.arrayListDriver
        dataList = (usedDataSource).slice(currentPage * 5, (currentPage * 5) + 5);
    }
    const dispatch = useDispatch();

    return {
        dataList,
        isOnSearch,
        currentPage,
        dispatch
    };
};

export default useListHooks;