<template>
    <div>
        <div>
           {{code}}<br/>
           {{access_token ? 'access_token:    '+access_token : ''}}<br/>
           {{refresh_token ? 'refresh_token:    ' + refresh_token : ''}}
        </div>
        <a id="custom-login-btn" :href="link" target="_blank">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </a>
    </div>
</template>
<script>
import ApiMixin from '../api'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'kakaoLogin',
  mixins: [ApiMixin],
  component: {},
  data () {
    return {
      title: 'hello woaarld',
      link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=076145c532970856fc53ad5660094847&redirect_uri=http://localhost:8080/kakaologin`,
      url: 'https://kauth.kakao.com/oauth/token',
      methos: 'post',
      data: '',
      code: this.$route.query.code,
      access_token: '',
      refresh_token: ''
    }
  },
  setup () {},
  created () {},
  mounted () {
    if (this.code) {
      console.log(this.getToken())
    }
  },
  unmounted () {
  },
  methods: {
    async getToken () {
      const aa = await axios({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({
          client_id: '076145c532970856fc53ad5660094847',
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:8080/kakaologin',
          code: this.code
        })
      })
      this.access_token = aa.data.access_token
      this.refresh_token = aa.data.refresh_token
    }

  }
}
</script>

<style scoped></style>
