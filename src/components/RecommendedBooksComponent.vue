<script>
 import router from "@/router";
import axios from "axios";

 export default {
   async mounted() {
     this.loading = true
     await axios.get('https://tappt-system-api.onrender.com/books/recomends', {
       headers:{
         'content-type': "application/json",
         'accept': "application/json",
         'Authorization': 'Bearer ' + localStorage.getItem('token')
       }
     })
         .then( books => {
            this.books = books.data[0]
         })
         .catch(e=>{
           return e
         })
     this.loading = false
     await axios.get('https://tappt-system-api.onrender.com/auth/user/' + localStorage.getItem('token'))
          .then(ref=>{
            this.user = ref.data
            this.loading = false
          })
          .catch(err=>{
            this.loading = false
            router.push('/login')
          })
   },
   data() {
     return{
        books: [],
       link:'https://tappt-system-api.onrender.com/',
       loading: false,
       user:{
        id: "",
        name: "",
        number: '',
        role: "",
        surname: "",
       }
     }
   },
   methods: {
    async SaveOnHistroy(BookId, bookpath) {
      await axios.post('https://tappt-system-api.onrender.com/history/',{
        userId: this.user.id,
        bookId: BookId,
      }).then(ref=>{
         console.log('saved on history')
      })
      .catch(e=>{
        console.log(e)
      })
    }
   }
 }
</script>

<template>
    <div class="main" v-if="!loading">
      <div v-for="book in books" class="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img :src="link + book.banner"/></figure>
        <div class="card-body">
          <div class="card-actions justify-end">
            <label for="{{book.id}}" class="btn btn-primary">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </label>
            <a :href="link + book.path" @click="SaveOnHistroy(book.id, book.path)" target="_blank" class="btn btn-primary read">Read</a>
          </div>
        </div>
        <input type="checkbox" id="{{book.id}}" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box">
            <h3 class="font-bold text-lg">{{book.name.toLocaleUpperCase()}} By {{book.author}}</h3>
            <hr>
            <p class="py-4">{{book.describtion}}</p>
            <p>type: {{book.type.toLowerCase()}}</p>
            <p>language: {{book.language.toLowerCase()}}</p>
            <div class="modal-action">
              <label for="{{book.id}}" class="btn">Close!</label>
              <button @click="SaveOnHistroy(book.id, book.path)" target="_blank" class="btn btn-primary read">Read</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="main2" v-if="loading">
    <span class="loading loading-ring loading-lg"></span>
  </div>
</template>

<style scoped>
.main{
  width: 100%;
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  overflow: scroll;
}
.main2{
  width: 100%;
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
}
.card{
  width: 100%;
  padding: 0;
}
.card img{
  width: 100%;
}
.read{
  width: 40%;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.swap{
  position: relative;
}
</style>


