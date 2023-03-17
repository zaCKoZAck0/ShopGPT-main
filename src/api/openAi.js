import { BACKEND_URL } from './util';
import axios from 'axios';

async function askQuery(query) {
  const res = await axios.get(`${BACKEND_URL}/chat`, {
        params: {
          query: query
        },
      });;
  console.log(res);
  return res.data.message;
}

export default askQuery;
