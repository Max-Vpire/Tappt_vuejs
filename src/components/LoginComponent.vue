<script>
  import axios from "axios";
  import router from "@/router";

  export default {
    data() {
      return{
        user: {
          number: '',
          password: ''
        },
        loading: false,
        error: false,
        message: '',
        waiting: false
      }
    },
    computed:{
      canActive(){
        return this.user.number
            && this.user.password.trim()
      }
    },
    methods: {
      async Login(){
        this.loading = true
        await axios.post('http://localhost:3000/auth/login', this.user)
            .then(ref=>{
              localStorage.setItem('token', ref.data.token)
              this.loading = false
              router.push('/dashboard')
              console.log(ref.data.token)
            })
            .catch(err=>{
              this.loading = false
              this.error = true
              console.log(err)
              if(err.code === 'ERR_NETWORK'){
                this.message = 'Check please internet connection !!!'
              }
              else{
                this.message = 'Error! Number or Password wrong !'
              }
            })
      }
    },
    async mounted() {
      this.waiting = true
      await axios.get('http://localhost:3000/auth/user/' + localStorage.getItem('token'))
          .then(ref=>{
            router.push('/dashboard')
          })
          .catch(err=>{
            router.push('/login')
          })
    }
  }
</script>

<template>
 <div class="secbody">
   <div v-if="error" role="alert" class="alert alert-error">
     <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
     <span>{{ message }}</span>
     <svg v-on:click="error = false" xmlns="http://www.w3.org/2000/svg" class="close h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
   </div>
 <div class="Login">
   <div class="logocon">
     <h1 class="tittle">Tappt</h1>
     <p>booking place</p>
   </div>
   <div class="form">
     <input v-on:change="Login" v-bind:style="{'border': error ? 'red 1.9px solid' : ''}" v-model="user.number" type="number" placeholder="Phone Number...." class="input input-bordered input-info w-full max-w-xs"/>
     <input v-on:change="Login" v-bind:style="{'border': error ? 'red 1.9px solid' : ''}" v-model="user.password" type="password" placeholder="Password...." class="input input-bordered input-info w-full max-w-xs" />
   </div>
   <div class="footer">
     <button :disabled="!canActive" v-if="!loading" class="btn" v-on:click="Login">Login</button>
     <button v-if="loading" class="btn">
       <span class="loading loading-spinner"></span>
       loading
     </button>
     <router-link class="link link-info" to="/register"> I haven't account >>></router-link>
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
.Login{
  width: 21%;
  height: 46vh;
  background-color: white;
  border-radius: 50px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: login 0.8s ease-in-out;
}
@keyframes login {
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
}
p{
  margin: 0;
  font-family: 'Dancing Script', cursive;
  font-size: 20pt;
}
.form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 20px;
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