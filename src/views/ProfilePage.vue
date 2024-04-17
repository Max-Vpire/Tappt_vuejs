<script>
import axios from "axios";
import router from "@/router";
import EditProfileComponent from '@/components/EditProfileComponent.vue'

export default {
  async mounted() {
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
      user:{
        id: "",
        name: "",
        number: '',
        role: "",
        surname: "",
      },
      phoneNumber: 'tel:',
      token: localStorage.getItem('token'),
      copied: false
    }
  },
  components: {
    EditProfileComponent
  },
  methods: {
   copyToClipboard() {
      const textarea = document.createElement('textarea');
      textarea.value = this.user.id;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.copied = true
   },
   CopyToken() {
    const textarea = document.createElement('textarea');
      textarea.value = localStorage.getItem('token');
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      document.execCommand('copy');
      document.body.removeChild(textarea);
   }
  }
}
</script>

<template>
  <div class="body" v-if="!loading" >
    <header>
      <div class="profile">
      <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="100" viewBox="0 -960 960 960" width="100"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
      </div>
      <div>
          <h1>
            {{user.surname}} {{user.name}}
          </h1>
      </div>
    </div>
    <div class="card-actions justify-end">
      <label for="edit_profile" class="btn btn-warning">
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
      </label>
    </div>
    </header>
    <EditProfileComponent/>
    <section>
      <div class="flex-row">
      <div class="phoneinf">
        <div class="numberinf">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
          <h1>{{ user.number }}</h1>
        </div>
        <a class="btn btn-warning" :href="'tel:' + user.number">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="black" viewBox="0 -960 960 960" width="24"><path fill="black" d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
        </a>
      </div>
      <div class="phoneinf">
        <div class="numberinf">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z"/></svg>
          <h1>{{ user.role }}</h1>
        </div>
        <label for="my_token" class="btn btn-warning btn-border">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="black" d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
        </label>
    <input type="checkbox" id="my_token" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="black" d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
          Why you need token ?
        </h3>
        <p class="py-4">
          :) If you are admin you can control everything with this token!
          <br> :) Copy token for this!
        </p>
        <div class="modal-action">
          <label @click="CopyToken" for="my_token" class="btn btn-warning btn-border btn-block">Copy Token</label>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div class="phoneinf idinfo wf">
        <div class="numberinf">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M130-574q-7-5-8.5-12.5T126-602q62-85 155.5-132T481-781q106 0 200 45.5T838-604q7 9 4.5 16t-8.5 12q-6 5-14 4.5t-14-8.5q-55-78-141.5-119.5T481-741q-97 0-182 41.5T158-580q-6 9-14 10t-14-4ZM594-81q-104-26-170-103.5T358-374q0-50 36-84t87-34q51 0 87 34t36 84q0 33 25 55.5t59 22.5q34 0 58-22.5t24-55.5q0-116-85-195t-203-79q-118 0-203 79t-85 194q0 24 4.5 60t21.5 84q3 9-.5 16T208-205q-8 3-15.5-.5T182-217q-15-39-21.5-77.5T154-374q0-133 96.5-223T481-687q135 0 232 90t97 223q0 50-35.5 83.5T688-257q-51 0-87.5-33.5T564-374q0-33-24.5-55.5T481-452q-34 0-58.5 22.5T398-374q0 97 57.5 162T604-121q9 3 12 10t1 15q-2 7-8 12t-15 3ZM260-783q-8 5-16 2.5T232-791q-4-8-2-14.5t10-11.5q56-30 117-46t124-16q64 0 125 15.5T724-819q9 5 10.5 12t-1.5 14q-3 7-10 11t-17-1q-53-27-109.5-41.5T481-839q-58 0-114 13.5T260-783ZM378-95q-59-62-90.5-126.5T256-374q0-91 66-153.5T481-590q93 0 160 62.5T708-374q0 9-5.5 14.5T688-354q-8 0-14-5.5t-6-14.5q0-75-55.5-125.5T481-550q-76 0-130.5 50.5T296-374q0 81 28 137.5T406-123q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm302-68q-89 0-154.5-60T460-374q0-8 5.5-14t14.5-6q9 0 14.5 6t5.5 14q0 75 54 123t126 48q6 0 17-1t23-3q9-2 15.5 2.5T744-191q2 8-3 14t-13 8q-18 5-31.5 5.5t-16.5.5Z"/></svg>
          <h1>{{ user.id }}</h1>
        </div>
        <button @click="copyToClipboard" class="btn btn-warning btn-border">
          <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" height="24" fill="black" viewBox="0 -960 960 960" width="24"><path fill="black" d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
          <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" height="24" fill="black" viewBox="0 -960 960 960" width="24"><path fill="black" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
        </button>
      </div>
    </section>
  </div>
  <div class="loadingp" v-if="loading">
    <span class="loading loading-ring loading-lg"></span>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@800&display=swap');
.body{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.loadingp{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading{
  width: 100px;
  height: 100px;
}
header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(87.72deg,#314085 2.12%,#00a6e8 98.98%);
  padding: 20px;
  border-radius: 40px;
}
section{
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.profile{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
.profile h1{
  font-family: 'Mukta', sans-serif;
  font-size: 30pt;
  color: white;
}
.btn svg{
  margin: 10px;
  fill: #000;
}
.phoneinf{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(87.72deg, #2987ac 2.12%, #314085 98.98%);
  width: 40%;
  padding: 20px;
  border-radius: 50px;
  margin: 20px;
}
.numberinf{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}
.phoneinf h1{
  font-family: 'Mukta', sans-serif;
  font-size: 20pt;
  color: #fff;
}
.phoneinf svg{
  fill: white;
}
.flex-row{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  margin: 15px;
}
.idinfo{
  width: 50%;
  background: linear-gradient(87.72deg, #2987ac 2.12%, #314085 98.98%);
}
h3{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.numberinf a {
  background-color: #fdcb00;
  padding: 5px;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
}
svg path{
  transition: all 0.4s ease-in-out;
}
.numberinf a:hover {
  background-color: #314085;
}
.numberinf a:hover svg path{
  fill: white;
}
.numberinf label {
  background-color: darkred;
  padding: 5px;
  border-radius: 10px;
}
.numberinf a svg path{
  fill: black;
}
label{
  cursor: pointer;
}
.nav{
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20%;
}
.wf{
  width: 90%;
}
</style>