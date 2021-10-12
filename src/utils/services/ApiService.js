import fetch from 'isomorphic-fetch';
import React from 'react';
import store from '../../configureStore';

export default function ApiService(config) {
    function checkStatus(responseValue, serviceUrl) {
        const response = responseValue;
        if (config.responseType === 'arraybuffer' && response.status === 200) {
            return response.arrayBuffer().then(data => new Promise((resolve) => {
                const dataValue = {
                    data,
                    status: response.status,
                };
                return resolve(dataValue);
            }));
        }
        return response.json().then((data) => {
            if (response.status === 200) {
                return new Promise((resolve) => {
                    const dataValue = {
                        data,
                    };
                    return resolve(dataValue);
                });
            }
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        });
    }

    const serviceUrl = config.url;
    delete config.url;
    if (['post', 'put'].includes(config.method.toLowerCase())) {
        config.body = config.data;
        delete config.data;
        if (config.body && !(config.body instanceof FormData)) {
            config.body = JSON.stringify(config.body);
            if (config.headers && !config.headers['Content-Type']) {
                config.headers['Content-Type'] = 'application/json';
            } else if (!config.headers) {
                config.headers = {
                    'Content-Type': 'application/json',
                };
            }
        }
    }

    return fetch(serviceUrl, config).then((res) => checkStatus(res, serviceUrl)).catch((error, data) => {
        store.dispatch({ type: 'HIDE_MAIN_LOADER' });
    });
};
