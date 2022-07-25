import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {PaginationHooksType} from "~/component/ui/Pagination/pagination-type";

export const PaginationHooks = (): PaginationHooksType => {
    const listDriverReducer = useSelector((state: RootState) => {
        return state.driverList;
    });
    const maxPage = listDriverReducer.arrayListDriver.length;
    const currentPage = listDriverReducer.currentPage;
    const dispatch = useDispatch();

    return {
        currentPage,
        maxPage,
        dispatch
    }
}