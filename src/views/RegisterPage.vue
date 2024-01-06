<script>
 import RegisterComponent from "@/components/RegisterComponent.vue";
 export default {
   components: {
     RegisterComponent
   }
 }
</script>

<template>
  <div class="body">
    <RegisterComponent/>
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