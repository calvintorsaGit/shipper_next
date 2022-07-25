import {DriverObject} from "../types/random-users";

export const isMatchGlobalSearch = (transaction: string, searchInputValue: string) => {
    const searchInput = searchInputValue.toLowerCase();
    const transactionVal = transaction.toLowerCase();
    const pattern = new RegExp(`${searchInput}`, 'g');

    return pattern.test(transactionVal);
};

export const filterDriverName = (transaction: Array<DriverObject>, searchInputValue: string) =>
    transaction.filter(tx => isMatchGlobalSearch(tx.name, searchInputValue)
    );