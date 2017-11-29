import axios from "axios"
import config from '../config'

export default {
  user: {
    login: credentials =>
      axios.post(`${config.localhost}/api/auth`, { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post(`${config.localhost}/api/users`, { user }).then(res => res.data.user)
  }
};
