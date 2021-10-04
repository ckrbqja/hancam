<template>
    <div>
        <a id="custom-login-btn" :href="openLink" target="_blank">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </a>
    </div>
</template>
<script>
import qs from 'qs'
import VueCookies from 'vue-cookies'
import kakaoLogin from '../api'

export default {
  name: 'kakaoLogin',
  component: {},
  data () {
    return {
      openLink: `${process.env.KAKAO_OPEN_URL}?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_RUI}`,
      data: '',
      code: this.$route.query.code
    }
  },
  setup () {},
  created () {},
  mounted () {
    if (this.code) { this.getToken() }
  },
  unmounted () {},
  methods: {
    async getToken () {
      this.data = qs.stringify({
        client_id: process.env.KAKAO_CLIENT_ID,
        grant_type: 'authorization_code',
        redirect_uri: process.env.KAKAO_REDIRECT_RUI,
        code: this.code
      })

      kakaoLogin.post('', this.data).then(e => {
        VueCookies.set('access_token', e.data.access_token, e.data.expires_in)
        VueCookies.set('refresh_token', e.data.refresh_token, e.data.refresh_token_expires_in)
      }).catch(e => {
        alert('실패 ㅠ')
      })
    }
  }
}
</script>

<style scoped></style>
