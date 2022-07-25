import qs from 'query-string';
import { GetRandomUsersParams, RandomUserResponse } from 'types/random-users';
import fetch from './fetch';

const RANDOM_USER_API_ENDPOINT = 'https://randomuser.me';

export async function getRandomUsers({
                                         results = 30,
                                     }: GetRandomUsersParams) {
    const url = qs.stringifyUrl({
        url: `${RANDOM_USER_API_ENDPOINT}/api/1.3/`,
        query: {
            results
        },
    });

    const response: RandomUserResponse = await fetch(url);
    return response;
}
