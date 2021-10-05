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

<script lang="ts">
import qs from 'qs'
import { kakaoLogin } from '../api'
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'
import {useStore} from 'vuex';
import { VueCookieNext } from 'vue-cookie-next';

import { Options, Vue } from "vue-class-component";

@Options({

  name: 'kakaoLogin',
  mounted() {  if(this.code) this.getToken ()},
    data () {
    return {
      openLink: `${process.env.VUE_APP_KAKAO_OPEN_URL}?response_type=code&client_id=${process.env.VUE_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_KAKAO_REDIRECT_RUI}`,
      data: '',
      code: useRoute().query.code,
      store : useStore() as any
    }
  },
  methods: {
    async getToken () {
      this.data = qs.stringify({
        client_id: process.env.VUE_APP_KAKAO_CLIENT_ID,
        redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT_RUI,
        grant_type: 'authorization_code',
        code: this.code
      })

      kakaoLogin.post('', this.data).then((e:any) => {
        
        this.store.commit('setAccessToken', e.data.access_token)
        VueCookieNext.setCookie('refresh_token', e.data.refresh_token, e.data.refresh_token_expires_in)
      }).catch(e => {
        alert('토큰 발급에 실패했습니다.')
      })
    }
  }
})

export default class KakaoLogin extends Vue {
  msg!: string;
}
</script>

<style scoped></style>
