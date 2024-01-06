<script>
import axios from "axios";
import router from "@/router";

export default {
  data(){
    return{
      user: {
        name: '',
        surname: '',
        number: '',
        password: '',
      },
      done: false,
      error: false,
      message: '',
      loading: false
    }
  },
  methods: {
   async Register() {
     this.loading = true
      await axios.post('http://localhost:3000/users/', this.user)
          .then(ref=>{
            this.loading = false
            this.done = true
          })
          .catch(err=>{
            this.loading = false
            this.message = err.message
            this.error = true
          })
    }
  },
  async mounted() {
    await axios.get('https://tappt-system-api.onrender.com/auth/user/' + localStorage.getItem('token'))
        .then(ref=>{
          router.push('/dashboard')
        })
        .catch(err=>{
          router.push('/register')
        })
  }
}
</script>

<template>
  <div class="secbody">
    <div v-if="done" role="alert" class="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Your account was created successfully!</span>
        <svg v-on:click="done = false" xmlns="http://www.w3.org/2000/svg" class="close h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </div>
    <div v-if="error" role="alert" class="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Error! This number already taken.</span>
      <svg v-on:click="error = false" xmlns="http://www.w3.org/2000/svg" class="close h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </div>
    <div class="Register">
    <div class="logocon">
      <p>Create your own account</p>
      <h1 class="tittle">Tappt</h1>
      <p>booking place</p>
    </div>
    <div class="form">
      <input v-bind:style="{'border': error ? 'red 1.9px solid' : ''}" v-model="user.name" type="text" placeholder="Name...." class="input input-bordered input-info w-full max-w-xs" />
      <input v-bind:style="{'border': error ? 'red 1.9px solid' : ''}" v-model="user.surname" type="text" placeholder="Surname...." class="input input-bordered input-info w-full max-w-xs" />
      <input v-bind:style="{'border': error ? 'red 1.9px solid' : ''}" v-model="user.number" type="number" placeholder="Phone Number...." class="input input-bordered input-info w-full max-w-xs"/>
      <input v-bind:style="{'border': error ? 'red 1.9px solid' : ''}" v-model="user.password" type="password" placeholder="Password...." class="input input-bordered input-info w-full max-w-xs" />
    </div>
    <div class="footer">
      <button v-if="!loading" class="btn" v-on:click="Register">Register</button>
      <button v-if="loading" class="btn">
        <span class="loading loading-spinner"></span>
        loading
      </button>
      <router-link class="link link-info" to="/login">I have an account already >>></router-link>
     </div>
    </div>
 </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
  .secbody{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Register{
    width: 21%;
    height: 65vh;
    background-color: white;
    border-radius: 50px;
    padding: 2px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    animation: register 0.8s ease-in-out;
  }
  @keyframes register {
    0%{
      transform: translateX(-500%);
    }
    100%{
      transform: translateX(0);
    }
  }
  .logocon{
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tittle{
    font-family: 'Mukta', sans-serif;
    font-size: 40pt;
    color: rgb(59 130 246 / 0.5);
    margin: 0;
    width: 70%;
    text-align: center;
    border-bottom: 1px darkgray solid;
    border-top: 1px darkgray solid;
  }
  .form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: 20px;
  }
  p{
    margin: 0;
    font-family: 'Dancing Script', cursive;
    font-size: 20pt;
  }
  .footer{
    width: 100%;
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
  }
  .btn{
    width: 90%;
    height: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(12, 59, 141, 0.59);
  }
  .alert{
    position: absolute;
    width: 40%;
    top: 20px;
  }
  .close{
    cursor: pointer;
  }
</style>