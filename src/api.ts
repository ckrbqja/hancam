import axios from 'axios'

const kakaoLogin = axios.create({
  baseURL: process.env.VUE_APP_KAKAO_URL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

const naverLogin = axios.create({
  baseURL: '/oauth2.0/token',
  headers: { 
    'X-Naver-Client-Id': '_qUtiFg7hMyefZfFA8m6', 
    'X-Naver-Client-Secret': 'EB9RuWHpf_', 
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
export {kakaoLogin, naverLogin}
