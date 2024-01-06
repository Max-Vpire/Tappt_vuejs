<script>
import axios from "axios";
import router from "@/router";

export default {
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
  },
  data() {
    return{
      query: '',
      books: [],
      loading: false,
      link:'http://localhost:3000/',
      notfound: false
    }
  },
  methods:{
    async SearchBooks() {
      this.loading = true
      await axios.get('http://localhost:3000/books/search/'+ this.query.toLowerCase(),{
        headers:{
          'content-type': "application/json",
          'accept': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
          .then(ref=>{
            if(ref.data.length === 0){
              this.notfound = true
            }
            else {
              this.books = ref.data
              this.notfound = false
            }
          })
          .catch(err =>{
            console.log(err)
      })
      this.loading = false
    }
  }
}
</script>

<template>
<div class="body">
  <header>
    <input v-on:change="SearchBooks" v-model="query" type="search" placeholder="Search book......" class="input input-bordered input-info w-full max-w-xs"/>
    <button v-on:click="SearchBooks" class="btn btn-success btn-outline search-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
    </button>
  </header>
  <section>
    <div class="main" v-if="!loading && !notfound">
      <div v-for="book in books" class="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img :src="link + book.banner"/></figure>
        <div class="card-body">
          <h2 class="card-title">{{book.name.toLocaleUpperCase()}}!</h2>
          <p>by {{book.author}}</p>
          <div class="card-actions justify-end">
            <label for="my_modal_6" class="btn btn-primary">
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </label>
            <a :href="link + book.path" target="_blank" class="btn btn-primary read">Read</a>
          </div>
        </div>
        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box">
            <h3 class="font-bold text-lg">{{book.name.toLocaleUpperCase()}} By {{book.author}}</h3>
            <hr>
            <p class="py-4">{{book.describtion}}</p>
            <p>type: {{book.type.toLowerCase()}}</p>
            <p>language: {{book.language.toLowerCase()}}</p>
            <div class="modal-action">
              <label for="my_modal_6" class="btn">Close!</label>
              <a :href="link + book.path" target="_blank" class="btn btn-primary read">Read</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main2" v-if="loading && !notfound">
      <span class="loading loading-ring loading-lg"></span>
    </div>
    <div>
      <h1 style="text-align: center" v-if="notfound">Books not found!!!</h1>
    </div>
  </section>
</div>
</template>

<style scoped>
.body{
  display: flex;
  flex-direction: column;
}
header{
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  height: 10vh;
}
.search-button:hover svg{
  fill: white;
}
.main{
  width: 100%;
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  overflow: scroll;
  padding: 20px;
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
.modal{
  height: 100vh;
}
</style>