import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 1. Import Okta libraries
import { OktaAuth } from '@okta/okta-auth-js'
import { createOktaAuth } from '@okta/okta-vue'

const app = createApp(App)

app.use(router)

app.mount('#app')


// 2. Create an OktaAuth instance with the settings from your Okta dashboard
const oktaAuth = new OktaAuth({
  issuer: 'https://YOUR_OKTA_DOMAIN/oauth2/default', // e.g. https://dev-123456.okta.com/oauth2/default
  clientId: 'YOUR_CLIENT_ID',
  redirectUri: 'http://localhost:5173/login/callback' // match the "Sign-in redirect URI" from Okta
})

// 3. Register the Okta plugin with the Vue app
createApp(App)
  .use(router)
  .use(createOktaAuth(oktaAuth))
  .mount('#app')
