<template>
    <VContainer>
      <p>부모로부터 전달 받은 메시지: {{ message }}</p> <!-- 부모로부터 전달받은 메시지 표시 -->
      <VBtn @click="sendMessage">부모에게 메시지 보내기</VBtn> <!-- 부모에게 메시지 전송 -->
    </VContainer>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'; // vue에서 props와 emits를 정의하는 함수
  
  // 부모 컴포넌트로부터 받을 props를 정의
  const props = defineProps({
    message: String, // 부모로부터 전달받는 메시지
  });
  
  // 부모 컴포넌트로 이벤트를 전달할 emits를 정의
  const emit = defineEmits(['update']);
  
  // 부모에게 메시지를 전달하는 함수
  const sendMessage = () => {
    emit('update', '자식 컴포넌트에서 보낸 메시지입니다.'); // 부모에게 이벤트를 통해 메시지 전달
  };
  </script>
  