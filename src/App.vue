<template>
  <div class="body">
    <NavbarComponent  v-if="
        $route.name !== 'login' &&
        $route.name !=='register' &&
        $route.name !== 'AdminControl'&&
        !closedmenu"
        class="header"
    />
      <MinIMenuComponent v-if="
        $route.name !== 'login' &&
        $route.name !=='register' &&
        $route.name !== 'AdminControl'&&
        closedmenu"
      />
        <div class="mainBody">
          <div class="navbar bg-base-100 " v-if="
        $route.name !== 'login' &&
        $route.name !=='register' &&
        $route.name !== 'AdminControl'">
          <div class="flex-1">
            <button class="btn btn-ghost text-xl swap swap-rotate" v-if="!closedmenu" v-on:click="CloseMenu">
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>
            </button>
            <button class="btn btn-ghost text-xl swap swap-rotate" v-if="closedmenu" v-on:click="CloseMenu">
              <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            </button>
          </div>
        </div>
      <router-view class="section"/>
        </div>
    </div>
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import TopBarComponent from "@/components/TopBarComponent.vue";
import MinIMenuComponent from "@/components/MinIMenuComponent.vue";
import router from "@/router";
export default {
  components: {
    NavbarComponent,
    TopBarComponent,
    MinIMenuComponent
  },
  data(){
    return{
      closedmenu: false,
    }
  },
  methods:{
    async CloseMenu() {
      if(this.closedmenu === false){
         this.closedmenu = true
      }
      else {
        this.closedmenu = false
      }
    }
  }
}
</script>
<style>
.body{
  display: flex;
  flex-direction: row;
  height: 100vh;
}
.header{
  display: flex;
  flex: 5;
  height: 100vh;
}

.mainBody{
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 22;
  height: 100vh;
}
.navbar{
  position: relative;
  width: 99%;
  height: 7vh;
  -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  margin: 5px;
  border-radius: 20px;
}
</style>