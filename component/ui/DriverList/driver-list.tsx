import React, {ReactNode, useEffect} from 'react';
import DriverCard from "~/component/ui/DriverCard/driver-card";
import useSWR from 'swr';
import fetch from '~/lib/fetch';
import {DriverObject, RandomUserResponse} from "../../../types/random-users";
import Pagination from "~/component/ui/Pagination/pagination";
import {actions as setDataAction} from "../../../store/driverListReducer";
import DriverListHeader from "~/component/ui/DriverListHeader/driver-list-header";
import useListHooks from "~/component/ui/DriverList/driver-list.hooks";
import {buildURL, getListDriver} from "~/lib/query-lib";
import LoadingSpinner from "~/component/ui/LoadingSpinner/loading-spinner";
import {DataListDriverStyled, DriverListContainer} from "~/component/ui/DriverList/driver-list.typed";

export interface QueryParams {
    results?: number;
}

const _renderList = (dataList: Array<DriverObject>): ReactNode => {
    return dataList.map((el) => (
        <div key={el.id}>
            <DriverCard obj={el}/>
        </div>
    ));
}

function DriverList() {
    const hooks = useListHooks();

    const {data, error} = useSWR<RandomUserResponse, unknown>(
        () => hooks.dataList.length === 0 ? buildURL() : null, fetch);

    useEffect(() => {
        if (data && !error) {
            hooks.dispatch(setDataAction.setListTransaction(getListDriver(data)));
        }
    }, [data, error, hooks])

    if (hooks.dataList.length === 0) return <LoadingSpinner/>

    return (
        <DriverListContainer>
            <DriverListHeader/>
            <DataListDriverStyled>
                {hooks.dataList.length > 0 && _renderList(hooks.dataList)}
            </DataListDriverStyled>
            <Pagination/>
        </DriverListContainer>
    )
}

export default DriverList