import axios from "axios";

const api = axios.create({
  baseURL: 'https://json-server-ajude-meu-pet.herokuapp.com',
})

export default api