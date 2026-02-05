<template>
    <VContainer>
      <h1>부모 컴포넌트</h1>
      <!-- 자식 컴포넌트를 추가하고, props를 통해 데이터를 전달 -->
      <ChildComponent :message="parentMessage" @update="handleUpdate" />
      <!-- 자식 컴포넌트에서 전달받은 메시지 -->
      <p>자식 컴포넌트에서 받은 값: {{ childMessage }}</p>
    </VContainer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  const parentMessage = ref('부모가 전달하는 메시지'); // 부모 컴포넌트에서 자식에게 전달할 메시지
  const childMessage = ref(''); // 자식으로부터 받을 메시지를 저장할 변수
  
  // 자식 컴포넌트로부터 이벤트를 통해 메시지를 업데이트하는 함수
  const handleUpdate = (value) => {
    childMessage.value = value; // 자식으로부터 받은 메시지를 업데이트
  };
  </script>
  