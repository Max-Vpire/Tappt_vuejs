<script>
  import HistoryComponent from "@/components/HistoryComponent.vue";
  export default {
    components: {
      HistoryComponent
    }
  }
</script>

<template>
  <div class="body">
    <header class="navbar bg-base-100">
      <h1 class="btn btn-ghost text-xl tittle">
        History
      </h1>
    </header>
    <HistoryComponent/>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');
.body{
  display: flex;
  flex-direction: column;
  gap: 3vh;
}
  header{
    box-shadow: none;
    border-bottom: darkgray 1px solid;
    border-radius: 0;
  }
.tittle{
  font-family: 'Rubik Doodle Shadow', system-ui;
  font-size: 30pt;
  margin: 15px;
}
</style>