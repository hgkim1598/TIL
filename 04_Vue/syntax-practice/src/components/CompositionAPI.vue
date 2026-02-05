<template>
    <VContainer>
        <!--카운터 값 표시-->
        <p>{{ count }}</p>
        <!-- 카운터를 증가시키는 버튼 추가 -->
         <VBtn @click="increment">증가</VBtn>
    </VContainer>
</template>

<script setup>
import {ref} from 'vue';

const count = ref(0); // 반응형 변수 count 정의, 0으로 초기화

const increment = () => {
    count.value++; // count 값을 1 증가
};
</script>

<style scoped>
p{
    font-size: 18px;
    color: red;
}
</style>