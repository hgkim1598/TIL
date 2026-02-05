<template>
    <VContainer>
        <h1>양방향 바인딩</h1>
        <!--입력 필드 추가 및 v-model로 양방향 바인딩-->
        <VTextField v-model="inputValue" placeholder="입력하세요" outlined ></VTextField>
        <p>입력한 값: {{ inputValue }}</p>
    </VContainer>
</template>

<script setup>
import {ref} from 'vue';

const inputValue = ref(''); // 양방향 바인딩이 적용될 반응형 변수
</script>

<style scoped>
p{
    font-size: 18px;
    color: #b765fa;
}
</style>