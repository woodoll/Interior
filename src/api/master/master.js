import axios from 'axios';

export const master = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
