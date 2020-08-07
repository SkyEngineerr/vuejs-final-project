<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-5">
    <b-navbar-brand href="#">Stock Trader</b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">
            <router-link to="/" tag="li" >
                <a>Home</a>
            </router-link>
        </b-nav-item>
        <b-nav-item href="#">
             <router-link to="/portfolio" tag="li">
                <a>Portolio</a>
            </router-link>
        </b-nav-item>
        <b-nav-item href="#">
             <router-link to="/stocks" tag="li">
                <a>Stocks</a>
            </router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="updateStocksPrice">End Day</b-nav-item>

        <b-nav-item-dropdown text="Save & Load" right>
          <b-dropdown-item href="#">Save</b-dropdown-item>
          <b-dropdown-item href="#">Load</b-dropdown-item>
   
        </b-nav-item-dropdown>

        <b-nav-item>Funds: ${{funds}}</b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</template>   

<script>
import store from '../store/store';
import {mapActions} from 'vuex';

export default {
    computed:{
        funds(){
            return this.$store.state.funds
        }
    },
    methods:{
        ...mapActions([
            'updateStocksPrice',   
        ]),
    },
}
</script>

<style>
    li, a{
        text-decoration: none;
        color:white;
    }

    a:hover{
        text-decoration: none;
        color:yellow;
    }
</style>