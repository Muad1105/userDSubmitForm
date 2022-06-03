import { message } from 'antd';
import axios from 'axios';
// import { StoredKeys } from '../constants';

export const setupInterceptors = () => {
    axios.interceptors.response.use(
        (response) => {
            return handleResponse(response);
        },
        (error) => {
            return handleResponse(error.response);
        }
    );
};

const handleResponse = (response) => {
    if (response && response.status && (response.status === 403 || response.status === 401)) {
        // const userDetails = localStorage.getItem(StoredKeys.USER_DETAILS);
        // if (userDetails) {
            // showError(response.status === 401 ? i18Get('Session expired', getLanguage()) : i18Get('Unauthorized access', getLanguage()));
            // localStorage.removeItem(StoredKeys.USER_DETAILS);
        //     window.location.href = '/';
        // } else {
        //     window.location.href = '/';
        // }
        Promise.reject(response);
    }
    if(response && response.status.toString().startsWith("4")) {
        message.error(response.data && response.data.message  ? response.data.message : "Something went wrong");
        return Promise.reject(response);
    }
    if(response && response.status.toString().startsWith("2")) {
        message.success("API success");
    }
    return response;
};