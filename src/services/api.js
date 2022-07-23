import axios from 'axios';

// Access token: 879da91a5bef63eefe232903816da1d5298fb587

// base url: https://api-ssl.bitly.com/v4/

export const key = '879da91a5bef63eefe232903816da1d5298fb587';

const api = axios.create({
   baseURL: 'https://api-ssl.bitly.com/v4',
   headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
   }
});

export default api;