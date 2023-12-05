import axios from 'axios';
import {createAPI, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: 'Hi',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '4cd5bcdb61msha4e901fb054dd85p1d025djsn0417a6aa941f',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const spotifyAPI = createAPI({
    reducerPath: 'spotifyAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:   'https://spotify23.p.rapidapi.com/search/',

    })
})