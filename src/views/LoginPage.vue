<script>
import LoginComponent from '@/components/LoginComponent.vue'
export default {
  components: {
    LoginComponent
  }
}
</script>

<template>
  <div class="body">
    <LoginComponent/>
  </div>
</template>

<style scoped>
.body{
  width: 100%;
  height: 100vh;
  background-color: rgba(190, 190, 190, 0.39);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>