<template>
  <div class="container">
    <div class="row" >
    
      <div class="col-6 mb-4" v-for="item in stocks">
        <div class="card">
          <div class="card-header">{{item.name}} (Price: {{item.price}})</div>
          <div class="card-body">
            <input :id="item.name" type="text" placeholder="Quantity" 
            @change="quantity=$event"/>
            <button class="btn btn-primary" @click="buyStock(quantity)">Buy</button>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    data:function(){
        return{
            quantity:null,
            id:null
        }
    },
    methods:{
        ...mapActions([
            'buyStock',   
        ]),
    },
    computed:{
        stocks(quantity){
            
            return this.$store.state.stocks
        },
        
    }
}
</script>