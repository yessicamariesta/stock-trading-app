import axios from 'axios'

const TOKEN = 'cd3v5p2ad3ic2v61iic0cd3v5p2ad3ic2v61iicg'

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: TOKEN,
  },
})
