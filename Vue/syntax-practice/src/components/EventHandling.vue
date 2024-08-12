<template>
    <!-- 이번트 핸들링 -->
    <VContainer>
        <h1> 이벤트 핸들링 </h1>
        <VBtn @click="handleClick">버튼</VBtn>
        <p>{{ message }}</p> <!--클릭 이벤트를 통해 업데이트 될 텍스트-->
    </VContainer>
</template>
<script setup>
import {ref} from 'vue'; // ref 함수를 사용해 반응형 변수를 만든다

const message = ref('') // 클릭 이벤트에 따라 업데이트될 반응형 변수

const handleClick = () => {
    message.value = '버튼이 클릭되었습니다';
};
</script>

<style scoped>
    p{
        font-size: 18px;
        color: green;
    }
</style>