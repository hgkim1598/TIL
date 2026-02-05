<template>
  <!--Vue의 template 섹션은 UI를 정의한다-->
  <VContainer>
    <h1> 기본 컴포넌트</h1>
    <p>{{ message }}</p>
  </VContainer>
</template>

<script setup>
// Vue 컴포넌트의 동작을 정의한다
import {ref} from 'vue'; // ref 함수를 사용하여 반응형 변수를 만든다

const message = ref('Vue3 연습 중입니다') // 초기값 'Vue3 연습 중입니다'

</script>

<style scoped>
  /* 이 컴포넌트에만 적용되는 스타일 */
  p{
    font-size: 18px;
  }
</style>