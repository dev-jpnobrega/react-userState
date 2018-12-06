import CryptoJs from 'crypto-js';

const MARVEL_API = 'https://gateway.marvel.com/v1/public';
const PRIVATE_KEY =  '07a9e17fbe86bf1cc5dd92e5989ca69ce27fc36a';
const PUBLIC_KEY = 'a37dc84ae9747b372ae48aaa42efeacf';

class MarvelAPI {
  async getAllComics({ limit }) {
    const ts = new Date().getTime();
    const hash = CryptoJs.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString()
    const queryStringParams = `?apikey=${PUBLIC_KEY}&limit=${limit}&hash=${hash}&ts=${ts}`;

    const response = await fetch(`${MARVEL_API}/comics${queryStringParams}`);
    const { data } = await response.json();

    return data.results;
  }
}

export default MarvelAPI;