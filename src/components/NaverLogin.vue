<template>
    <div>
        <a id="custom-login-btn" :href="openLink" target="_blank">
            <img
                :src="image"
                width="222"
            />
        </a>
    </div>
</template>

<script lang="ts">
import qs from 'qs'
import { naverLogin } from '../api'
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'
import {useStore} from 'vuex';
import { VueCookieNext } from 'vue-cookie-next';

import { Options, Vue } from "vue-class-component";

@Options({

  name: 'naverLogin',
  mounted() {  if(this.code) this.getToken ()},
    data () {
    return {
      image: require("../../public/btnG_완성형.png"),
      openLink: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=_qUtiFg7hMyefZfFA8m6&redirect_uri=http://localhost:8080/naverLogin&state=aws123`,
      data: '',
      code: useRoute().query.code,
      store : useStore() as any
    }
  },
  methods: {
    async getToken () {
      this.data = qs.stringify({
        grant_type: 'authorization_code',
        client_id	: '_qUtiFg7hMyefZfFA8m6',
        client_secret: 'EB9RuWHpf_',
        code:this.code,
        state: 'aws123'
      })

      naverLogin.post('', this.data).then((e:any) => {
        console.log(e)
        this.store.commit('setAccessToken', e.data.access_token)
        VueCookieNext.setCookie('refresh_token', e.data.refresh_token)
      }).catch(e => {
        alert('토큰 발급에 실패했습니다.')
      })
    }
  }
})

export default class NaverLogin extends Vue {
  msg!: string;
}
</script>

<style scoped></style>
