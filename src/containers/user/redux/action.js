import axios from 'axios';
import config from '../../../config';
import Events from './events';

export const loadUser = () => ({
    type: Events.LOAD_USER,
    payload: axios.get(config.API_URL + 'todos')
});

