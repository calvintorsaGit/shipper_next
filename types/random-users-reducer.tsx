import {DriverObject} from "./random-users";


export type SetDriverListAction = {
    type: string
    driverList: Array<DriverObject>
}

export type DispatchType = (args: SetDriverListAction) => SetDriverListAction