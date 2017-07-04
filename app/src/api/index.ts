// TODO: Move to constants
const BASE_URL = 'http://swapi.co/api/';

export default class SWAPIServiceApi {
    public static getList(path: string) {
        const url = (path.indexOf(BASE_URL) > -1) ? path : BASE_URL + path;

        const oReq = new Headers();
        oReq.append('User-Agent', 'swapi-javascript');
        oReq.append('Accept', 'application/json');

        const options = {
            method: 'GET',
            headers: oReq,
        };

        const request = new Request(url, options);

        return fetch(request)
            .then((resp) => (resp.ok) ? resp.json() : Promise.reject('error'))
            .then((data) => Promise.resolve(data))
            .catch((error) => Promise.reject(error));

    }
}
