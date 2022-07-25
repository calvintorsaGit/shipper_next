import React from "react";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import {
    PaginationLeftButton,
    PaginationContainer,
    PaginationRightButton
} from "~/component/ui/Pagination/pagination.styled";
import {actions as setStateAction} from "../../../store/driverListReducer";
import {PaginationButtonProps, PaginationHooksType} from "~/component/ui/Pagination/pagination-type";
import {PaginationHooks} from "~/component/ui/Pagination/pagination.hooks";

const setPreviousPage = (hooks: PaginationHooksType) => {
    const previousPage = hooks.currentPage - 1;
    if (previousPage >= 0) hooks.dispatch(setStateAction.setCurrentPage(previousPage))
}

const setNextPage = (hooks: PaginationHooksType) => {
    const nextPage = hooks.currentPage + 1;
    if (nextPage <= 5) hooks.dispatch(setStateAction.setCurrentPage(nextPage))
}

const getPaginationLeftProps = (hooks: PaginationHooksType): PaginationButtonProps => {
    return ({
        disabled: hooks.currentPage === 0,
        onClick: () => setPreviousPage(hooks)
    })
}

const getPaginationRightProps = (hooks: PaginationHooksType): PaginationButtonProps => {
    return ({
        disabled: ((hooks.currentPage + 1) * 5) + 5 > hooks.maxPage,
        onClick: () => setNextPage(hooks)
    })
}

function Pagination() {
    const hooks = PaginationHooks();

    return (
        <PaginationContainer>
            <PaginationLeftButton {...getPaginationLeftProps(hooks)}>
                <FaAngleLeft/>
                <span style={{color: "black"}}>Previous Page</span>
            </PaginationLeftButton>
            <PaginationRightButton {...getPaginationRightProps(hooks)}>
                <span style={{color: "black"}}>Next Page</span>
                <FaAngleRight/>
            </PaginationRightButton>
        </PaginationContainer>
    )
}

export default Pagination