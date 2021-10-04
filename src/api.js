import axios from 'axios'

const kakaoLogin = axios.create({
  baseURL: process.env.KAKAO_URL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

export default kakaoLogin
