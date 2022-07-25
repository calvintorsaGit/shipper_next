import {DriverObject, RandomUserResponse} from "../types/random-users";
import qs from "query-string";
import {QueryParams} from "~/component/ui/DriverList/driver-list";

/**
 * Converts a string-like value from a query param to pure number.
 *
 * @param maybeString A string or an array of string
 */
export function parseNumber(maybeString?: string | string[]) {
    if (maybeString) {
        if (Array.isArray(maybeString)) {
            const [num] = maybeString;
            return Number(num);
        }

        return Number(maybeString);
    }

    return undefined;
}


export const getListDriver = (data: RandomUserResponse): Array<DriverObject> => {
    const results = data.results;
    const loadedData = [];

    for (const key in results) {
        loadedData.push({
            id: results[key].login?.uuid,
            username: results[key].login?.username,
            name: `${results[key].name?.title} ${results[key].name?.first} ${results[key].name?.last}`,
            email: results[key].email,
            phone: results[key].phone,
            dob: results[key]?.dob.date
        });
    }
    return loadedData;
}

export const buildURL = ({results = 30}: QueryParams = {}) =>
    qs.stringifyUrl({
        url: '/api/random-user',
        query: {
            results
        },
    });