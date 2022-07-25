export interface NameObject {
    title: string;
    first: string;
    last: string;
}

export interface DateOfBirth {
    date: string;
    age: string;
}

export interface RandomUserObject {
    name: NameObject;
    email: string;
    phone: string;
    dob: DateOfBirth;
    login? : LoginObject;
    id: string;
}

export interface DriverObject {
    id: string | undefined,
    username: string | undefined,
    name: string,
    email: string,
    phone: string,
    dob: string
}

export interface GetRandomUsersParams {
    results?: number;
}

export interface LoginObject {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface RandomUserResponse {
    results: RandomUserObject[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
}

// name, phone, email, bod