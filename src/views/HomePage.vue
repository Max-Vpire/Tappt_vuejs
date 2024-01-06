<script>
  import axios from "axios";
  import router from "@/router";
  import RecommendedBooksComponent from "@/components/RecommendedBooksComponent.vue"

  export default {
    components: {
      RecommendedBooksComponent
    },
    data() {
      return{
        loading: false,
        user: {
          id: "",
          name: "",
          number: '',
          role: "",
          surname: "",
        }
      }
    },
    async mounted() {
      this.loading = true
      await axios.get('http://localhost:3000/auth/user/' + localStorage.getItem('token'))
          .then(ref=>{
            this.user = ref.data
            this.loading = false
          })
          .catch(err=>{
            this.loading = false
            router.push('/login')
          })
    }
  }
</script>

<template>
  <div class="p20">
    <recommended-books-component/>
  </div>
</template>

<style scoped>
.p20{
  padding: 20px;
}
</style>