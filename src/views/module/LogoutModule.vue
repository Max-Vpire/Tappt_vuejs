<script>
import router from "@/router";

export default {
  mounted() {
    localStorage.clear()
    router.push('/login')
  }
}
</script>

<template>

</template>

<style scoped>

</style>