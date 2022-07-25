import {HeaderContainer} from "~/component/ui/DriverListHeader/driver-list-header.styled";
import {DebounceInput} from "react-debounce-input";
import {actions as driverListReduxAction} from '../../../store/driverListReducer';
import {useDispatch} from "react-redux";
import {useCallback} from "react";

function DriverListHeader() {
    const dispatch = useDispatch();
    const onChangeSearch = useCallback((e : any) => {
        e.preventDefault();
        dispatch(driverListReduxAction.setFilteredData(e.target.value))
    }, [dispatch])

    return (
        <HeaderContainer>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={{color: "red", fontSize: '2rem'}}>Driver Management</span>
                <span style={{color: "black"}}>Data Driver yang bekerja dengan anda</span>
            </div>
            <div style={{marginLeft: "auto", marginRight: '4px'}}>
                <span style={{marginRight: '4px'}}>Cari Driver:</span>
                <DebounceInput debounceTimeout={500} onChange={onChangeSearch}/>
            </div>
        </HeaderContainer>
    )
}

export default DriverListHeader;