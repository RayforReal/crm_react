import { THttpOption } from './types';

const headers = { 'Content-Type': 'application/x-www-form-urlencoded', appId: '8', };
const baseURL = 'https://192.168.213.20'

export const httpFetch = <T>(url: string, option?: THttpOption): Promise<T> => {
    return new Promise((resolve, reject) => {
        fetch(baseURL + url, {
            method: option ? option.method || 'get' : 'get',
            headers
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    if (data.code === 20000) {
                        resolve(data.data)     
                    }
                });
            }
        }).catch(error => {
            reject(error)
            console.error(error);
        });
    })
}



