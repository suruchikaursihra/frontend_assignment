/**
 * @author Suruchi Kaur Sihra
 * @file Api Service
 */

import Axios from 'axios';
/**
 * @description This functional component fetch data from API's
 */
export const CallApi = async (method = "GET", endpoint, payload) => {

    let request;
    let headers = {
        "Content-Type": "application/json",
    }

    if (method === "GET") {
        request = {
            params: payload
        }
    } else {
        request = payload
    }

    const data = await Axios({
        method: method,
        url: endpoint,
        headers: headers
    }).then(response => {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });

    return data;
}