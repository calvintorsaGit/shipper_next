import typeToReducer from 'type-to-reducer';
import {createAction} from "@reduxjs/toolkit";
import {DriverObject} from "../types/random-users";
import {filterDriverName} from "~/lib/utils";

const SET_LIST_DRIVER = 'SET_LIST_TRANSACTION';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FILTERED_DATA = 'SET_FILTERED_DATA';

// Actions
const setListTransaction = createAction<Array<DriverObject>>(SET_LIST_DRIVER);
const setCurrentPage = createAction<number>(SET_CURRENT_PAGE);
const setFilteredData = createAction<string>(SET_FILTERED_DATA);

export const actions = {
    setListTransaction,
    setCurrentPage,
    setFilteredData
};

// Reducer
export const initialState = {
    arrayListDriver: [],
    filteredData: [],
    onSearch: false,
    currentPage: 0
};

const setListTransactionHandler = (state: any, action: any) => ({
    ...state,
    arrayListDriver: [...action.payload]
});

const setCurrentPageHandler = (state: any, action: any) => ({
    ...state,
    currentPage: action.payload
});

const setFilteredDataHandler = (state: any, action: any) => {
    const searchVal = action.payload;
    const isSearchValEmpty = searchVal === '';
    const filteredDataResult = filterDriverName(state.arrayListDriver, searchVal);

    return ({
        ...state,
        onSearch: !isSearchValEmpty,
        currentPage: isSearchValEmpty ? state.currentPage : 0,
        filteredData: filteredDataResult
    })
};

export default typeToReducer({
    [SET_LIST_DRIVER]: setListTransactionHandler,
    [SET_CURRENT_PAGE]: setCurrentPageHandler,
    [SET_FILTERED_DATA]: setFilteredDataHandler,
}, initialState);