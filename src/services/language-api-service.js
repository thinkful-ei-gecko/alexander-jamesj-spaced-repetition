import config from '../config'
import TokenService from './token-service'

const LanguageAPIService = {
  getUserLanguage: () => {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => Promise.reject(err))
      } else {
        return res.json()
      }
    })
  }
}

export default LanguageAPIService