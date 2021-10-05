import { VueCookieNext } from 'vue-cookie-next';

export default class Helper {
    setToken = (e:any) => {
      VueCookieNext.setCookie('access_token', e.data.access_token, e.data.expires_in)
      VueCookieNext.setCookie('refresh_token', e.data.refresh_token, e.data.refresh_token_expires_in)
    }
}
