import axios from 'axios';

export const user = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${sessionStorage.getItem('accessToken')}`,
  },
});
