import axios from 'axios'

const dogApi = axios.create({
    baseURL: 'https://dog.ceo/'
})

export default { dogApi };