<script>
 import axios from "axios";
 import router from "@/router";

 export default {
   data() {
     return {
       userid: '',
       history: [],
       books: []
     }
   },
  async mounted() {
    await axios.get('http://localhost:3000/auth/user/' + localStorage.getItem('token'))
        .then(ref=>{
          this.userid = ref.data.id
          this.loading = false
        })
        .catch(err=>{
          this.loading = false
          router.push('/login')
        })
      await axios.get('http://localhost:3000/history/user/' + this.userid,{
        headers:{
          'content-type': "application/json",
          'accept': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
          .then(ref=>{
            this.history = [...ref.data]
            console.log(this.history)
          })
          .catch(err=>{
            throw err
          })
  },
   methods: {
     async ValidateEveryBook(bookId) {
       await axios.get('http://localhost:3000/books/api/' + bookId,{
         headers:{
           'content-type': "application/json",
           'accept': "application/json",
           'Authorization': 'Bearer ' + localStorage.getItem('token')
         }
       })
           .then(ref=>{
             this.books.push(ref.data)
             console.log(this.books)
           })
     }
   }
 }
</script>

<template>
  <div class="section" >
  </div>
</template>

<style scoped>
.section{
  padding: 2%;
}
</style>