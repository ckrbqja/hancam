'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  KAKAO_OPEN_URL: '"https://kauth.kakao.com/oauth/authorize"',
  KAKAO_URL: '"https://kauth.kakao.com/oauth/token"',
  KAKAO_CLIENT_ID: '"076145c532970856fc53ad5660094847"',
  KAKAO_REDIRECT_RUI: '"http://localhost:8080/kakaologin"'

})
