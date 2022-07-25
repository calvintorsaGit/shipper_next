import React from "react";
import {Dispatch} from "redux";

export type PaginationButtonProps = {
    disabled: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export type PaginationHooksType = {
    currentPage: number,
    maxPage: number,
    dispatch: Dispatch
}