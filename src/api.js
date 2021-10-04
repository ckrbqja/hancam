import axios from 'axios'

export default {
  mounted () {
    console.log(1)
  },
  method: {
    async $callAPI (url, methos, data) {
      return axios({
        methos,
        url,
        data
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
