<template>
  <div class="home">
    <KaKaoLogin/>
    <NaverLogin/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import KaKaoLogin from "../components/KakaoLogin.vue"; 
import NaverLogin from "../components/NaverLogin.vue";


@Options({
  components: {
    KaKaoLogin,
    NaverLogin
  },
})
export default class Home extends Vue {}
</script>
