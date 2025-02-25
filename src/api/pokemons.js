import axios from './axios.config'


export function getPokemons() {
  return axios({
    url: '/',
    method: 'get'
  })
}

export function getPokemonByName(name) {
  return axios({
    url: `/${name}`,
    method: 'get'
  })
}
