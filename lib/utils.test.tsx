import {filterDriverName} from "../lib/utils";
import {getListDriver} from "../lib/query-lib";

const dummy = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Jayden",
                "last": "Mitchell"
            },
            "location": {
                "street": {
                    "number": 5625,
                    "name": "Oak St"
                },
                "city": "Chelsea",
                "state": "Québec",
                "country": "Canada",
                "postcode": "R7V 7V4",
                "coordinates": {
                    "latitude": "-70.2892",
                    "longitude": "-32.2633"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "jayden.mitchell@example.com",
            "login": {
                "uuid": "7a48a2c5-b571-4aee-908a-fc52d1744420",
                "username": "lazymouse974",
                "password": "1269",
                "salt": "SuEhP55v",
                "md5": "195c90bb543b658da4b67ff5dc448ccc",
                "sha1": "753af74ac25f9bbce343bf1f452ab10fbf384be8",
                "sha256": "33b4d86013d134131f57540a9f24453eab510df9e86c9188200a68ff2a1af985"
            },
            "dob": {
                "date": "1987-12-18T02:29:56.649Z",
                "age": 34
            },
            "registered": {
                "date": "2008-08-31T18:37:23.217Z",
                "age": 13
            },
            "phone": "V14 H22-1031",
            "cell": "W49 Q92-9512",
            "id": {
                "name": "SIN",
                "value": "856149612"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/15.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
            },
            "nat": "CA"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Theodore",
                "last": "Spencer"
            },
            "location": {
                "street": {
                    "number": 9209,
                    "name": "Smokey Ln"
                },
                "city": "Medford",
                "state": "New Hampshire",
                "country": "United States",
                "postcode": 89314,
                "coordinates": {
                    "latitude": "-33.2132",
                    "longitude": "-132.5591"
                },
                "timezone": {
                    "offset": "+10:00",
                    "description": "Eastern Australia, Guam, Vladivostok"
                }
            },
            "email": "theodore.spencer@example.com",
            "login": {
                "uuid": "d6eaf3f8-1436-4bf3-ac3c-b679d6925fc9",
                "username": "silverbird988",
                "password": "aggies",
                "salt": "8TxCxhee",
                "md5": "c4d60afc0583566bcfe940955d6a7357",
                "sha1": "90c058cd3d98435aa958c5f8873874e316db9508",
                "sha256": "a4ab36b0078154a1e46829843e64851029801dfb4696e08f8be70488eefc3bec"
            },
            "dob": {
                "date": "1945-05-14T23:34:45.824Z",
                "age": 77
            },
            "registered": {
                "date": "2009-12-10T20:59:39.648Z",
                "age": 12
            },
            "phone": "(415) 965-9691",
            "cell": "(632) 361-2405",
            "id": {
                "name": "SSN",
                "value": "764-01-3370"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/43.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/43.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
            },
            "nat": "US"
        }
    ]
}


describe('filterDriverName', () => {
    test('should return 1 from dummy data', () => {
        // @ts-ignore
        const arr = getListDriver(dummy);
        const result = filterDriverName(arr, 'Jayden');
        expect(result.length).toBe(1);
    });
});