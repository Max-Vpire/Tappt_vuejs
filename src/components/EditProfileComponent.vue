<script>
import axios from 'axios';

export default{
     async mounted() {
      await axios.get('http://localhost:3000/auth/user/' + localStorage.getItem('token'))
          .then(ref=>{
            this.idx = ref.data.id
            console.log(this.idx)
            this.loading = false
          })
          .catch(err=>{
            console.log(err);
          })
    },
    data() {
        return {
            user: {
             name: '',
             surname: '',
             password: '',
          },
          idx: ''
        }
    },
    methods: {
      async EditProfile() {
        await axios.put('http://localhost:3000/auth/edit/' + this.idx,{
          user:{
            name: this.user.name,
            surname: this.user.surname,
            password: this.user.password
          },
          headers:{
            'content-type': "application/json",
            'accept': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(ref=>{
          localStorage.setItem('token', ref.data.token)
          window.location.reload();
        })
        .catch(e => {
          console.log(e)
        })
        this.user.name = ''
        this.user.surname = '',
        this.user.password = ''
        }
    },
    computed:{
      canActive(){
        return this.user.name.trim()
            && this.user.password.trim() 
            && this.user.surname.trim()
      }
    },
}
</script>
<template>
    <div>
        <input type="checkbox" id="edit_profile" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box">
            <h1 class="tittle">Let's go edit your profile !</h1>
            <div class="form">
             <input v-model="user.name" type="text" placeholder="Name...." class="input input-bordered input-info w-full max-w-xs" />
             <input v-model="user.surname" type="text" placeholder="Surname...." class="input input-bordered input-info w-full max-w-xs" />
             <input v-model="user.password" type="password" placeholder="Password...." class="input input-bordered input-info w-full max-w-xs" />
            </div>
            <div class="modal-action">
              <label for="edit_profile" class="btn btn-error">Cancle!</label>
              <button :disabled="!canActive" for="edit_profile" v-on:click="EditProfile" class="btn btn-info">Edit</button>
            </div>
          </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap');
.tittle{
  font-family: 'Mukta', sans-serif;
  font-size: 20pt;
  color: black;
}
.modal-box{
    height: 40vh;
    width: 20%;
}
.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: 20px;
  }
</style>