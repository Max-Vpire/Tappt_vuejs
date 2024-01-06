<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      UPDATE() {
        window.location.reload();
      }
    }
  }
</script>

<template>
  <ul class="menu bg-base-200 rounded-box">
      <img src="@/assets/logo.png" alt="">
    <li :class="[$route.name === 'dashboard' ? 'selected': 'list']">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
      </router-link>
    </li>
    <li :class="[$route.name === 'search' ? 'selected': 'list']">
      <router-link to="/search">
        <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      </router-link>
    </li>
    <li :class="[$route.name === 'marked' ? 'selected': 'list']">
      <router-link to="/marked">
        <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="m320-240 160-122 160 122-60-198 160-114H544l-64-208-64 208H220l160 114-60 198ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </router-link>
    </li>
    <li :class="[$route.name === 'history' ? 'selected': 'list']">
      <router-link to="/history">
        <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
      </router-link>
    </li>
    <li :class="[$route.name === 'profile' ? 'selected': 'list']">
      <router-link to="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
      </router-link>
    </li>
    <li class="logout">
      <label for="my_modal_12"  class="list logout">
        <svg xmlns="http://www.w3.org/2000/svg" height="45" fill="white" viewBox="0 -960 960 960" width="45"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
      </label>
    </li>
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
  </ul>
</template>

<style scoped>
.menu{
  width: 5%;
  height: 97vh;
  background: linear-gradient(87.72deg,#314085 2.12%,#00a6e8 98.98%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 10px;
  animation: CloseMenu 0.4s ease-in-out;
}
@keyframes CloseMenu {
  0%{
    width: 40vh;
  }
  100%{
    width: 5%;
  }
}
img{
  width: 90%;
  border-bottom: 1px darkgray solid;
}
li{
  border-radius: 15px;
  transition: all 0.4s ease-in-out;
}
li:hover{
  background-color: rgba(69, 78, 126, 0.58);
}
.selected svg{
  fill: black;
}
.selected{
  background-color: #fdcb00;
}
.logout:hover{
  background: darkred;
}
.modal {
  position: fixed;
}
</style>