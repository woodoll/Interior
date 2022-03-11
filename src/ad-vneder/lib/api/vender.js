import axios from 'axios';

export const vender = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
