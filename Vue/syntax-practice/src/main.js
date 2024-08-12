import { createApp } from 'vue' // Vue 애플리케이션을 생성하는 함수를 가져온다
import './style.css'
import App from './App.vue' // 최상위 컴포넌트(=App)을 가져온다
import vuetify from './plugins/vuetify' // Vuetify 플러그인을 가져온다
import 'vuetify/styles'; // Vuetify 스타일을 가져옵니다.

const app = createApp(App); // Vue 애플리케이션 인스턴스 생성
app.use(vuetify); // Vuetify 플러그인을 Vue 애플리케이션에 추가
app.mount('#app'); // Vue 애플리케이션을 '#app' 앨리먼트로 마운트
// main.js의 <div id="app"> 부분에 연결