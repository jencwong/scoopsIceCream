import sum from './sum';
import axios from 'axios';


console.log(sum(1,2));

const main = async () => {
  const res = await axios.get('https://fizal.me/pokeapi/api/v2/name/bulbasaur.json');
  console.log(res.data);
}

main();


