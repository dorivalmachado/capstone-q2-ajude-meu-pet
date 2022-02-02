import axios from "axios";

export const api = axios.create({
  baseURL: 'https://json-server-ajude-meu-pet.herokuapp.com',
})

export const cepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
})