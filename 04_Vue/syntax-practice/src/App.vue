<template>
  <!-- App 컴포넌트의 템플릿 섹션입니다. -->
  <VApp>
    <VMain>
      <VContainer>
        <!-- 각 컴포넌트를 추가하여 화면에 표시합니다. -->
        <BasicComponent />
        <EventHandling />
        <TwoWayBinding />
        <ParentComponent />
        <CompositionAPI />
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import BasicComponent from './components/BasicComponent.vue'; // 기본 컴포넌트를 가져옵니다.
import EventHandling from './components/EventHandling.vue'; // 이벤트 핸들링 컴포넌트를 가져옵니다.
import TwoWayBinding from './components/TwoWayBinding.vue'; // 양방향 바인딩 컴포넌트를 가져옵니다.
import ParentComponent from './components/ParentComponent.vue'; 
import ChildComponent from './components/ChildComponent.vue'; 
import CompositionAPI from './components/CompositionAPI.vue'; // 컴포지션 API 컴포넌트를 가져옵니다.

export default {
  components: {
    BasicComponent, // BasicComponent를 등록합니다.
    EventHandling, // EventHandling 컴포넌트를 등록합니다.
    TwoWayBinding, // TwoWayBinding 컴포넌트를 등록합니다.
    ParentComponent, // ParentComponent 컴포넌트를 등록합니다.
    ChildComponent,
    CompositionAPI, // CompositionAPI 컴포넌트를 등록합니다.
  },
};
</script>
