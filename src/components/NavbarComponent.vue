<script>
import axios from "axios";
import router from "@/router";
export default {
  data() {
    return{
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
  methods:{
    UPDATE() {
      window.location.reload();
    }
  }
}
</script>

<template>
<div class="nav">
  <header>
    <img src="../assets/logo.png" alt="">
  </header>
  <section>
    <router-link class="list" to="/dashboard" :class="[$route.name === 'dashboard' ? 'selected': 'list']">
      <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
      <h1>DASHBOARD</h1>
    </router-link>
    <router-link class="list" to="/search" :class="[$route.name === 'search' ? 'selected': 'list']">
      <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      <h1>SEARCH BOOK</h1>
    </router-link>
    <router-link class="list" to="/marked" :class="[$route.name === 'marked' ? 'selected': 'list']">
      <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        <h1>MARKED</h1>
    </router-link>
    <router-link class="list" to="/history" :class="[$route.name === 'history' ? 'selected': 'list']">
      <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
      <h1>HISTORY</h1>
    </router-link>
    <router-link class="list" to="/profile" :class="[$route.name === 'profile' ? 'selected': 'list']">
      <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
      <h1>PROFILE</h1>
    </router-link>
      <label for="my_modal_12"  class="list logout">
        <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
        <h1>LOGOUT</h1>        
      </label>
    <input type="checkbox" id="my_modal_12" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are you sure!</h3>
        <p class="py-4">You will logout after click on red button</p>
        <div class="modal-action">
          <label for="my_modal_12" class="btn">Cancle!</label>
          <router-link v-on:click="UPDATE" to="/logout" class="btn btn-error">Yes!</router-link>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <svg xmlns="http://www.w3.org/2000/svg" height="65" fill="white" viewBox="0 -960 960 960" width="65"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
    <h1>Welcome Back!
      {{user.name}}</h1>
  </footer>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Moon+Dance&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap');
.nav{
  width: 100%;
  height: 100vh;
  background: linear-gradient(87.72deg,#314085 2.12%,#00a6e8 98.98%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: OpenMenu 0.4s ease-in-out;
}
@keyframes OpenMenu {
  0%{
    flex: 1;
    width: 0;
  }
  100%{
    flex: 5;
    height: 100%;
  }
}
header{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
section{
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.list{
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  border-radius: 20px;
  transition: all 0.4s ease-in-out;
  animation: closeinglist 0.4s ease-in-out;
}
@keyframes closeinglist {
  0%{
    width: 0;
    font-size: 2px;
  }
  100%{
    width: 100%;
    font-size: 17pt;
  }
}
.list:hover{
  background-color: rgba(69, 78, 126, 0.58);
}
.list h1{
  color: white;
  font-size: 17pt;
  font-weight: 600;
  animation: closeinglist 0.4s ease-in-out;
}
.selected{
  background: #fdcb00;
  transition: all 0.2s ease-in-out;
}
.selected h1{
  color: black;
}
.selected svg{
  fill: black;
}
.logout:hover{
  background: darkred;
}
footer{
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vh;
}
footer h1{
  color: white;
  font-size: 20pt;
  font-weight: 700;
  font-family: 'Moon Dance', cursive;
}
footer svg{
  fill: #000;
}
</style>