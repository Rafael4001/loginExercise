import axios from 'axios';

import { API_URL } from '../constants'


export const loginUser = async () => {
  const include = "name,registered,email";

  try {
    const result = await axios.get(`${API_URL}/?inc=${include}`)
      .then(respond => {
        // console.log('respond',respond)
        return respond.data.results
      })
    return result

  } catch (error) {
    console.log(error)
  }
}